// import React, {useEffect, useState} from 'react'
// import CustomLineChart from "../../components/Graph/CustomLineChart"
// import {LineChart} from "@mui/x-charts";
// import {Container, Typography} from "@mui/material";
// // import {sensors} from "../../components/SensorButton/SensorMap";
// import SensorButton from "../../components/SensorButton/SensorButton";
// import SockJsClient from "react-stomp";
// import ButtonGroup from "@mui/material/ButtonGroup";

// const SOCKET_URL = 'http://localhost:8080/ws-message';
// const Sensors = () => {
//     const [sensorData, setSensorData] = useState({});
//     const [topics, setTopics] = useState([""]);
//     let onConnected = () => {
//         setTopics(['/topic/overview/1/1']);
//         console.log("Connected!!");
//     }

//     let onValuesReceived = (data) => {
//         setSensorData((prevData) => ({
//             ...prevData,
//             [data.sensorTypeId]: data,
//         }));
//     }


//     return (
//         <Container mt={2}>
//             <SockJsClient
//                 url={SOCKET_URL}
//                 topics={topics}
//                 onConnect={onConnected}
//                 onDisconnect={() => console.log("Disconnected!")}
//                 onMessage={data => onValuesReceived(data)}
//                 debug={false}
//             />
//             <ButtonGroup
//                 sx={{'--ButtonGroup-radius': '60px', borderRadius: 'var(--ButtonGroup-radius)'}}
//                 fullWidth size="medium"
//                 variant="outlined"
//                 aria-label="outlined button group"
//                 color="warning">
//                 {[1, 2, 3, 4, 5].map((sensorTypeId) => (
//                     <SensorButton
//                         key={sensorTypeId}
//                          sensor={sensorData[sensorTypeId] || {}}
//                         // sensorName={sensors.find(s => s.id === sensorTypeId).name}
//                         // onClick={() => handleSensor(sensors.find(s => s.id === sensorTypeId).name)}
//                     />
//                 ))}
//             </ButtonGroup>
//             <CustomLineChart/>
//         </Container>
//     )
// }
// export default Sensors
