import React, { useState} from 'react';
import SockJsClient from 'react-stomp';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import SensorButton from '../../components/SensorButton/SensorButton';

const SOCKET_URL = 'http://localhost:8080/ws-message';

const Overview = () => {


    // const sensorTypeIds = [1, 2, 3, 4, 5];
    // const valuesArray = [];
    // sensorTypeIds.forEach((sensorId) => {
    //     valuesArray.push([sensorId, 0]);
    // });

    // const [values, setValues]= useState(new Map());
    const [sensorOne, setSensorOne] = useState({});
    const [sensorTwo, setSensorTwo] = useState({});
    const [sensorThree, setSensorThree] = useState({});
    const [sensorFour, setSensorFour] = useState({});
    const [sensorFive, setSensorFive] = useState({});

    let onConnected = () => {
        console.log("Connected!!");
    }

    // let onDisconnected = () => {
    //     console.log("Disconnected");
    // }

    let onValuesReceived = (data) => {
        // console.log("Received data:");
        console.log(data);
        // console.log(data.message);
        // console.log(data.message.map((obj) => {obj.value}));
        // console.log(Object.keys(data));
        // const receivedData = data.message;
        // setValues(Object.entries(data));
        // console.log(values);
        switch (data.sensorTypeId) {
            case 1:
                setSensorOne(data);
                break;
            case 2:
                setSensorTwo(data);
                break;
            case 3:
                setSensorThree(data);
                break;
            case 4:
                setSensorFour(data);
                break;
            case 5:
                setSensorFive(data);
                break;
            default:
                return;
        }
    }

    

    return (
        <div>
            <SockJsClient
                url={SOCKET_URL}
                topics={['/topic/overview/1/1']}
                onConnect={onConnected}
                onDisconnect={console.log("Disconnected!")}
                onMessage={data => onValuesReceived(data)}
                debug={false}
            />
            <ButtonGroup fullWidth="true" size="large" variant="text" aria-label="text button group">
                <SensorButton sensor={sensorOne} />
                <SensorButton sensor={sensorTwo} />
                <SensorButton sensor={sensorThree} />
                <SensorButton sensor={sensorFour} />
                <SensorButton sensor={sensorFive} />
            </ButtonGroup>
        </div>
    );
}

export default Overview;