import styled from 'styled-components';

import type { SpinnerImageProps } from './interfaces';

export const SpinnerImage = styled.img<SpinnerImageProps>`
	align-self: center;
	justify-self: center;

	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
`;

export const SpinnerWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 1fr;
	align-items: center;
	justify-content: center;
`;
