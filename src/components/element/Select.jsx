import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ styles, title, item1, item2, item3, item4, item5, item6, item7, item8, item9 }) {
    console.log(title);
    console.log(styles);
    const [age, setAge] = React.useState('');

    const handleChange = event => {
        setAge(event.target.value);
    };

    return (
        <Box sx={{ minWidth: '120px' }}>
            <FormControl
                fullWidth
                sx={{
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'rgba(17, 17, 17, 0.1)',
                        },
                        '&:hover fieldset': {
                            borderColor: '#111111',
                        },
                    },
                }}
            >
                <InputLabel id="demo-simple-select-label">{title}</InputLabel>
                <Select
                    sx={{ borderRadius: '16px', ...styles }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label={title}
                    onChange={handleChange}
                    // TabIndicatorProps={{
                    //     style: {
                    //         background:
                    //             'linear-gradient(237.38deg, #6ED599 -5.69%, rgba(63, 76, 153, 0) 121.24%), linear-gradient(161.43deg, rgba(35, 35, 35, 0.8) 12.58%, rgba(35, 35, 35, 0) 110.88%), linear-gradient(0deg, rgba(31, 42, 106, 0.2), rgba(31, 42, 106, 0.2)), linear-gradient(208.79deg, #6ED599 3.46%, #1F2A6A 51.48%), #D9D9D9',
                    //         backgroundBlendMode: 'normal, normal, multiply, normal, normal',
                    //         borderRadius: '7px',
                    //         height: '4px',
                    //     },
                    // }}
                >
                    <MenuItem value={1}>{item1}</MenuItem>
                    <MenuItem value={2}>{item2}</MenuItem>
                    <MenuItem value={3}>{item3}</MenuItem>
                    {item4 && <MenuItem value={4}>{item4}</MenuItem>}
                    {item5 && <MenuItem value={5}>{item5}</MenuItem>}
                    {item6 && <MenuItem value={6}>{item6}</MenuItem>}
                    {item7 && <MenuItem value={7}>{item7}</MenuItem>}
                    {item8 && <MenuItem value={8}>{item8}</MenuItem>}
                    {item9 && <MenuItem value={9}>{item9}</MenuItem>}
                </Select>
            </FormControl>
        </Box>
    );
}
