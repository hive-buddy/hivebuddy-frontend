import React, { useEffect, useState } from 'react';
import SockJsClient from 'react-stomp';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import SensorButton from '../../components/SensorButton/SensorButton';
import { Box } from "@mui/material";
import { PageStyles } from "./../consts/pageStyles";
// import { makeStyles } from "@mui/styles";
import { useParams } from "react-router-dom";
import SensorButtonGroup from '../../components/SensorButtonGroup/SensorButtonGroup';
import CustomLineChart from '../../components/Graph/CustomLineChart';

const SOCKET_URL = 'http://localhost:8080/ws-message';

function Overview() {
    const { hiveId, pageId } = useParams();

    const [sensorData, setSensorData] = useState({});
    const [topics, setTopics] = useState([]);
    const currSensorTypeId = parseInt(pageId);

    const [loading, setLoading] = useState(false);
    const [xAxisData, setXAxisData] = useState([]);
    const [yAxisData, setYAxisData] = useState([]);

    let isDashboard = false;
    let sx = {};

    if (pageId == 0) {
        isDashboard = true;
        sx = PageStyles.boxDashboard;
    }

    const fetchInfo = () => {
        return fetch('http://localhost:8080/api/v1/data/latest?hiveId=' + hiveId + '&sensorTypeId=' + pageId, {
            headers: {
                Accept: "application/json"
            }
        })
            .then((res) => res.json())
            .then((d) => {
                // setXAxisData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                // setYAxisData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
                setXAxisData([]);
                setYAxisData([]);
                d.forEach(e => {
                    let timestamp = new Date(e.timestamp);
                    let timerr = `${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;
                    setXAxisData(axisData => [...axisData, timestamp]);
                    setYAxisData(axisData => [...axisData, parseInt(e.value)]);
                });
            }).finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        setLoading(true);
        fetchInfo();
    }, [hiveId, pageId])

    let onConnected = () => {
        setTopics(['/topic/overview/1/1']);
        console.log("Connected!!");
        console.log(hiveId);
        console.log(pageId);
    }

    let onValuesReceived = (data) => {
        setSensorData((prevData) => ({
            ...prevData,
            [data.sensorTypeId]: data,
        }));
    }

    return (
        <Box sx={sx}>
            <SockJsClient
                url={SOCKET_URL}
                topics={topics}
                onConnect={onConnected}
                onDisconnect={() => console.log("Disconnected!")}
                onMessage={data => onValuesReceived(data)}
                debug={false}
            />
            <SensorButtonGroup
                hiveId={hiveId}
                sensorData={sensorData}
                color="info"
            />
            {loading || isDashboard ? (
                // <div>Loading...{latestData[0].value}</div>
                <div>
                </div>
            ) : (
                <CustomLineChart
                    hiveId={hiveId}
                    sensorTypeId={currSensorTypeId}
                    sensorData={sensorData}
                    xAxisData={xAxisData}
                    yAxisData={yAxisData}
                />
            )}
        </Box>
    );
}

export default Overview;