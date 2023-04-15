export const calendarApiConfig = {
	clientId: process.env.REACT_APP_GOOGLECLIENT_ID ?? '',
	apiKey: process.env.REACT_APP_GOOGLECALENDAR_API_KEY ?? '',
	scope: 'https://www.googleapis.com/auth/calendar.events',
	discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
};
