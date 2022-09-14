import axios from "axios";


type RequestsAPIType = {
    errorText:string
    info:string
    yourBody:{
        success:boolean
    }
    yourQuery:{}
}

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
    //без settings (withCredentials не нужен, API_KEY не нужен, мой сервер работает без этого)
})

export const API = {
    RequestsAPI(value: boolean) {
        return instance.post<RequestsAPIType>('auth/test', {success: value})
            .then(response => response.data)
    }
}