export const checkClockView = () => {
	it('Check clock view', () => {
		cy.visit('/');
		cy.get('[data-test-id=time-clock]').should('exist');
	});
};
