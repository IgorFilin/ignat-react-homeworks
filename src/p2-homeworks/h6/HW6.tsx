import React, {useEffect, useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'


function HW6() {
    const [value, setValue] = useState<string>('')

    useEffect(()=> {restore()},[])

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        setValue(restoreState('editable-span-value',value))
    }
    const clear = () => {
        localStorage.clear()
        setValue('')
    }


    return (
        <div style={{textAlign:"center"}}>
            <hr/>
            homeworks 6
            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    onEnter={save}
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined :<>enter text...<img width={'15px'} src={'https://img.icons8.com/dusk/344/edit--v1.png'} alt="logo"/></>}}/>
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>
            <SuperButton onClick={clear}>clear</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
