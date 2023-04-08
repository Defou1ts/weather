import { getDateLocaledStringDate, getTimeLocaledStringDate } from '@utils';
import { useCurrentDate } from '@hooks';

import { ClockText } from './styled';

export const Clock = () => {
	const date = useCurrentDate();

	return (
		<div>
			<ClockText>{getTimeLocaledStringDate(date)}</ClockText>
			<ClockText>{getDateLocaledStringDate(date)}</ClockText>
		</div>
	);
};
