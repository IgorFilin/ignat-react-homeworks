import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChange &&
        onChange(e)
        onChangeOption &&
        onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => {
            // console.log(value === o)
            return <label className={s.radio} key={name + '-' + i}>
                <input
                    type={'radio'}
                    onChange={onChangeCallback}
                    value={o}
                    name={name}
                    checked={value === o}
                    {...restProps}
                    // name, checked, value, onChange
                />
                {o}
            </label>
        }
    ) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
