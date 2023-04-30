import { Paper } from '@mui/material';

const Card = ({ children }) => {
    const style = {
        position: 'relative',
        borderRadius: '16px',
        p: { sm: '32px 16px', md: '32px' },
        bgcolor: 'background.card',
        width: '100%',
    };
    return (
        <Paper sx={style} elevation={0}>
            {children}
        </Paper>
    );
};

export default Card;
