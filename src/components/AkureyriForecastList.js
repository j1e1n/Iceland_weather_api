import React from 'react';


const AkureyriForecastList = ({forecasts, loaded, handleTimeClick}) => {

    if(!loaded){
        return(
            <p>loading.....</p>
        )
    }

        const timeListItems = forecasts.results.[1].forecast.map((report, index) => {
            return <li key={index} onClick={() => {handleTimeClick(report)}}>{report.ftime}</li>
        })
    
    

    return(
        <>
        <div className="forecast-list">
        <h3>Click a time to see the forecast</h3>
            <ul>
                {timeListItems}
            </ul>
        </div>
        </>
    )
};


export default AkureyriForecastList;
