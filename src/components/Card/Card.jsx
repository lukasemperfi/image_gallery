import React, { useState } from 'react'
import { ImageLazy } from '../ImageLazy/ImageLazy'
import MyModal from '../UI/MyModal/MyModal'
import classes from './Card.module.css'

export const Card = ({ image }) => {
	const
		{
			tags,
			webformatURL,
			previewURL,
			largeImageURL,
			imageWidth,
			imageHeight,
			webformatWidth,
			webformatHeight
		} = image
	const [modal, setModal] = useState(false)

	const openModal = () => {
		setModal(true)
	}
	return (
		<div className={classes.card}>
			<button
				className={classes.imageBtn}
				onClick={openModal}
			>
				<ImageLazy
					alt={tags}
					url={webformatURL}
					thumbUrl={previewURL}
					width={webformatWidth}
					height={webformatHeight}
				/>
			</button>
			{modal && (
				<MyModal visible={modal} setVisible={setModal}>
					<ImageLazy
						alt={tags}
						url={largeImageURL}
						thumbUrl={previewURL}
						width={imageWidth}
						height={imageHeight}
					/>
				</MyModal>
			)}
		</div>
	)
}