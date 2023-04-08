import type { colors, borderRadius, width, height, padding, fontSize, gaps, margin, breakpoints } from '@theme';

export interface Theme {
	colors: typeof colors;
	borderRadius: typeof borderRadius;
	width: typeof width;
	height: typeof height;
	padding: typeof padding;
	fontSize: typeof fontSize;
	gaps: typeof gaps;
	margin: typeof margin;
	breakpoints: typeof breakpoints;
}
