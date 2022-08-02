import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styled from 'styled-components';

const IconStyle = styled.div`
    color: var(--font-secondary-color);
    display: flex;
    align-items: center;
`

function SettingsIcon () {
    return (
        <IconStyle>
            <ExpandMoreIcon />
        </IconStyle>
    )
}

export default SettingsIcon