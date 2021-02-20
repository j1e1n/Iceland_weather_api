import React, {useEffect, useState} from 'react';
import CitySelector from '../components/CitySelector';
import ForecastDetail from '../components/ForecastDetail';
import ForecastList from '../components/ForecastList';


const ForecastContainer = () => {

    const [forecasts, setForecasts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [selectedTime, setSelectedTime] = useState(0)
    const [city, setCity] = useState(null)

    console.log("city is", city)
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


    const selectReykjavik = () => {
        setCity(forecasts.results[0].name)
    }

    const selectAkureyri = () => {
        setCity(forecasts.results[1].name)
    }




    

    if(!loaded){
        return(
            <p>loading.....</p>
        )
    }


    return(
        <>
        <div className="forecast-container">
        <CitySelector selectReykjavik={selectReykjavik} selectAkureyri={selectAkureyri}/>
        <h1>{city}</h1>
        <ForecastList forecasts={forecasts} loaded={loaded} handleTimeClick={handleTimeClick}/>
        <ForecastDetail selectedTime={selectedTime} loaded={loaded}/>
        </div>
        </>
        
    )
}


export default ForecastContainer;
