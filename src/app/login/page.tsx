'use client';

import ResponsiveLayout from '@/components/Layout/ResponsiveLayout';
import MobileLogin from './components/MobileLogin';
import DesktopLogin from './components/DesktopLogin';
import TabletLogin from './components/TabletLogin';

export default function Login() {
	return (
		<ResponsiveLayout
			mobile={<MobileLogin />}
			desktop={<DesktopLogin />}
			tablet={<TabletLogin />}
		/>
	);
}
