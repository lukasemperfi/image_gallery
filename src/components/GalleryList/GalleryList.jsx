import React from 'react'
import { Card } from '../Card/Card'
import Masonry from 'react-masonry-css'
import classes from './GalleryList.module.css'


export const GalleryList = ({ images }) => {

	const breakpoints = {
		default: 5,
		1600: 4,
		1200: 3,
		960: 2,
		640: 1
	}


	return (
		<div className={classes.container}>
			<Masonry
				breakpointCols={breakpoints}
				className={classes.myMasonryGrid}
				columnClassName={classes.myMasonryGridColumn}
			>
				{images.map((image) => 
					 <Card image={image} key={image.id} />
				)}
			</Masonry>


		</div>
	)
}
