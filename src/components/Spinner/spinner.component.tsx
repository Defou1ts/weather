import { spinnerIcon } from '@assets';

import { SpinnerImage, SpinnerWrapper } from './styled';

import type { SpinnerProps } from './interfaces';

export const Spinner = ({ size, ...props }: SpinnerProps) => {
	return (
		<SpinnerWrapper data-test-id="spinner-wrapper" {...props}>
			<SpinnerImage src={spinnerIcon} size={size} alt="Loading" title="Loading" />
		</SpinnerWrapper>
	);
};
