import {API} from "../../../api/API";
import {Dispatch} from "redux";
import {AppStoreType} from "./store";
import {ThunkAction} from "redux-thunk";

export type initialStateRequestReducerType = {
    success: boolean
    requestText: string
}
type setValueSuccessType = ReturnType<typeof setValueSuccess>
type setRequestTexType = ReturnType<typeof setRequestText>
export type AllActionsType = setValueSuccessType | setRequestTexType
type getStateType = () => AppStoreType

export const initialState = {
    success: false,
    requestText: '',
}

export const RequestReducer = (state: initialStateRequestReducerType = initialState, action: AllActionsType) => {
    switch (action.type) {
        case 'SET-VALUE-SUCCESS': {
            return {...state, success: action.value}
        }
        case "SET-REQUEST-TEXT": {
            return {...state, requestText: action.text}
        }
        default:
            return state
    }
};

export const setValueSuccess = (value: boolean) => {
    return {type: 'SET-VALUE-SUCCESS', value} as const
}
export const setRequestText = (text: string) => {
    return {type: 'SET-REQUEST-TEXT', text} as const
}

export const getSuccessThunkCreator = (value: boolean):any => {
    return (dispatch:Dispatch) => {
        API.RequestsAPI(value)
            .then(data => {
                dispatch(setRequestText(data.info))
            })
            .catch((error) => {
                    console.warn(error.response.data.errorText);
                    dispatch(setRequestText(error.response.data.info))
                }
            )
    }
}
