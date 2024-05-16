import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const TenureSelect = ({ data, setData }) => {

	const handleChange = (event) => {
		setData({
			...data,
			loanTerm: event.target.value,
		});
	};
	return (
		<FormControl fullWidth>
			<InputLabel id="demo-simple-select-label">Tenure</InputLabel>
			<Select
				labelId="demo-simple-select-label"
				id="demo-simple-select"
				value={data.loanTerm}
				label="Tenure"
				onChange={handleChange}
			>

                <MenuItem value={1}>1 Years
				</MenuItem>
				<MenuItem value={2}>2 Years
				</MenuItem>
				<MenuItem value={3}>3 Years
				</MenuItem>
				<MenuItem value={4}>4 Years
				</MenuItem>
				
				
			</Select>
		</FormControl>
	)
}

export default TenureSelect
