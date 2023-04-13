import { getTimeLocaledStringDate } from '@utils';

export const checkClockView = () => {
	it('Check clock view', () => {
		cy.visit('/').get('[data-test-id=time-clock]').should('have.text', getTimeLocaledStringDate(new Date()));
	});
};
