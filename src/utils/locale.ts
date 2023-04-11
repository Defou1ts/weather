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
