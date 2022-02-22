import React, { useState } from 'react'
import classes from './ImagesFilters.module.css'
import ImageTypeFilter from '../ImageTypeFilter/ImageTypeFilter'
import SearchFilter from '../SearchFilter/SearchFilter'
import SortFilter from '../SortFilter/SortFilter'
import { Button } from '@mui/material'


export const ImagesFilters = ({ filters, setFilters }) => {
	const {q, image_type, order, page } = filters
	const isFiltersActive = q !== '' || image_type !== 'all' || order !== 'popular' || page > 1
	const [term, setTerm] = useState(q)

	const handleChange = (event) => {
		switch (event.target.name) {
			case 'searchFilter':
				setTerm(event.target.value)
				break;
			case 'imageTypeFilter':
				setFilters({ ...filters, image_type: event.target.value, page: 1 });
				break;
			case 'sortFilter':
				setFilters({ ...filters, order: event.target.value, page: 1 });
				break;
			default:
				break;
		}
	}

	const onSubmit = (event) => {
		event.preventDefault()
		setFilters({ ...filters, q: term, page: 1 });
	}

	const clearFilters = () => {
		if (isFiltersActive) {
			setFilters({
				q: '',
				image_type: 'all',
				order: 'popular',
				per_page: 20,
				page: 1,
			})
			setTerm('')
		}
	}


	return (
		<div className={classes.imagesfilters}>
			<div className={classes.search}>
				<SearchFilter
					value={term}
					onChange={handleChange}
					onSubmit={onSubmit}
				/>
			</div>
			<div className={classes.filterAndSort}>
				<div className={classes.col_1}>
					<ImageTypeFilter
						value={filters.image_type}
						onChange={handleChange}
					/>
					<Button
						variant="text"
						onClick={clearFilters}
						sx={{display: isFiltersActive ? 'block' : 'none'}}
					>
						Сбросить фильтры
					</Button>
				</div>
				<div className={classes.col_2}>
					<SortFilter
						value={filters.order}
						onChange={handleChange}
					/>
				</div>
			</div>
		</div>
	)
}
