import React, {useEffect, useState} from 'react';
import AkureyriForecastList from '../components/AkureyriForecastList';
import CitySelector from '../components/CitySelector';
import ForecastDetail from '../components/ForecastDetail';
import ReykjavíkForecastList from '../components/ReykjavíkForecastList';



const ForecastContainer = () => {

    const [forecasts, setForecasts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [selectedTime, setSelectedTime] = useState(0)
    const [city, setCity] = useState(null)


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



    const handleTimeClick = (report) => {
        setSelectedTime(report)
    }


    const selectReykjavik = () => {
        setCity(forecasts.results[0].name)
        setSelectedTime(0)
    }

    const selectAkureyri = () => {
        setCity(forecasts.results[1].name)
        setSelectedTime(0)
    }

    if (city === 'Reykjavík') {
        return (
            <>
            <div className="forecast-container">
            <CitySelector selectReykjavik={selectReykjavik} selectAkureyri={selectAkureyri}/>
            <h1>{city}</h1>
            <ReykjavíkForecastList forecasts={forecasts} loaded={loaded} handleTimeClick={handleTimeClick} />
            <ForecastDetail selectedTime={selectedTime} loaded={loaded}/>
            </div>
            </>
        )
    } else if(city === 'Akureyri'){
        return (
            <>
            <div className="forecast-container">
            <CitySelector selectReykjavik={selectReykjavik} selectAkureyri={selectAkureyri}/>
            <h1>{city}</h1>
            <AkureyriForecastList forecasts={forecasts} loaded={loaded} handleTimeClick={handleTimeClick} />
            <ForecastDetail selectedTime={selectedTime} loaded={loaded}/>
            </div>
            </>
        )
    } else {
        return (
            <>
            <div className="forecast-container">
            <CitySelector selectReykjavik={selectReykjavik} selectAkureyri={selectAkureyri}/>
            <h1>Please select a city.</h1>
            </div>
            </>
        )
    }

}


export default ForecastContainer;
