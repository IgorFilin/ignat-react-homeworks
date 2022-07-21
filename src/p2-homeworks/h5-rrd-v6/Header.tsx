import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css'

function Header() {
    return (
        <div className={s.containerBlock}>
            <div className={s.navGroup}>
                <NavLink className={(a) => a.isActive ? s.active : s.navclass} to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
                <NavLink className={(a) => a.isActive ? s.active : s.navclass} to={PATH.JUNIOR}>junior</NavLink>
                <NavLink className={(a) => a.isActive ? s.active : s.navclass} to={PATH.JUNIOR_PLUS}>junior-plus</NavLink>
            </div>
            <div className={s.hoverMe}>Hover me!</div>
        </div>
    )
}

export default Header
