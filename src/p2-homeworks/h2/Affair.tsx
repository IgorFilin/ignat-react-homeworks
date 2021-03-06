import React from 'react'
import classes from "./Affair.module.css";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: string // need to fix any
    id: number
    priotiry: string
    deleteAffairCallback: (id: number) => void // need to fix any !!!
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {
        props.deleteAffairCallback(id)
    }// need to fix!!

    return (
        <div className={classes.content}>
            <div className={classes.affair}>{props.affair}</div>
            <div className={classes.priotiry}>{"[" + props.priotiry + "]"}</div>
            <div>
                {/*<button className={classes.button} onClick={() => deleteCallback(props.id)}>X</button>*/}
                <SuperButton className={classes.button} onClick={() => deleteCallback(props.id)}>X</SuperButton>
            </div>
        </div>
    )
}

export default Affair
