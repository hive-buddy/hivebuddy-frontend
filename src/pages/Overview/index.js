import React, {useEffect, useState} from 'react';
import SockJsClient from 'react-stomp';
import Footer from '../../components/Footer/Footer'
import {Container, Box, Icon} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import SensorButtonGroup from '../../components/SensorButtonGroup/SensorButtonGroup';
import CustomLineChart from '../../components/Graph/CustomLineChart';
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {SensorMap} from "../../components/SensorButton/SensorMap";
import Button from "@mui/material/Button";
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';
const SOCKET_URL = 'http://localhost:8080/ws-message';

function Overview() {
    const {hiveId, pageId} = useParams();

    const [sensorData, setSensorData] = useState({});
    const [topics, setTopics] = useState([]);
    const currSensorTypeId = parseInt(pageId);

    const [loading, setLoading] = useState(false);
    const [xAxisData, setXAxisData] = useState([]);
    const [yAxisData, setYAxisData] = useState([]);

    const sensorName = SensorMap.find(s => s.id === currSensorTypeId).name;
    const sensorUnit = SensorMap.find(s => s.id === currSensorTypeId).unit;

    const [testData, setTestData] = useState({data: []});
    const [test2, setTest2] = useState("");
    const [average, setAverage] = useState([]);

    let isDashboard = false;
    let sx = {};

    if (pageId == 0) {
        isDashboard = true;
        //sx = PageStyles.boxDashboard;
    }

    const fetchInfo = () => {
        return fetch('http://localhost:8080/api/v1/data/latest?hiveId=' + hiveId + '&sensorTypeId=' + pageId + '&rowsAmount=' + 50, {
            headers: {
                Accept: "application/json"
            }
        })
            .then((res) => res.json())
            .then((d) => {
                setXAxisData([]);
                setYAxisData([]);
                let valueArr = [];
                d.forEach(e => {
                    let timestamp = new Date(e.timestamp);
                    let timerr = `${timestamp.getHours()}:${timestamp.getMinutes()}:${timestamp.getSeconds()}`;
                    setXAxisData(axisData => [...axisData, timestamp]);
                    setYAxisData(axisData => [...axisData, parseInt(e.value)]);
                    valueArr.push(e.value)
                });
                calculateAverage(valueArr);
            }).finally(() => {
                setLoading(false);
            });
    }
    useEffect(() => {
        setLoading(true);
        fetchInfo();
    }, [hiveId, pageId])


    useEffect(() => {
        // const interval = setInterval(() => {
        setLoading(true);
        fetchInfo();
        // }, 1000);
        // return () => clearInterval(interval);
    }, [hiveId, pageId]);

    let onConnected = () => {
        setTopics(['/topic/overview/1/1']);
        console.log("Connected!!");
        console.log(hiveId);
        console.log(pageId);
    }

    let onValuesReceived = (data) => {
        // console.log(data);
        console.log('updating data very important process');
        setSensorData((prevData) => ({
            ...prevData,
            [data.sensorTypeId]: data,
        }));
    }

    function calculateAverage(array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        let avg = sum / array.length;
        avg = Math.round((avg + Number.EPSILON) * 100) / 100
        console.log(avg);
        setAverage(avg);
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
                <>
                    <Box sx={{display: 'flex'}}>
                        <CssBaseline/>
                        <Toolbar/>
                        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4} lg={3}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: 540,
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                        >{sensorName + " (" + sensorUnit + ")"}</Typography>
                                        <Typography variant="h6">{'Average: ' + average}</Typography>
                                        <video
                                            src="https://cdn-icons-mp4.flaticon.com/512/12277/12277901.mp4"
                                            width="448"
                                            height="252"
                                            style={{display: 'block', margin: '0 auto'}}
                                            autoPlay
                                            muted
                                            controls={false}
                                        />
                                        {/*<Button sx={{height:'50px', width:'100%'}}>*/}
                                        {/*    <Icon>*/}
                                        {/*        <HouseRoundedIcon/>*/}
                                        {/*    </Icon>*/}
                                        {/*</Button>*/}
                                    </Paper>
                                </Grid>
                                {/* Chart */}
                                <Grid item xs={12} md={8} lg={9}>
                                    <Paper
                                        sx={{
                                            p: 2,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            height: 540,
                                        }}
                                    >
                                        <CustomLineChart
                                            hiveId={hiveId}
                                            sensorTypeId={currSensorTypeId}
                                            sensorData={sensorData}
                                            xAxisData={xAxisData}
                                            yAxisData={yAxisData}
                                            sensorName={sensorName}
                                            sensorUnit={sensorUnit}
                                        />
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                    <Footer/>
                </>
            )}
        </Box>

    );

}

export default Overview;
