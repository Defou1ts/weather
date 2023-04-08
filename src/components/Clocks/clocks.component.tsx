import { getDateLocaledStringDate, getTimeLocaledStringDate } from '@utils';
import { useCurrentDate } from '@hooks';

import { ClocksText } from './styled';

export const Clocks = () => {
	const date = useCurrentDate();

	return (
		<div>
			<ClocksText>{getTimeLocaledStringDate(date)}</ClocksText>
			<ClocksText>{getDateLocaledStringDate(date)}</ClocksText>
		</div>
	);
};
