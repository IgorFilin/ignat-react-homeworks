import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC, ThemeType} from "./bll/themeReducer";

// const themes = ['dark', 'red', 'some'];
const selectorThemes = (state:any) => {
   return  state.theme.theme
}
const selectorActiveTheme = (state:any)=>{
    return state.theme.activeTheme
}
function HW12() {
    const themes = useSelector(selectorThemes)
    const dispatch = useDispatch()
    // const theme = 'dark'; // useSelector
    const theme = useSelector(selectorActiveTheme)

    // useDispatch, onChangeCallback
    const changeTheme = (valueTheme:ThemeType) => {
        dispatch(changeThemeC(valueTheme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            {/*should work (должно работать)*/}
            <br/>
            <SuperSelect onChangeOption={changeTheme} options={themes}/>
            <hr/>
        </div>
    );
}

export default HW12;
