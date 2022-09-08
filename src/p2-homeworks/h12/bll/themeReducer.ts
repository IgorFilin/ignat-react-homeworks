
export type initStateType = typeof initState
export type changeThemeCType = ReturnType<typeof changeThemeC>
export type ActionsType = changeThemeCType
export type ThemeType = 'dark' |  'red' | 'some'

const initState = {
    theme:['dark', 'red', 'some','grey','green'] as Array<ThemeType>,
    activeTheme:'dark'
}

export const themeReducer = (state = initState, action: ActionsType): initStateType => { // fix any
    switch (action.type) {
        case "CHANGE-THEME": {
            return {...state,activeTheme: action.valueTheme};
        }
        default: return state;
    }
};

export const changeThemeC = (valueTheme:ThemeType) => {
    return {type:'CHANGE-THEME',valueTheme} as const
}; // fix any