import { getHHMMLocaledStringDate } from '@utils';

import { CalendarEventWrapper } from './styled';

import type { CalendarEventProps } from './interfaces';

export const CalendarEvent = ({ event }: CalendarEventProps) => {
	const { start, end, summary } = event;

	const startDate = new Date(start.dateTime);
	const endDate = new Date(end.dateTime);

	return (
		<CalendarEventWrapper>
			<p>{summary}</p>
			<p>
				{getHHMMLocaledStringDate(startDate)} - {getHHMMLocaledStringDate(endDate)}
			</p>
		</CalendarEventWrapper>
	);
};
