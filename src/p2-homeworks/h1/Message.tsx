import React from 'react'
import classes from './Message.module.css'

type MessageTypeProps = {
    avatar: string
    name: String,
    message: String,
    time: String,
}


function Message(props: MessageTypeProps) {
    return (
        <div className={classes.messages}>
            <div className={classes.conteinerAvatar}><img src={props.avatar} className={classes.avatar}/></div>
            <div className={classes.name}>{props.name}
                <div className={classes.message}>{props.message}</div>
            </div>

            <div className={classes.time}>{props.time}</div>
        </div>
    )
}

export default Message
