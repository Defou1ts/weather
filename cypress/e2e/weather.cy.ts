import {
	checkAltAndTitleImagesAttributes,
	checkCalendar,
	checkClockView,
	checkSearchCity,
	checkSwitchApi,
	checkTodayWeatherView,
} from '../support/weather';

describe('Check app components', () => {
	beforeEach(() => {
		cy.visit('/');
	});
	checkCalendar();
	checkClockView();
	checkSearchCity();
	checkSwitchApi();
	checkTodayWeatherView();
	checkAltAndTitleImagesAttributes();
});
