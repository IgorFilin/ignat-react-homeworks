export type initStateType = {
    isLoading:boolean
}
export type loadingACType = ReturnType<typeof loadingAC>

export type allACType = loadingACType

const initState:initStateType = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: allACType): initStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-VALUE-LOADING': {
            return {...state,isLoading:!state.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = () => {
    return {type:'CHANGE-VALUE-LOADING'} as const
} // fix any