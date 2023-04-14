import { getDateLocaledStringDate } from '@utils';

export const checkClockView = () => {
	it('Check clock view', () => {
		cy.get('[data-test-id=time-clock]')
			.should('be.visible')
			.then((value) => {
				const text = value.text();
				const minutes = +text.slice(0, -2).split(':')[1];
				expect(minutes).to.equal(new Date().getMinutes());
			});
		cy.get('[data-test-id=date-clock]')
			.should('be.visible')
			.should('have.text', getDateLocaledStringDate(new Date()));
	});
};

export const checkSearchCity = () => {
	it('Check search city', () => {
		cy.get('[data-test-id=city-search-input]')
			.should('be.visible')
			.type('vitebsk')
			.get('[data-test-id=city-search-spinner]')
			.should('be.visible')
			.wait(1000)
			.get('[data-test-id=city-search-spinner]')
			.should('not.exist')
			.get('[data-test-id=city-search-result-wrapper]')
			.should('have.length.greaterThan', 0)
			.get('[data-test-id=city-search-select]')
			.first()
			.click()
			.get('[data-test-id=today-weather-spinner-wrapper]')
			.should('be.visible')
			.get('[data-test-id=daily-weather-spinner]')
			.should('be.visible')
			.wait(1000)
			.get('[data-test-id=today-weather-spinner-wrapper]')
			.should('not.exist')
			.get('[data-test-id=daily-weather-spinner]')
			.should('not.exist');
	});
};

export const checkCalendar = () => {
	it('Check calendar', () => {
		cy.get('[data-test-id=calendar-sign-in]').should('be.visible');
	});
};

export const checkSwitchApi = () => {
	it('Check api switch', () => {
		mockGeolocationData();
		cy.intercept('GET', 'https://api.open-meteo.com/v1/forecast?*').as('getForecastWeather');
		cy.wait('@getForecastWeather')
			.get('[data-test-id=daily-weather-title]')
			.should('have.length', 7)
			.get('[data-test-id=set-hourly-weather]')
			.should('be.visible')
			.click()
			.wait('@getForecastWeather')
			.get('[data-test-id=hourly-weather-title]')
			.should('have.length.above', 0)
			.get('[data-test-id=daily-weather-title]')
			.should('not.exist')
			.get('[data-test-id=set-daily-weather]')
			.should('be.visible')
			.click()
			.wait('@getForecastWeather')
			.get('[data-test-id=hourly-weather-title]')
			.should('not.exist')
			.get('[data-test-id=daily-weather-title]')
			.should('have.length', 7);
	});
};

export const mockGeolocationData = () => {
	cy.visit('/');
	cy.window().then((win) => {
		cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((callback) => {
			// eslint-disable-next-line n/no-callback-literal
			return callback({
				coords: {
					latitude: 37.7749,
					longitude: -122.4194,
				},
			});
		});
		win.navigator.geolocation.getCurrentPosition((position) => {
			expect(position.coords.latitude).to.equal(37.7749);
			expect(position.coords.longitude).to.equal(-122.4194);
		});
	});
};

export const mockGoogleAuthPopup = () => {
	cy.visit('/');
	cy.window().then((win) => {
		cy.stub(win, 'open', () => {}).as('windowOpen');
	});
};

export const checkTodayWeatherView = () => {
	it('Check today wather view', () => {
		cy.visit('/')
		mockGeolocationData();
		cy.intercept('GET', 'https://api.openweathermap.org/data/2.5/weather?*').as('getTodayWeather');
		cy.wait('@getTodayWeather')
			.get('[data-test-id=today-weather-wrapper]')
			.should('be.visible')
			.get('[data-test-id=today-weather-title]')
			.should('be.visible')
			.should('have.text', 'Today')
			.get('[data-test-id=today-weather-text]')
			.should('be.visible')
			.get('[data-test-id=today-weather-image]')
			.should('be.visible');
	});
};

export const checkAltAndTitleImagesAttributes = () => {
	it('check alt and aitle amages attributes', () => {
		mockGeolocationData();
		cy.get('img').should('have.attr', 'alt');
		cy.get('img').should('have.attr', 'title');
		cy.wait(1000);
		cy.get('img').should('have.attr', 'alt');
		cy.get('img').should('have.attr', 'title');
	});
};
