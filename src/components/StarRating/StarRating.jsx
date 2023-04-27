import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';

const labels = {
    0: '0',
    0.5: '0,5',
    1: '1',
    1.5: '1.5',
    2: '2',
    2.5: '2.5',
    3: '3',
    3.5: '3.5',
    4: '4',
    4.5: '4.5',
    5: '5',
};

function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function StarRating() {
    const [value, setValue] = useState(2);

    return (
        <Box
            sx={{
                width: 115,
                display: 'flex',
                alignItems: 'center',
                position: 'absolute',
                top: '16px',
                right: '8px',
                fontWeight: '600',
            }}
        >
            {value !== null && <Box sx={{ mr: 1 }}>{labels[value]}</Box>}
            <Rating
                defaultValue={0}
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                emptyIcon={<StarIcon style={{ transition: '.3s ease-in-out 0s' }} fontSize="14px" />}
            />
        </Box>
    );
}
