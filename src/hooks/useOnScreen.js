import { useEffect, useRef } from 'react';

export const useOnScreen = (ref, callback = () => {}) => {
	const observer = useRef();
	useEffect(() => {	
		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				callback()
			}

		})
		observer.current.observe(ref.current)

		return () => {
			 observer.current.disconnect();
		}

	}, [])
};
