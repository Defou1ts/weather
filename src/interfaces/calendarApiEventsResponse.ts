import type { CalendarEvent } from './calendarEvent';

export interface CalendarApiEventsResponse {
	result: Result;
	body: string;
	headers: Headers;
	status: number;
	statusText: string | null;
}

export interface Headers {
	'cache-control': string;
	'content-encoding': string;
	'content-length': string;
	'content-type': string;
	date: string;
	expires: string;
	server: string;
	vary: string;
}

export interface Result {
	kind: string;
	etag: string;
	summary: string;
	updated: Date;
	timeZone: TimeZone;
	accessRole: string;
	defaultReminders: DefaultReminder[];
	nextPageToken: string;
	items: CalendarEvent[];
}

export interface DefaultReminder {
	method: string;
	minutes: number;
}

export enum TimeZone {
	EuropeMinsk = 'Europe/Minsk',
}
