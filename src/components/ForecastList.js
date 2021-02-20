import React from 'react';
import ForecastDetail from './ForecastDetail';



const ForecastList = ({forecasts, loaded, handleTimeClick}) => {



    if(!loaded){
        return(
            <p>loading.....</p>
        )
    }

    console.log("forecasts specific", forecasts.results.[0].forecast.[0].ftime)

    const timeListItems = forecasts.results.[0].forecast.map((report, index) => {
        return <li key={index} onClick={() => {handleTimeClick(report)}}>{report.ftime}</li>
    });


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
