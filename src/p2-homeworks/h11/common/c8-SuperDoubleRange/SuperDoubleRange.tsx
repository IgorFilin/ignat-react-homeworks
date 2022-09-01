import React from 'react'
import {Slider} from "@material-ui/core";


type SuperDoubleRangePropsType =  {
    onChange: (value: number[]) => void
    value?: number[]
    min?:number
    max?:number
    step?:number
    disable?:boolean
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChange, value,...restProps
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const handleChange = (event: any, newValue: number | number[]) => {
        onChange(newValue as number[]);
    };

    return (
        <div>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                {...restProps}
            />
        </div>
    )
}

export default SuperDoubleRange
