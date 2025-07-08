import { useState, useEffect } from 'react';

type ScreenType = 'mobile' | 'tablet' | 'desktop';

export function useScreenType(): ScreenType {
	const [screenType, setScreenType] = useState<ScreenType>(() => {
		if (typeof window === 'undefined') return 'desktop'; // SSR safe
		const width = window.innerWidth;
		if (width < 768) return 'mobile';
		if (width < 1024) return 'tablet';
		return 'desktop';
	});

	useEffect(() => {
		function handleResize() {
			const width = window.innerWidth;
			if (width < 768) setScreenType('mobile');
			else if (width < 1024) setScreenType('tablet');
			else setScreenType('desktop');
		}
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return screenType;
}
