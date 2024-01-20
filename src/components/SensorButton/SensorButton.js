import React, {useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import {makeStyles} from "@mui/styles";
import {SensorMap} from "../SensorButton/SensorMap";

const useStyles = makeStyles({
    raise: {
        '&:hover, &:focus': {
            boxShadow: '0 0.5em 0.5em -0.4em var(--hover)',
            transform: 'translateY(-0.25em)',
        },
    },
});
const realtime_delay = 3; // in seconds

const SensorButton = ({onClick, ...props}) => {
    const classes = useStyles();
    const [dateState, setDateState] = useState(new Date());
    const sensorName = SensorMap.find(s => s.id === props.sensorTypeId).name;
    const sensorUnit = SensorMap.find(s => s.id === props.sensorTypeId).unit;

    useEffect(() => {
        setInterval(() => setDateState(new Date()), realtime_delay * 1000);
    }, []);

    const calculateSeconds = (timestamp) => {
        if (timestamp) {
            // const now = new Date();
            const time = new Date(timestamp);
            const seconds = Math.floor(Math.abs(dateState.getTime() - time.getTime()) / 1000);
            if (seconds < realtime_delay) {
                return "Just updated";
            }
            return "Refreshed " + seconds + "s ago";
        }
        return "No available realtime data";
    };

    return (
        <Tooltip title={calculateSeconds(props.sensor.timestamp)} disableInteractive>
            <Button
                style={{display: "block", textAlign: "middle"}}
                className={classes.raise}
                onClick={onClick}
            >
                <Typography variant="h6">{sensorName}</Typography>
                <Typography variant="body1">{props.sensor.value + " " + sensorUnit}</Typography>
            </Button>
        </Tooltip>
    );
}

export default SensorButton