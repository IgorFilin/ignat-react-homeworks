import {loadingReducer} from './loadingReducer'
import {applyMiddleware, combineReducers, legacy_createStore, Dispatch, AnyAction} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import {RequestReducer} from "./RequestReducer";
import MiddleWareThunk, {ThunkAction} from "redux-thunk";


const rootReducer = combineReducers({
    isLoading: loadingReducer,
    theme: themeReducer,
    Request:RequestReducer
})

const store = legacy_createStore(rootReducer,applyMiddleware(MiddleWareThunk))

export default store

export type AppStoreType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store // for dev
