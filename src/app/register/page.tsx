'use client';

import ResponsiveLayout from '@/components/Layout/ResponsiveLayout';
import DesktopRegister from './components/DesktopRegister';
import MobileRegister from './components/MobileRegister';
import TabletRegister from './components/Tabletregister';

export default function Register() {
	return (
		<ResponsiveLayout
			mobile={<MobileRegister />}
			desktop={<DesktopRegister />}
			tablet={<TabletRegister />}
		/>
	);
}
