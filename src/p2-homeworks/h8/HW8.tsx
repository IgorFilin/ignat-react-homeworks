import React, {useReducer, useState} from 'react'
import {checkAgeAC, homeWorkReducer, sortUsersAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.css'

export type UsersType = OneUserType[]
export type OneUserType = {
    _id: number
    name: string
    age: number
}

const initialPeople = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, dispatchPeople] = useReducer(homeWorkReducer,initialPeople) // need to fix any
    // const [people, setPeople] = useState<UsersType>(initialPeople) // need to fix any

    // need to fix any
    const finalPeople = people.map((p: OneUserType) => (
        <tr key={p._id}>
            <td>{p.name}</td>
            <td align={'center'}>{p.age}</td>
        </tr>
    ))

    const sortUp = () => dispatchPeople(sortUsersAC('up'))
    const sortDown = () => dispatchPeople(sortUsersAC('down') )
    const check18 = () => dispatchPeople(checkAgeAC(18) )

    // const sortUp = () => setPeople(homeWorkReducer(people,{type: 'sort', payload: 'up'}))
    // const sortDown = () => setPeople(homeWorkReducer(people,{type: 'sort', payload: 'down'}))
    // const check18 = () => setPeople(homeWorkReducer(people,{type: 'check', payload: 18}))
    return (
        <div className={s.content}>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            <table rules={"all"} align={"center"} bgcolor={'ascending'} border={2} cellPadding={4}
                   width={250}>{finalPeople}</table>
            <div className={s.buttonsGroup}>
                <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                <div><SuperButton onClick={check18}>check 18</SuperButton></div>
            </div>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
