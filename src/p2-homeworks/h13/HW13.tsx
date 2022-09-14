import React, {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSuccessThunkCreator, RequestReducer, setValueSuccess} from "../h10/bll/RequestReducer";
import {AppStoreType} from "../h10/bll/store";

export const HW13 = () => {
    return <Request/>
};

const Request = () => {
    const dispatch = useDispatch()
    const success = useSelector<AppStoreType, boolean>(state => state.Request.success)
    const requestText = useSelector<AppStoreType, string>(state => state.Request.requestText)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setValueSuccess(e.currentTarget.checked))
    }
    const onClickHandler = () => {

        dispatch(getSuccessThunkCreator(success))
    }

    return (
        <div style={{textAlign: 'center'}}>
            <input checked={success} type="checkbox" onChange={onChangeHandler}/>
            <button onClick={onClickHandler}>request</button>
            <h3 style={{textAlign: 'left'}}>Request: {requestText}</h3>
        </div>
    )
}