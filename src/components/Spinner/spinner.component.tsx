import { getSpinnerSize } from '@utils';
import { spinnerIcon } from '@assets';

import { SpinnerImage, SpinnerWrapper } from './styled';

import type { SpinnerProps } from './interfaces';

export const Spinner = ({ size }: SpinnerProps) => {
	return (
		<SpinnerWrapper>
			<SpinnerImage src={spinnerIcon} size={getSpinnerSize(size)} alt="Loading" title="Loading" />
		</SpinnerWrapper>
	);
};
