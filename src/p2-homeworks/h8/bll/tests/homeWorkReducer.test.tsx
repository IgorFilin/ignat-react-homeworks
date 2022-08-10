import React from 'react'
import {checkAgeAC, homeWorkReducer, sortUsersAC} from '../homeWorkReducer'
import {OneUserType, UsersType} from "../../HW8";
import exp from "constants";

let initialState: UsersType // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, sortUsersAC('up'))


    expect(newState[0].name).toBe('Александр')
    expect(initialState[0].name).toBe('Кот')
    expect(initialState).not.toBe(newState)
    expect(newState.length).toBe(6)
})
test('sort name down', () => {

    const newState = homeWorkReducer(initialState, sortUsersAC('down'))

    expect(newState[5].name).toBe('Александр')
    expect(initialState[0].name).toBe('Кот')
    expect(initialState).not.toBe(newState)
    expect(newState.length).toBe(6)
})
test('check age 18', () => {


    const newState = homeWorkReducer(initialState, checkAgeAC(18))

    expect(newState.length).toBe(4)
    expect(newState[0].age > 18).toBe(true)
    expect(newState[1].age > 18).toBe(true)
    expect(newState[2].age > 18).toBe(true)
    expect(newState[3].age > 18).toBe(true)
    expect(initialState).not.toBe(newState)

})
