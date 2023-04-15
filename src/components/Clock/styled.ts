import styled from 'styled-components';

export const ClockText = styled.p`
	color: ${({ theme }) => theme.colors.black};
	font-size: ${({ theme }) => theme.fontSize[5]}px;

	@media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
		text-align: center;
	}
`;

export const ClockWrapper = styled.div`
	grid-area: clock;

	@media screen and (max-width: ${({ theme }) => theme.breakpoints.xl}px) {
		justify-self: center;
	}
`;
