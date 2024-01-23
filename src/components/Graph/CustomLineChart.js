import React, {useEffect, useState} from 'react'
import {LineChart} from "@mui/x-charts";
import {Box} from "@mui/material";
import SockJsClient from "react-stomp";
import Typography from "@mui/material/Typography";
import { SensorMap } from '../SensorButton/SensorMap';
const { DateTime } = require("luxon");


const CustomLineChart = ({...props}) => {
    const sensorData = props.sensorData;
    const xAxisData = props.xAxisData;
    const yAxisData = props.yAxisData;
    // console.log(props.sensorTypeId);
    // console.log(SensorMap.find(s => s.id === props.sensorTypeId));
    const sensorName = SensorMap.find(s => s.id === props.sensorTypeId).name;
    const sensorUnit = SensorMap.find(s => s.id === props.sensorTypeId).unit;
    // const [latestData, setLatestData] = useState({data: []});
    // const [test2, setTest2] = useState("");
    const [testData, setTestData] = useState({data: []});
    const [test2, setTest2] = useState("");
    const [average, setAverage] = useState([]);

    // axis representing time
    // const xAxisData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // const [xAxisData, setXAxisData] = useState([]);
    
    // axis representing sensor value
    // const yAxisData = [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8];
    // const yAxisData = [];
    // const [yAxisData, setYAxisData] = useState([]);
    // data.map((value, index) => ({ x: props.timestamp[index], y: value }))
    // yAxisData.push(SensorMap.find(s => s.id === props.sensorTypeId).graph_min);
    // yAxisData.push(SensorMap.find(s => s.id === props.sensorTypeId).graph_max);
    function calculateAverage(array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }


    function calculateAverageForCurrentSensor() {
        const avg = calculateAverage(test2);
        setAverage(avg);
    }

    useEffect(() => {
        // Call the function to calculate and display the average when sensorData changes
        const avg = calculateAverage(test2);
        setAverage(avg);
    }, [test2]);
    console.log("Average" + average)
    // console.log("val" + test2);
    // console.log("val" + testData);

    // useEffect(() => {
    //
    //     const test = async () => {
    //         const body = await getData();
    //         console.log(body);
    //         setTestData({data: body});
    //         setTest2(body[0].value);
    //
    //         calculateAverageForCurrentSensor();
    //         setAverage(average)
    //         // console.log("val" + test2);
    //         return body;
    //     }
    //     test();
    // }, []);
    useEffect(() => {
        const fetchData = async () => {
            const body = await getData();
            console.log(body);
            setTestData({ data: body });
            if (body.length > 0) {
                setTest2(body.map(dataPoint => dataPoint.value));
            }
        };

        fetchData();
    }, []);




    // console.log("val" + test2);
    
    // useEffect(() => {
    //     console.log(xAxisData);
    //     console.log(yAxisData);
    //     const test = async () => {
    //         const body = await getData();
    //         console.log(body);
    //         setLatestData({data: body});
    //         // setTest2(body[0].value);
    //         // console.log("val" + test2);
    //         // return body;
    //     }

    //     const parseAxisData = () => {
    //         latestData.data.forEach(e => {
    //             let timestamp = new Date(e.timestamp);
    //             let timerr = `${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;
    //             console.log(timerr);
    //             // console.log(timestamp.getMinutes() + ":" + timestamp.getSeconds());
    //             setXAxisData(axisData => [...axisData, timerr]);
    //             setYAxisData(axisData => [...axisData, parseInt(e.value)]);
    //         });
    //     }
    //     test();
    //     parseAxisData();
    // }, []);
    // }, [props.hiveId, props.sensorTypeId]);

    const valueFormatter = (dateTimeJs) => {
        const dateTime = DateTime.fromJSDate(dateTimeJs); // Luxon DateTime
        return dateTime.toLocaleString(DateTime.TIME_24_SIMPLE);
     };

    return (
        <Box>
            <Typography variant="h6">{sensorName + " (" + sensorUnit + ")"}</Typography>
            {/* <Typography variant="h6">{test2 ? "(" + test2 + ")" : "nodata"}</Typography> */}
            {/* <Typography variant="h6">{latestData.data[0] ? "(" + latestData.data[0].value + ")" : "nodata"}</Typography> */}
            <LineChart
                xAxis={[
                    { 
                        scaleType: 'time', 
                        data: xAxisData,
                        valueFormatter: (value) => (value == null ? 'NaN' : valueFormatter(value))
                    }
                ]}
                series={[
                    {
                        data: yAxisData,
                        valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
                        color: '#A29415'
                        valueFormatter: (value) => (value == null ? 'NaN' : value),
                    },
                ]}
                width={800}
                height={500}
            />

        </Box>
    );
}
export default CustomLineChart
