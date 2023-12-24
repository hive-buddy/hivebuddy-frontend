import {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import {sensors} from "./sensorItems";

const realtime_delay = 3; // in seconds

const SensorButton = (props) => {

    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDateState(new Date()), realtime_delay * 1000);
    }, []);

    const calculateSeconds = (timestamp) => {
        if (timestamp) {
            // const now = new Date();
            const time = new Date(timestamp);
            // console.log(now);
            // console.log(time);
            // console.log(now.getTime() - time.getTime());
            const seconds = Math.floor(Math.abs(dateState.getTime() - time.getTime()) / 1000);
            if (seconds < realtime_delay) {
                return "Just updated";
            }
            return "Refreshed " + seconds + "s ago";
        }
        return "No available data";
    };
    const getSensorName = (sensorTypeId) => {
        const sensor = sensors.find(s => s.id === sensorTypeId);
        return sensor ? sensor.name : "Unknown Sensor";
    };

    return (
        <Tooltip title={calculateSeconds(props.sensor.timestamp)} disableInteractive>
            <Button style={{display: "block", textAlign: "middle"}}>
                <Typography variant="h6">{getSensorName(sensors.name)}</Typography>
                {/* <Typography variant="body1">{props.sensor.value}</Typography> */}
                <Typography variant="body1">{props.sensor.timestamp}</Typography>
            </Button>
        </Tooltip>
    );
}

export default SensorButton