import React, { useEffect, useState } from 'react'
import { LineChart } from "@mui/x-charts";
import { Box } from "@mui/material";
import SockJsClient from "react-stomp";
import Typography from "@mui/material/Typography";
import { SensorMap } from '../SensorButton/SensorMap';

async function getData() {
    const response = await fetch('http://localhost:8080/api/v1/data/latest?hiveId=1&sensorTypeId=1', {
        headers: {
            Accept: "application/json"
        }
    });
    const body = await response.json();
    return body;
}

const CustomLineChart = ({ ...props }) => {
    const sensorData = props.sensorData;
    // console.log(props.sensorTypeId);
    // console.log(SensorMap.find(s => s.id === props.sensorTypeId));
    const sensorName = SensorMap.find(s => s.id === props.sensorTypeId).name;
    const sensorUnit = SensorMap.find(s => s.id === props.sensorTypeId).unit;
    const [testData, setTestData] = useState({data: []});
    const [test2, setTest2] = useState("");

    // axis representing time
    const xAxisData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // axis representing sensor value
    // const yAxisData = [2, 3, 5.5, 8.5, 1.5, 5, 1, 4, 3, 8];
    const yAxisData = [];
    // data.map((value, index) => ({ x: props.timestamp[index], y: value }))
    // yAxisData.push(SensorMap.find(s => s.id === props.sensorTypeId).graph_min);
    // yAxisData.push(SensorMap.find(s => s.id === props.sensorTypeId).graph_max);




    console.log("val" + test2);

    useEffect(() => {
        
        const test = async () => {
            const body = await getData();
            console.log(body);
            setTestData({data: body});
            setTest2(body[0].value);
            // console.log("val" + test2);
            return body;
        }
        test();
        // .then((body) => {
        //     // console.log(testData);
        // });
        // setTest2(body[0].value);
        // console.log(body);
        // console.log("val" + test2);
        // console.log(testData);
        // const res = await fetch('/api/v1/data/latest/' + props.hiveId + '/' + props.sensorTypeId);
        // const res = await fetch('/api/v1/data/latest?hiveId=1&sensorTypeId=1');
        // .then((res) => {
        //     console.log(res);
        //     // console.log(res.text);
        //     res.json().then(body => console.log(body));
        //     // return res.json();
        //     // const reader = res.body.getReader();
        //     // read() returns a promise that resolves when a value has been received
        //     // reader.read().then(function pump({ done, data }) {
        //     //     if (done) {
        //     //         // Do something with last chunk of data then exit reader
        //     //         return;
        //     //     }
        //     //     // Otherwise do something here to process current chunk
        //     //     // setTestData((prevData) => ({
        //     //     //     ...prevData,
        //     //     //     [0]: data.json()[0].value,
        //     //     // }));
        //     //     someData += data;
        //     //     // Read some more, and call this function again
        //     //     return reader.read().then(pump);
        //     // });
        // }).catch((err) => console.error(err));
        // console.log(someData.length());
        // const body = await res.json();
    }, []);
    // }, [props.hiveId, props.sensorTypeId]);


    return (
        <Box>
            <Typography variant="h6">{sensorName + " (" + sensorUnit + ")"}</Typography>
            <Typography variant="h6">{test2 ? "(" + test2 + ")" : "nodata"}</Typography>
            <Typography variant="h6">{testData.data[0] ? "(" + testData.data[0].value + ")" : "nodata"}</Typography>
            <LineChart
                xAxis={[{ data: xAxisData }]}
                series={[
                    {
                        data: yAxisData,
                        valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
                    },
                ]}
                width={500}
                height={500}
            />

        </Box>
    );
}
export default CustomLineChart
