import type { ReactNode } from 'react';

export interface ForecastWeatherItemProps {
	timestamp: string;
	iconProps: ForecasWeatherItemIcon;
	children: ReactNode;
}

export interface ForecasWeatherItemIcon {
	src: string;
	alt: string;
	title: string;
}
