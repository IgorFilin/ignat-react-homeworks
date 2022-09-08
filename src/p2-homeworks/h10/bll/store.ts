import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    theme: themeReducer

})

const store = legacy_createStore(rootReducer)

export default store

export type AppStoreType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store // for dev
