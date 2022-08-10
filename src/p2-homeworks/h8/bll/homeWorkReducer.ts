import {UsersType} from "../HW8";

type ActionsType = sortUsersACType|checkAgeACType
type sortUsersACType = ReturnType<typeof sortUsersAC>
type checkAgeACType = ReturnType<typeof checkAgeAC>

export const homeWorkReducer = (state: UsersType, action: ActionsType): UsersType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if(action.payload === 'up'){
                return [...state].sort((a,b)=>a.name.localeCompare(b.name))
            }else if (action.payload === 'down'){
                return [...state].sort((a,b)=> a.name > b.name?-1:1)
            }
        }
        case 'check': {
            // need to fix
            return state.filter(us => us.age > action.payload)
        }
        default: return state
    }
}
export const sortUsersAC = (valueSort:string) => {
    return {type: 'sort', payload: valueSort} as const
}

export const checkAgeAC = (valueCheck:number) => {
    return {type: 'check', payload: valueCheck} as const
}