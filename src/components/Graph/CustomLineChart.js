import React, {useEffect, useState} from 'react'
import {LineChart} from "@mui/x-charts";
import {Box} from "@mui/material";
import SockJsClient from "react-stomp";
import Typography from "@mui/material/Typography";
import {SensorMap} from '../SensorButton/SensorMap';

async function getData() {
    const response = await fetch('http://localhost:8080/api/v1/data/latest?hiveId=1&sensorTypeId=1', {
        headers: {
            Accept: "application/json"
        }
    });
    const body = await response.json();
    return body;
}


const CustomLineChart = ({...props}) => {
    const sensorData = props.sensorData;
    const [testData, setTestData] = useState({data: []});
    const [test2, setTest2] = useState("");
    const [average, setAverage] = useState([]);

    // axis representing time
    const xAxisData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // axis representing sensor value
    const yAxisData = [];
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

    return (
        <Box>
            {/*<Typography variant="h6">{test2 ? "(" + test2 + ")" : "nodata"}</Typography>*/}
            <Typography variant="h6">{testData.data[0] ? testData.data[1].value   : "nodata"}</Typography>
            <LineChart
                xAxis={[{data: xAxisData}]}
                series={[
                    {
                        data: yAxisData,
                        valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
                        color: '#A29415'
                    },
                ]}
                width={500}
                height={500}
            />

        </Box>
    );
}
export default CustomLineChart
