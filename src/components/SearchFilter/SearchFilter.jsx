import React from 'react'
import {Box, TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchFilter({ value, onChange, onSubmit }) {

	return (
		<Box
			component="form"
			onSubmit={onSubmit}
			noValidate
			autoComplete="off"
			name='searchForm'
			sx={{ 
				maxWidth: '450px',
				width: '100%',			
		}}
		>
			<TextField
				value={value}
				onChange={onChange}
				name="searchFilter"
				label="Поиск..."
				variant="standard"
				sx={{ width: '100%' }}
				InputProps={{
					endAdornment: (
						<InputAdornment position="start">
							<IconButton aria-label="delete" type='submit'>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
			/>
		</Box>
	);
}