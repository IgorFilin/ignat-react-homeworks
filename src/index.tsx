import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './p1-main/m1-ui/u1-app/App'
import * as serviceWorker from './serviceWorker'
import {Provider} from "react-redux";
import store from "./p2-homeworks/h10/bll/store";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById("root")
)

serviceWorker.unregister()
