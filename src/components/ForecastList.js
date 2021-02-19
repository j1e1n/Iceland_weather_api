import React from 'react';
import ForecastDetail from './ForecastDetail';



const ForecastList = ({forecasts, loaded}) => {



    if(!loaded){
        return(
            <p>loading.....</p>
        )
    }

    const timeListItems = forecasts.results.['0'].forecast.map((cast, index) => {
        return <li key={index} >{cast.ftime.substr(11)}</li>
    });





    console.log("forecasts results", forecasts.results.['0'].forecast.['0'].ftime)







    return(
        <>
        <div className="forecast-list">
            <ul>
                {timeListItems}
            </ul>
    
        </div>
        </>
    )
};



export default ForecastList;
