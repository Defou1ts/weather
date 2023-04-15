export const getCurrentHourlyDateByUnixTime = (unixtime: number[]) => {
	const date = new Date();

	return unixtime
		.map((time) => new Date(time * 1000))
		.filter((hourlyDate) => hourlyDate.getHours() >= date.getHours())
		.slice(0, 7);
};
