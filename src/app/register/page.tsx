'use client';

import ResponsiveLayout from '@/components/Layout/ResponsiveLayout';
import DesktopRegister from './components/DesktopRegister';
import MobileLogin from '../login/components/MobileLogin';

export default function Register() {
	return (
		<ResponsiveLayout mobile={<MobileLogin />} desktop={<DesktopRegister />} />
	);
}
