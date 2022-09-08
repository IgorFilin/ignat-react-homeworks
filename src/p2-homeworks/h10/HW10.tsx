import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {initStateType, loadingAC} from "./bll/loadingReducer";

function HW10() {
    // useSelector, useDispatch
    const isLoading = useSelector<AppStoreType, initStateType>(state => state.isLoading)
    const loading = isLoading.isLoading
    const dispatch = useDispatch()


    const setLoading = () => {
        // dispatch
        dispatch(loadingAC())
        setTimeout(()=>{
            dispatch(loadingAC())
        },3000)
        // setTimeout
        console.log('loading...')
    };

    return (
        <div >
            <hr/>
            homeworks 10
            {/*should work (должно работать)*/}
            {loading ? (<div style={{textAlign: 'center', fontSize: '20px'}}><img style={{width:'80px',height:'50px'}} src="https://forumupload.ru/uploads/0019/3c/8c/2/282858.gif" alt="loading"/></div>) : (
                <div style={{textAlign: 'center', fontSize: '20px'}}>
                    <SuperButton onClick={setLoading}>set loading...</SuperButton>
                </div>

            )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
