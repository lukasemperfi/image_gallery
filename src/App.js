import React, { useEffect, useRef, useState } from 'react'
import ImageService from './API/ImageService'
import { CircularProgress, Box } from '@mui/material'
import { GalleryList } from './components/GalleryList/GalleryList'
import { ImagesFilters } from './components/ImagesFilters/ImagesFilters'
import { useFetching } from './hooks/useFetching'
import { getPageCount } from './utils/pages'
import { useObserver } from './hooks/useObserver'
import { useSearchParams } from 'react-router-dom'

export default function App() {
	const [images, setImages] = useState([])
	const lastElement = useRef()
	const [searchParams, setSearchParams] = useSearchParams() 

	const [totalPage, setTotalPage] = useState(0)
	const [filters, setFilters] = useState({
			q: searchParams.get('q') || '',
			image_type: searchParams.get('image_type') || 'all',
			order: searchParams.get('order') || 'popular',
			per_page: +searchParams.get('per_page') || 20,
			page: +searchParams.get('page') || 1,
		})


	const [fetchImages, isImagesLoading, imagesError] = useFetching(async (filters) => {
		const response = await ImageService.getAll(filters)
		const totalCount = response.data.totalHits
		setTotalPage(getPageCount(totalCount, filters.per_page))
		if (filters.page > 1) {
			setImages([...images, ...response.data.hits])
		}
		if (filters.page === 1) {
			setImages(response.data.hits)
		}
	})


	useEffect(() => {
		setSearchParams(filters)
		fetchImages(filters) 	
	}, [filters])

 
	useObserver(lastElement, filters.page < totalPage, isImagesLoading, () => {
		setFilters({...filters, page: filters.page + 1})
	})

	return (
		<div className='wrapper'>
			<div className='container'>
				<ImagesFilters
					filters={filters}
					setFilters={setFilters}
				/>
				<GalleryList images={images} />
				{isImagesLoading &&
					<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}>
						<CircularProgress />
					</Box>
				}
				<div ref={lastElement} style={{ height: '50px', background: 'transparent' }}></div>
			</div>
		</div>
	)
}