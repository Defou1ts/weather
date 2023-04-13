import {
	clearSkyDayIcon,
	fewCloudsDayIcon,
	mistIcon,
	rainDayIcon,
	showerRainIcon,
	snowIcon,
	thunderstormIcon,
} from '@assets';
import type { WeatherStatus } from '@interfaces';

export const weatherStatuses: Record<number, WeatherStatus> = {
	0: {
		icon: clearSkyDayIcon,
		description: 'Clear sky',
		
	},
	1: {
		icon: fewCloudsDayIcon,
		description: 'Mainly clear',
	},
	2: {
		icon: fewCloudsDayIcon,
		description: 'Partly cloudy',
	},
	3: {
		icon: fewCloudsDayIcon,
		description: 'Overcast',
	},
	45: {
		icon: mistIcon,
		description: 'Fog',
	},
	48: {
		icon: mistIcon,
		description: 'depositing rime fog',
	},
	51: {
		icon: rainDayIcon,
		description: 'Drizzle Light',
	},
	53: {
		icon: rainDayIcon,
		description: 'Drizzle Moderate',
	},
	55: {
		icon: showerRainIcon,
		description: 'Drizzle Intesity',
	},
	56: {
		icon: rainDayIcon,
		description: 'Freezing Drizzle Light',
	},
	57: {
		icon: showerRainIcon,
		description: 'Freezing Drizzle Intensity',
	},
	61: {
		icon: rainDayIcon,
		description: 'Slight rain',
	},
	63: {
		icon: showerRainIcon,
		description: 'Moderate rain',
	},
	65: {
		icon: showerRainIcon,
		description: 'Heavy intensity rain',
	},
	66: {
		icon: rainDayIcon,
		description: 'Light freezing Rain',
	},
	67: {
		icon: showerRainIcon,
		description: 'Heavy intensity freezing rain',
	},
	71: {
		icon: snowIcon,
		description: 'Slight snow fall',
	},
	73: {
		icon: snowIcon,
		description: 'Moderate snow fall',
	},
	75: {
		icon: snowIcon,
		description: 'Heavy intensity snow fall',
	},
	77: {
		icon: snowIcon,
		description: 'Snow grains',
	},
	80: {
		icon: showerRainIcon,
		description: 'Slight rain showers',
	},
	81: {
		icon: showerRainIcon,
		description: 'Moderate rain showers',
	},
	82: {
		icon: showerRainIcon,
		description: 'Heavy intensity rain showers',
	},
	85: {
		icon: snowIcon,
		description: 'Slight snow shower',
	},
	86: {
		icon: snowIcon,
		description: 'Heavy snow shower',
	},
	95: {
		icon: thunderstormIcon,
		description: 'Thunderstorm',
	},
	96: {
		icon: thunderstormIcon,
		description: 'Thunderstorm with slight hail',
	},
	99: {
		icon: thunderstormIcon,
		description: 'Thunderstorm with heavy hail',
	},
};
