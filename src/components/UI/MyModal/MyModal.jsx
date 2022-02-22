import React from 'react';
import { useLockBodyScroll } from '../../../hooks/useLockBodyScroll';
import classes from './MyModal.module.css';
import cn from 'classnames'

const MyModal = ({ children, visible, setVisible }) => {

	useLockBodyScroll();

	return (
		<div
			className={cn(classes.myModal, {
				[classes.active]: visible
			})}
			onClick={() => { setVisible(false) }}
		>
			<div
				className={classes.myModalContent}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};

export default MyModal;