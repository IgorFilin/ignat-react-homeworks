import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChange = (values: number[]) => {
        setValue1(values[0])
        setValue2(values[1])
    }
    const styles = {
        span:{
            fontSize:'25px',
            fontFamily: 'Algerian'
        }
    }


    return (
        <div >
            <hr/>
            homeworks 11
            {/*should work (должно работать)*/}
            <div style={{textAlign:'center'}}>
                <span style={styles.span}>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}

                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div  style={{width: '150px', margin: 'auto'}}>
                <span style={styles.span}>{value1}</span>
                <SuperDoubleRange
                    value={[value1,value2]}
                    onChange={onChange}
                    step={1}
                    max={100}
                    min={0}
                />
                <span style={styles.span}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
            <br/>
            <br/>
        </div>
    )
}

export default HW11
