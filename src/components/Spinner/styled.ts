import styled from 'styled-components';

import type { SpinnerImageProps } from './interfaces';

export const SpinnerImage = styled.img<SpinnerImageProps>`
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
`;
