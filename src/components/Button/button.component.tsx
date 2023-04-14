import { StyledButton } from './styled';

import type { ButtonProps } from './interfaces';

export const Button = ({ children, onClick, ...props }: ButtonProps) => {
	return (
		<StyledButton {...props} onClick={onClick}>
			{children}
		</StyledButton>
	);
};
