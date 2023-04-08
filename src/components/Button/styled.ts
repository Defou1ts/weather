import styled from 'styled-components';

export const StyledButton = styled.button`
	min-width: ${({ theme }) => theme.width[0]}px;
	min-height: ${({ theme }) => theme.height[0]}px;

	border-radius: ${({ theme }) => theme.borderRadius[1]}px;

	background-color: ${({ theme }) => theme.colors.black};
	color: ${({ theme }) => theme.colors.white};

	font-size: ${({ theme }) => theme.fontSize[2]}px;

	display: grid;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;
