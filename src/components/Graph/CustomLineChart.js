import React, {useEffect, useState} from 'react'
import {LineChart} from "@mui/x-charts";
import {Box} from "@mui/material";
const { DateTime } = require("luxon");


const CustomLineChart = ({...props}) => {
    const sensorData = props.sensorData;
    const xAxisData = props.xAxisData;
    const yAxisData = props.yAxisData;
    const sensorName = props.sensorName;
    const sensorUnit = props.sensorUnit;


    const valueFormatter = (dateTimeJs) => {
        const dateTime = DateTime.fromJSDate(dateTimeJs); // Luxon DateTime
        return dateTime.toLocaleString(DateTime.TIME_24_SIMPLE);
    };

    return (
        <Box>
            {/* <Typography variant="h6">{sensorName + " (" + sensorUnit + ")"}</Typography> */}
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
                        // valueFormatter: (value) => (value == null ? 'NaN' : value),
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
