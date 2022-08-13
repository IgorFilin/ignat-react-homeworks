import React, {useMemo, useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'


export const Clock = React.memo(() => {

    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
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
            setDate(new Date())
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

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds()
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let data = date.getDate();

    function getZero(num:number){
        if (num >= 0 && num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    const stringTime = hour+":"+ getZero(minutes)+':'+ getZero(seconds)
    const stringDate = getZero(data)+'.'+ getZero(month) +'.'+ year  // fix with date
    // const stringDate =  date.toLocaleDateString()


    let message = '';
    if (hour <= 13) {
        message = 'Good morning';
    } else if (hour <= 18) {
        message = 'Good afternoon';
    } else if (hour <= 24){
        message = 'Good evening';
    } else if (hour >= 6 && hour <= 24) {
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


