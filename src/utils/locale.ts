import { advancedDateLocaleOptions, dayOfWeekLocaleOption, timeLocaleOptions } from '@constants';

export const getTimeLocaledStringDate = (date: Date) => {
	return date.toLocaleString('en-US', timeLocaleOptions);
};

export const getDateLocaledStringDate = (date: Date) => {
	return date.toLocaleString('en-US', advancedDateLocaleOptions);
};

export const getDayOfWeekLocaledStringDate = (date: Date) => {
	return date.toLocaleString('en-US', dayOfWeekLocaleOption);
};
