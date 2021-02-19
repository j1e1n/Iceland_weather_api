import React, {useEffect, useState} from 'react';
import ForecastList from '../components/ForecastList';


const ForecastContainer = () => {

    const [forecasts, setForecasts] = useState([]);
    const [loaded, setLoaded] = useState(false);

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


    return(
        <>
        <div className="forecast-container">
        <ForecastList forecasts={forecasts} loaded={loaded}/>
        </div>
        </>
        
    )
}


export default ForecastContainer;
