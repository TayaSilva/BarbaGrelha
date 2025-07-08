// ResponsiveLayout.tsx
'use client';

import { useScreenType } from '@/hooks/useScreenType';

interface ResponsiveLayoutProps {
	mobile: React.ReactNode;
	desktop: React.ReactNode;
	tablet?: React.ReactNode;
}

export default function ResponsiveLayout({
	mobile,
	tablet,
	desktop,
}: ResponsiveLayoutProps) {
	const screenType = useScreenType();

	if (screenType === 'mobile') return <>{mobile}</>;
	if (screenType === 'tablet') return <>{tablet ?? desktop}</>;
	return <>{desktop}</>;
}
