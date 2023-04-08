import type { Theme } from '@interfaces';

export const colors = {
	white: '#FFFFFF',
	black: '#000000',
} as const;

export const borderRadius = [5, 10, 20] as const;
export const width = [139] as const;
export const height = [44] as const;
export const padding = [50, 70] as const;
export const fontSize = [17, 20, 23, 25, 30, 41] as const;
export const gaps = [28, 36, 39, 48, 58] as const;
export const margin = [250, 150] as const;
export const backdropFilter = [7.5];

export const breakpoints = {
	sm: 800,
	xs: 550,
} as const;

export const theme: Theme = {
	colors,
	borderRadius,
	width,
	height,
	padding,
	fontSize,
	gaps,
	margin,
	breakpoints,
};
