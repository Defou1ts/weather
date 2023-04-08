import styled from 'styled-components';

export const ClockText = styled.p`
	color: ${({ theme }) => theme.colors.black};
	font-size: ${({ theme }) => theme.fontSize[5]}px;
`;

export const ClockWrapper = styled.div`
	grid-area: clock;
`;
