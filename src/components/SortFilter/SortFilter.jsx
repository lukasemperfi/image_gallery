import React from 'react'
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { selectOptionsData } from './selectOptionsData'

export default function SortFilter({ value, onChange }) {

	return (
		<Box sx={{ minWidth: 170 }}>
			<FormControl fullWidth>
				<InputLabel>Сортировать по...</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					value={value}
					label="Сортировать по..."
					onChange={onChange}
					name='sortFilter'
					sx={{
						'& .MuiInputBase-input': {
							padding: '12px',
						}
					}

					}
				>
					{selectOptionsData.map(option => (
						<MenuItem
							key={option.value}
							value={option.value}>
							{option.name}
						</MenuItem>
					))
					}					
				</Select>
			</FormControl>
		</Box>
	);
}
