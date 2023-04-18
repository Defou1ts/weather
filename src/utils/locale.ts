import { HHMMLocaleOptions, advancedDateLocaleOptions, dayOfWeekLocaleOption, timeLocaleOptions } from '@constants';

export const getTimeLocaledStringDate = (date: Date) => {
	return date.toLocaleString('en-US', timeLocaleOptions);
};

export const getDateLocaledStringDate = (date: Date) => {
	return date.toLocaleString('en-US', advancedDateLocaleOptions);
};

export const getDayOfWeekLocaledStringDate = (date: Date) => {
	return date.toLocaleString('en-US', dayOfWeekLocaleOption);
};

export const getHHMMLocaledStringDate = (date: Date) => {
	return date.toLocaleString('ru-RU', HHMMLocaleOptions);
};

export const getEndOfDayDate = (): Date => {
	const endOfDayDate = new Date();

	endOfDayDate.setHours(23);
	endOfDayDate.setMinutes(59);
	endOfDayDate.setSeconds(59);
	endOfDayDate.setMilliseconds(999);
	return endOfDayDate;
};
