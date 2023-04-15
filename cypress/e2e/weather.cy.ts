import {
	checkAltAndTitleImagesAttributes,
	checkCalendar,
	checkClockView,
	checkSearchCity,
	checkWeatherBlock,
} from '../support/weather';

describe('Check app components', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.viewport(1920, 1080);
	});
	checkCalendar();
	checkClockView();
	checkSearchCity();
	checkWeatherBlock();
	checkAltAndTitleImagesAttributes();
});
