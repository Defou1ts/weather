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
	});
	checkCalendar();
	checkClockView();
	checkSearchCity();
	checkWeatherBlock();
	checkAltAndTitleImagesAttributes();
});
