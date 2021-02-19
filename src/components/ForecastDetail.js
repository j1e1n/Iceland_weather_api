import React from 'react';


const ForecastDetail = ({selectedTime}) => {

    console.log("selected time is ", selectedTime)


    return(
    
        <div className="forecast-detail">
            <p>At {selectedTime.ftime}, the weather will be {selectedTime.W}.</p>
        </div>
        
    )
};



export default ForecastDetail;