export interface CalendarEvent {
	kind: string;
	etag: string;
	id: string;
	status: string;
	htmlLink: string;
	created: Date;
	updated: Date;
	summary: string;
	creator: Creator;
	organizer: Creator;
	start: Timestamp;
	end: Timestamp;
	recurringEventId: string;
	originalStartTime: Timestamp;
	iCalUID: string;
	sequence: number;
	attendees: Attendee[];
	hangoutLink: string;
	conferenceData: ConferenceData;
	reminders: Reminders;
	eventType: string;
}

export interface Attendee {
	email: string;
	responseStatus: ResponseStatus;
	self?: boolean;
	organizer?: boolean;
}

export enum ResponseStatus {
	Accepted = 'accepted',
	Declined = 'declined',
	NeedsAction = 'needsAction',
}

export interface ConferenceData {
	entryPoints: EntryPoint[];
	conferenceSolution: ConferenceSolution;
	conferenceId: string;
}

export interface ConferenceSolution {
	key: Key;
	name: string;
	iconUri: string;
}

export interface Key {
	type: string;
}

export interface EntryPoint {
	entryPointType: string;
	uri: string;
	label?: string;
	pin?: string;
	regionCode?: string;
}

export interface Creator {
	email: string;
}

export interface Timestamp {
	dateTime: number;
	timeZone: string;
}

export interface Reminders {
	useDefault: boolean;
}
