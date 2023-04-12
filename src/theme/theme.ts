import type { Theme } from '@interfaces';

export const colors = {
	white: '#FFFFFF',
	transparentWhite: 'rgba(217, 217, 217, 0.3)',
	blue: 'rgb(26, 115, 232)',
	black: '#000000',
	lightBlack: '#222831',
} as const;

export const borderRadius = [5, 10, 20] as const;
export const width = [90, 1110, 100, 60] as const;
export const height = [30, 974, 100, 38, 300, 60] as const;
export const padding = [50, 70, 15, 10, 5] as const;
export const fontSize = [17, 20, 19, 25, 30, 41, 12] as const;
export const gaps = [28, 36, 39, 48, 58, 10] as const;
export const margin = [20, 250, 150] as const;
export const blur = [7.5] as const;

export const transition = {
	light: 'all 0.2s ease',
};

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
	blur,
	transition,
};
