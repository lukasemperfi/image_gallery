import React, { useRef, useState } from 'react';
import cn from 'classnames'
import { useOnScreen } from '../../hooks/useOnScreen';
import classes from './ImageLazy.module.css'

export const ImageLazy = ({ alt, url, thumbUrl, width, height }) => {
	const [isLoaded, setIsLoaded] = useState(false);
	const [isInView, setIsInView] = useState(false);
	const imgRef = useRef();

	useOnScreen(imgRef, () => {
		setIsInView(true);
	});

	const handleOnLoad = () => {
		setIsLoaded(true);
	};

	return (
		<div
			className={classes.imageContainer}
			ref={imgRef}
			style={{
				paddingBottom: `${(height / width) * 100}%`,
				width: '100%'
			}}
		>
			{isInView && (
				<>
					<img
						className={cn(classes.image, classes.thumb, {
							[classes.isLoadedThumb]: isLoaded
						})}
						src={thumbUrl}
						alt={alt}
					/>
					<img
						className={cn(classes.image, {
							[classes.isLoadedImage]: isLoaded
						})}
						src={url}
						onLoad={handleOnLoad}
						alt={alt}
					/>
				</>
			)}
		</div>
	)
};
