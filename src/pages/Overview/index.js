import React, {useState} from 'react';
import SockJsClient from 'react-stomp';
import ButtonGroup from '@mui/material/ButtonGroup';
import SensorButton from '../../components/SensorButton/SensorButton';
import {sensors} from "./../../components/SensorButton/sensorItems";
import {Box} from "@mui/material";
import {PageStyles} from "./../consts/pageStyles";
import {makeStyles} from "@mui/styles";
import {Stack} from "@mui/system";

const SOCKET_URL = 'http://localhost:8080/ws-message';
const useStyles = makeStyles({
    raise: {
        '&:hover, &:focus': {
            boxShadow: '0 0.5em 0.5em -0.4em var(--hover)',
            transform: 'translateY(-0.25em)',
        },
    },
});
const Overview = () => {
    // const sensorTypeIds = [1, 2, 3, 4, 5];
    // const valuesArray = [];
    // sensorTypeIds.forEach((sensorId) => {
    //     valuesArray.push([sensorId, 0]);
    // });
    const [sensorData, setSensorData] = useState({});
    const classes = useStyles();

    let onConnected = () => {
        console.log("Connected!!");
    }

    // let onDisconnected = () => {
    //     console.log("Disconnected");
    // }

    let onValuesReceived = (data) => {
        // console.log("Received data:");
        // console.log(data.message);
        // console.log(data.message.map((obj) => {obj.value}));
        // console.log(Object.keys(data));
        // const receivedData = data.message;
        // setValues(Object.entries(data));
        // console.log(values);
        console.log(data);
        setSensorData((prevData) => ({
            ...prevData,
            [data.sensorTypeId]: data,
        }));
    }
    console.log(sensors.find(s => s.id === 1).name);


    return (
        <Box sx={PageStyles.boxDashboard}>
            <SockJsClient
                url={SOCKET_URL}
                topics={['/topic/overview/1/1']}
                onConnect={onConnected}
                onDisconnect={() => console.log("Disconnected!")}
                onMessage={data => onValuesReceived(data)}
                debug={false}
            />

            <ButtonGroup
                sx={{'--ButtonGroup-radius': '60px'}}
                fullWidth size="large"
                variant="outlined"
                aria-label="outlined button group"
                color="warning">
                {[1, 2, 3, 4, 5].map((sensorTypeId) => (
                    <SensorButton
                        key={sensorTypeId}
                        sensor={sensorData[sensorTypeId] || {}}
                        sensorName={sensors.find(s => s.id === sensorTypeId).name}
                    />
                ))}
            </ButtonGroup>
        </Box>
        // <div>
        //     <SockJsClient
        //         url={SOCKET_URL}
        //         topics={['/topic/overview/1/1']}
        //         onConnect={onConnected}
        //         onDisconnect={console.log("Disconnected!")}
        //         onMessage={data => onValuesReceived(data)}
        //         debug={false}
        //     />
        //
        //     <ButtonGroup fullWidth="true" size="large" variant="text" aria-label="text button group">
        //         {[1, 2, 3, 4, 5].map((sensorTypeId) => (
        //             <SensorButton key={sensorTypeId}
        //                           sensor={sensorData[sensorTypeId] || {}}
        //                           sensorName={sensors.find(s => s.id === sensorTypeId).name}
        //             />
        //         ))}
        //     </ButtonGroup>
        // </div>
    );
}

export default Overview;