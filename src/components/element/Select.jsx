import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as React from 'react';

export default function BasicSelect({ styles, title, ...props }) {
    return (
        <FormControl>
            <InputLabel variant="select" color="primary" id="select-label">
                {title}
            </InputLabel>
            <Select
                variant="outlined"
                color="secondary"
                sx={{ borderRadius: '16px', ...styles }}
                labelId="select-label"
            >
                {props.specializations &&
                    props.specializations.map(item => {
                        return <MenuItem value={item}>{item}</MenuItem>;
                    })}
                {props.categories &&
                    props.categories.map(item => {
                        return <MenuItem value={item}>{item}</MenuItem>;
                    })}
            </Select>
        </FormControl>
    );
}
