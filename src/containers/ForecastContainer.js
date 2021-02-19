import React, {useEffect, useState} from 'react';
import ForecastDetail from '../components/ForecastDetail';
import ForecastList from '../components/ForecastList';


const ForecastContainer = () => {

    const [forecasts, setForecasts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [selectedTime, setSelectedTime] = useState(0)

    console.log(forecasts)

    const getForecasts = () => {
        console.log("getting forecasts");
        fetch('http://apis.is/weather/forecasts/en?stations=1,422')
        .then(res => res.json())
        .then(data => setForecasts(data))
        .then(() => setLoaded(true))
    }


    useEffect(() => {
        getForecasts();
    }, [])


    const handleTimeClick = (forecast) => {
        setSelectedTime(forecast)
    }


    return(
        <>
        <div className="forecast-container">
        <ForecastList forecasts={forecasts} loaded={loaded} handleTimeClick={handleTimeClick}/>
        <ForecastDetail selectedTime={selectedTime}/>
        </div>
        </>
        
    )
}


export default ForecastContainer;
