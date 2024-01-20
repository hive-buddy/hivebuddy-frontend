import ButtonGroup from '@mui/material/ButtonGroup';
import SensorButton from '../../components/SensorButton/SensorButton';
import {useNavigate} from "react-router-dom";

const SensorButtonGroup = ({...props}) => {
    const navigate = useNavigate();
    const handleSensor = (sensorTypeId) => {
        navigate('/login/' + props.hiveId + '/' + sensorTypeId);
    };

    return (
        <ButtonGroup
            sx={{ '--ButtonGroup-radius': '60px', borderRadius: 'var(--ButtonGroup-radius)' }}
            fullWidth size="large"
            variant="outlined"
            aria-label="outlined button group"
            color={props.color}>
            {[1, 2, 3, 4, 5].map((sensorTypeId) => (
                <SensorButton
                    key={sensorTypeId}
                    sensorTypeId={sensorTypeId}
                    sensor={props.sensorData[sensorTypeId] || {}}
                    onClick={() => handleSensor(sensorTypeId)}
                />
            ))}
        </ButtonGroup>
    );
}

export default SensorButtonGroup;