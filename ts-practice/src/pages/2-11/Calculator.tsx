import React, { useEffect, useState } from 'react'
import TemperatureInput from './TemperatureInput'
import BoilingVerdict from './BoilingVerdict'

function Calculator(): React.ReactElement {
    const [celsius, setCelsius] = useState(0);
    const [fahrenheit, setFahrenheit] = useState(0);
    const [temp, setTemp] = useState({temprature: 0, scale: ''});

    function toCelsius(fahrenheit: number) {
        return (fahrenheit - 32) * 5 / 9;
      }
      
      function toFahrenheit(celsius: number) {
        return (celsius * 9 / 5) + 32;
      }

    //온도 컴버트
    const tryConvert = (temp: number) => {       
        const rounded = Math.round(temp * 1000) / 1000;
        return rounded;
    }

    //값이 바뀔때마다
    const handleChangeTemp = (scale: string, temp: number) => {
        setTemp({temprature: temp, scale: scale});
    }


    //temp 변할때 마다
    useEffect(()=>{
        if(temp.scale === 'c'){
            setCelsius(temp.temprature);
            setFahrenheit(toFahrenheit(tryConvert((temp.temprature))))
        } else {
            setFahrenheit(temp.temprature);
            setCelsius(toCelsius(tryConvert((temp.temprature))))
        }
    }, [temp])

    return (
        <div>
            <TemperatureInput
                scale="c"
                temperature={celsius}
                onTemperatureChange = {handleChangeTemp}/>
            <TemperatureInput
                scale="f"
                temperature={fahrenheit}
                onTemperatureChange={handleChangeTemp} />
            <BoilingVerdict
                celsius={celsius} />
        </div>
    )
}

export default Calculator