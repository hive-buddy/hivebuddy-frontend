import React, { useState } from 'react';
import SockJsClient from 'react-stomp';

const SOCKET_URL = 'http://localhost:8080/ws-message';

const Overview = () => {

    const sensorTypeIds = [1, 2, 3, 4, 5];
    const valuesArray = [];
    sensorTypeIds.forEach((sensorId) => {
        valuesArray.push([sensorId, 0])
    });

    const [values, setValues] = useState([0]);

    let onConnected = () => {
        console.log("Connected!!")
    }

    let onValuesReceived = (data) => {
        const receivedData = data.message;
        setValues(data.message)
        setValues([...values, receivedData]);
        // setValues((prevSensorData) => ({
        //     ...prevSensorData,
        //     [receivedData.sensorId]: {
        //         sensorId: receivedData.sensorId,
        //         value: receivedData.value,
        //     },
        // }));
    }

    return (
        <div>
            <SockJsClient
                url={SOCKET_URL}
                topics={['/topic/message']}
                onConnect={onConnected}
                onDisconnect={console.log("Disconnected!")}
                onMessage={data => onValuesReceived(data)}
                debug={false}
            />
            <div>
                {values}
                {/*))} {Array.isArray(values) && values.map((value, index) => (*/}
                {/*<li key={index}>*/}
                {/*    {value}*/}
                {/*    <*/}
            </div>
        </div>
    );
}

export default Overview;