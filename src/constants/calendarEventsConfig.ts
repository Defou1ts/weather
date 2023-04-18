
const endOfDayDate = new Date();

endOfDayDate.setHours(23);
endOfDayDate.setMinutes(59);
endOfDayDate.setSeconds(59);
endOfDayDate.setMilliseconds(999);

export const calendarEventsConfig = {
	calendarId: 'primary',
	timeMin: new Date().toISOString(),
	showDeleted: false,
	singleEvents: true,
	maxResults: 10,
	orderBy: 'startTime',
	timeMax: endOfDayDate.toISOString(),
};
