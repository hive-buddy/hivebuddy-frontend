import { useState, useEffect} from 'react';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';

const realtime_delay = 3; // in seconds

const SensorButton = (props) => {
    
    const [dateState, setDateState] = useState(new Date());

    useEffect(() => {
        setInterval(() => setDateState(new Date()), realtime_delay*1000);
    }, []);

    const calculateSeconds = (timestamp) => {
        if (timestamp) {
            // const now = new Date();
            const time = new Date(timestamp);
            // console.log(now);
            // console.log(time);
            // console.log(now.getTime() - time.getTime());
            const seconds = Math.floor(Math.abs(dateState.getTime() - time.getTime()) / 1000);
            if (seconds < realtime_delay){
                return "Just updated";
            }
            return "Refreshed " + seconds + "s ago";
        }
        return 0;
    };

    return (
        <Tooltip title={calculateSeconds(props.sensor.timestamp)} disableInteractive>
            <Button style={{ display: "block", textAlign: "middle" }}>
                <Typography variant="h6">Temperature</Typography>
                <Typography variant="body1">{props.sensor.value}</Typography>
            </Button>
        </Tooltip>
    );
}

export default SensorButton