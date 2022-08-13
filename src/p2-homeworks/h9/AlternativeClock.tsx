import React from 'react'
import {useMemo, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import moment from "moment";


export const AlternativeClock = React.memo(() => {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<any>(moment())
    const [show, setShow] = useState<boolean>(false)



    const stop = () => {
        console.log('stop')
        // stop
        clearInterval(timerId)
    }

    const start = () => {
        console.log('start')
        stop()
        const id: number = +setInterval(() => {
            // setDate
            setDate(moment())
        }, 1000)
        setTimerId(id)
    }


    const onMouseEnter = () => {
        // show
        setShow(true)
    }
    const onMouseLeave = () => {
        // close
        setShow(false)
    }


    const stringTime = date.format('HH:mm:ss')
    const stringDate = date.format('DD.MM.yyyy')

    let message = '';
    if (date.format('HH') <= 13) {
        message = 'Good morning';
    } else if (date.format('HH') <= 18) {
        message = 'Good afternoon';
    } else if (date.format('HH') <= 24){
        message = 'Good evening';
    } else if (date.format('HH') >= 6 && date.format('HH') <= 24) {
        message = 'Good night';
    }

    return (
        <div style={{textAlign:'center',fontSize:'30px',fontFamily:'Algerian'}}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <div style={{fontFamily:'Algerian',fontSize:'25px'}}>{message}</div>
                {stringTime}
            </div>

            {show && (
                <div>
                    {stringDate}
                </div>
            )}

            <SuperButton  onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
})



