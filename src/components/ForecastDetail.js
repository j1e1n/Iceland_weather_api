import React from 'react';


const ForecastDetail = ({selectedTime, loaded}) => {

    console.log("selected time is ", selectedTime)

    if(!selectedTime){
        return(null)
    }


    return(
    
        <div className="forecast-detail">
            <h1>{selectedTime.ftime.substr(0, 10)}</h1>
            <h3>At {selectedTime.ftime.substr(11, 5)}, the weather will be {selectedTime.W}.</h3>
            <p><b>Temperature:</b> {selectedTime.T}°C</p>
            <p><b>Wind Speed:</b> {selectedTime.F} m/s</p>
            <p><b>Wind Direction:</b> {selectedTime.D}</p>
            <p><b>Cloud Cover:</b> {selectedTime.N}%</p>

        </div>
        
    )
};



export default ForecastDetail;