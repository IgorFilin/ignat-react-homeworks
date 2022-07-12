import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {


    const inputClass = error ? s.error : s.noError // need to fix with (?:)

    return (
        <div className={s.someClass}>
            {/*<input value={name} onChange={setNameCallback} className={inputClass}/>*/}
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass} onEnter={addUser}/>
            {/*<button onClick={addUser}>add</button>*/}
            <SuperButton onClick={addUser}>Add</SuperButton>
            <span className={s.users}>{totalUsers}</span>
            <div>{error}</div>
        </div>
    )
}

export default Greeting
