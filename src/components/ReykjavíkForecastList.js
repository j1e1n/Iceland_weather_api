import React from 'react';


const ReykjavíkForecastList = ({forecasts, loaded, handleTimeClick}) => {

    if(!loaded){
        return(
            <p>loading.....</p>
        )
    }

        const timeListItems = forecasts.results.[0].forecast.map((report, index) => {
            return <li key={index} onClick={() => {handleTimeClick(report)}}>{report.ftime}</li>
        })
    
    

    return(
        <>
        <div className="forecast-list">
            <h4>Click a time to see the forecast</h4>
            <ul>
                {timeListItems}
            </ul>
        </div>
        </>
    )
};


export default ReykjavíkForecastList;
