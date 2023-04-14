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
	checkClockView();
	checkSearchCity();
	checkSwitchApi();
	checkCalendar();
	checkTodayWeatherView();
	checkAltAndTitleImagesAttributes();
});
