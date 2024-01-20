import React, {useEffect, useState} from 'react'
import {LineChart} from "@mui/x-charts";
import {Box} from "@mui/material";
import SockJsClient from "react-stomp";
import Typography from "@mui/material/Typography";

const SOCKET_URL = 'http://localhost:8080/ws-message';

const CustomLineChart = (props) => {
    const [sensorData, setSensorData] = useState({});
    const [topics, setTopics] = useState([""]);

    // useEffect(() => {
    //     setData((currentData) => [...currentData, props.value]);
    // }, [props.value]);

    let onConnected = () => {
        setTopics(['/topic/overview/1/1']);
        console.log("Connected!!");
    }

    let onValuesReceived = (data) => {
        // setData((prevData) => [...prevData, data]);
        setSensorData((prevData) => ({
            ...prevData,
            [data.sensorTypeId]: data,
        }));
    }

    // console.log(props.timestamp)
    // console.log(data)
    return (
        <Box>
            <SockJsClient
                url={SOCKET_URL}
                topics={topics}
                onConnect={onConnected}
                onMessage={data => onValuesReceived(data)}
                debug={false}
            />
            <Typography variant="h6">{props.sensorName}</Typography>
            <Typography variant="body1">{sensorData[1]}</Typography>
            {/*<LineChart*/}
            {/*    xAxis={[{data: [props.value]}]}*/}
            {/*    series={[*/}
            {/*        {*/}
            {/*            data: data.map((value, index) => ({ x: props.timestamp[index], y: value })),*/}
            {/*            valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),*/}
            {/*        },*/}
            {/*    ]}*/}
            {/*    width={500}*/}
            {/*    height={500}*/}
            {/*/>*/}

        </Box>
    );
}
export default CustomLineChart
