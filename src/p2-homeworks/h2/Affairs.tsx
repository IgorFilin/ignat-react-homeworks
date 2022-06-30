import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (name: FilterType) => void
    deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
    debugger
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            id={a._id}
            affair={a.name}
            priotiry={a.priority}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = (name: FilterType) => {
        props.setFilter(name)
    } // need to fix
    const setHigh = (name: FilterType) => {
        debugger
        props.setFilter(name)
    }
    const setMiddle = (name: FilterType) => {
        props.setFilter(name)
    }
    const setLow = (name: FilterType) => {
        props.setFilter(name)
    }

    return (
        <div className={classes.affrairs}>
            {mappedAffairs}
            <div className={classes.buttonsChange}>
                <button className={classes.buttonChange} onClick={() => setAll('all')}>All</button>
                <button className={classes.buttonChange} onClick={() => setHigh('high')}>High</button>
                <button className={classes.buttonChange} onClick={() => setMiddle('middle')}>Middle</button>
                <button className={classes.buttonChange} onClick={() => setLow('low')}>Low</button>
            </div>

        </div>
    )
}

export default Affairs
