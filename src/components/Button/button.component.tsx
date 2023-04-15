import { StyledButton } from './styled';

import type { ButtonProps } from './interfaces';

export const Button = ({ children, onClick }: ButtonProps) => {
	return <StyledButton data-test-id='button' onClick={onClick}>{children}</StyledButton>;
};
