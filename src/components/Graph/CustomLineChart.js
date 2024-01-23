import React, {useEffect, useState} from 'react'
import {LineChart} from "@mui/x-charts";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";
const { DateTime } = require("luxon");


const CustomLineChart = ({...props}) => {
    const sensorData = props.sensorData;
    const xAxisData = props.xAxisData;
    const yAxisData = props.yAxisData;
    const sensorName = props.sensorName;
    const sensorUnit = props.sensorUnit;
    // console.log(props.sensorTypeId);
    // console.log(SensorMap.find(s => s.id === props.sensorTypeId));
    // const sensorName = SensorMap.find(s => s.id === props.sensorTypeId).name;
    // const sensorUnit = SensorMap.find(s => s.id === props.sensorTypeId).unit;
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
                        valueFormatter: (value) => (value == null ? 'NaN' : value),
                        color: '#A29415'
                    },
                ]}
                width={800}
                height={500}
            />

        </Box>
    );
}
export default CustomLineChart
