import React from 'react';
import { Line } from 'react-chartjs-2';

const ReykjavíkForecastList = ({forecasts, loaded, handleTimeClick}) => {

    if(!loaded){
        return(
            <p>loading.....</p>
        )
    }

    const timeListItems = forecasts.results.[0].forecast.map((report, index) => {
        return <li key={index} onClick={() => {handleTimeClick(report)}}>{report.ftime}</li>
        })
    
    

    const timeLabels = forecasts.results.[0].forecast.slice(0, 49).map((report, index) => {
        return report.ftime.substr(0, 16)} )


    const temperatureData = forecasts.results.[0].forecast.slice(0, 49).map((report, index) => {
        return report.T} )

    
    const chartData = {
        labels: timeLabels,
        datasets: [
            {
            label: 'Temperature',
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: temperatureData
            }
        ]
        }

    return(
        <>
        <div className="forecast-list">
            <h3>Select a time</h3>
            <ul>
                {timeListItems}
            </ul>
        </div>

        <div className="chart">
            <Line
            data={chartData}
            options={{
                title:{
                display:true,
                text:'2 Day Temperature Chart',
                fontSize:20
                },
                legend:{
                display:true,
                position:'right'
                }
            }}
            />
        </div>
        </>
    )
};


export default ReykjavíkForecastList;
