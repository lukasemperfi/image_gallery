import React from 'react'
import { Radio, FormControlLabel } from '@mui/material';
import { imageTypeFilterData } from './imageTypeFilterData';

export default function ImageTypeFilter({ value, onChange}) {

	return (
		<div>
			{imageTypeFilterData.map(radio => (
				<FormControlLabel
					checked={value === radio.value}
					onChange={onChange}
					value={radio.value}
					name="imageTypeFilter"
					control={<Radio />}
					label={radio.name}
					key={radio.value}
				/>
			))
			}
		</div> 
	);
}
