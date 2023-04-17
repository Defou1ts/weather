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
		iconSrc: clearSkyDayIcon,
		description: 'Clear sky',
	},
	1: {
		iconSrc: fewCloudsDayIcon,
		description: 'Mainly clear',
	},
	2: {
		iconSrc: fewCloudsDayIcon,
		description: 'Partly cloudy',
	},
	3: {
		iconSrc: fewCloudsDayIcon,
		description: 'Overcast',
	},
	45: {
		iconSrc: mistIcon,
		description: 'Fog',
	},
	48: {
		iconSrc: mistIcon,
		description: 'depositing rime fog',
	},
	51: {
		iconSrc: rainDayIcon,
		description: 'Drizzle Light',
	},
	53: {
		iconSrc: rainDayIcon,
		description: 'Drizzle Moderate',
	},
	55: {
		iconSrc: showerRainIcon,
		description: 'Drizzle Intesity',
	},
	56: {
		iconSrc: rainDayIcon,
		description: 'Freezing Drizzle Light',
	},
	57: {
		iconSrc: showerRainIcon,
		description: 'Freezing Drizzle Intensity',
	},
	61: {
		iconSrc: rainDayIcon,
		description: 'Slight rain',
	},
	63: {
		iconSrc: showerRainIcon,
		description: 'Moderate rain',
	},
	65: {
		iconSrc: showerRainIcon,
		description: 'Heavy intensity rain',
	},
	66: {
		iconSrc: rainDayIcon,
		description: 'Light freezing Rain',
	},
	67: {
		iconSrc: showerRainIcon,
		description: 'Heavy intensity freezing rain',
	},
	71: {
		iconSrc: snowIcon,
		description: 'Slight snow fall',
	},
	73: {
		iconSrc: snowIcon,
		description: 'Moderate snow fall',
	},
	75: {
		iconSrc: snowIcon,
		description: 'Heavy intensity snow fall',
	},
	77: {
		iconSrc: snowIcon,
		description: 'Snow grains',
	},
	80: {
		iconSrc: showerRainIcon,
		description: 'Slight rain showers',
	},
	81: {
		iconSrc: showerRainIcon,
		description: 'Moderate rain showers',
	},
	82: {
		iconSrc: showerRainIcon,
		description: 'Heavy intensity rain showers',
	},
	85: {
		iconSrc: snowIcon,
		description: 'Slight snow shower',
	},
	86: {
		iconSrc: snowIcon,
		description: 'Heavy snow shower',
	},
	95: {
		iconSrc: thunderstormIcon,
		description: 'Thunderstorm',
	},
	96: {
		iconSrc: thunderstormIcon,
		description: 'Thunderstorm with slight hail',
	},
	99: {
		iconSrc: thunderstormIcon,
		description: 'Thunderstorm with heavy hail',
	},
};
