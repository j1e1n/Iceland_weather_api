import React, {useEffect, useState} from 'react';


const ForecastContainer = () => {

    const [forecasts, setForecasts] = useState([]);

    console.log(forecasts)

    const getForecasts = () => {
        console.log("getting forecasts");
        fetch('http://apis.is/weather/forecasts/en?stations=1,422')
        .then(res => res.json())
        .then(data => setForecasts(data))
    }


    useEffect(() => {
        getForecasts();
    }, [])


    return(
        <p>forecast container</p>

    )
}


export default ForecastContainer;
