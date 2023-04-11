import type { ReactNode } from 'react';

export interface WeatherItemProps {
	timestamp: string;
	icon: ReactNode;
	children: ReactNode;
}
