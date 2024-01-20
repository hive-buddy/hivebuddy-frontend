import React, {useEffect, useState} from 'react';
import SockJsClient from 'react-stomp';
import ButtonGroup from '@mui/material/ButtonGroup';
import SensorButton from '../../components/SensorButton/SensorButton';
import {Container, Box} from "@mui/material";
import {PageStyles} from "./../consts/pageStyles";
import {makeStyles} from "@mui/styles";
import {useNavigate, useParams} from "react-router-dom";
import SensorButtonGroup from '../../components/SensorButtonGroup/SensorButtonGroup';
import CustomLineChart from '../../components/Graph/CustomLineChart';

const SOCKET_URL = 'http://localhost:8080/ws-message';

function Overview() {
    const { hiveId, pageId } = useParams();
    const navigate = useNavigate();

    const [sensorData, setSensorData] = useState({});
    const [topics, setTopics] = useState([]);
    const currSensorTypeId = parseInt(pageId);
    
    let isDashboard = false;
    let sx = {};

    if (pageId == 0){
        isDashboard = true;
        sx = PageStyles.boxDashboard;
    }

    const handleSensor = (sensor) => {
        navigate(`/sensor/${sensor}`);
    };

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
            {!isDashboard ? (
                <CustomLineChart
                    hiveId={hiveId}
                    sensorTypeId={currSensorTypeId}
                    sensorData={sensorData}
                />
            ) : (<Box/>)}
        </Box>
    );
}

export default Overview;