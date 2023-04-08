import { advancedDateLocaleOptions, timeLocaleOptions } from '@constants';

export const getTimeLocaledStringDate = (date: Date) => {
	return date.toLocaleString('en-US', timeLocaleOptions);
};

export const getDateLocaledStringDate = (date: Date) => {
	return date.toLocaleString('en-US', advancedDateLocaleOptions);
};
