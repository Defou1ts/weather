export const checkClockView = () => {
	it('Check clock view', () => {
		cy.visit('/');
		cy.wait(5);
		cy.get('[data-test-id=time-clock]')
			.should('be.visible')
			.then((value) => {
				const text = value.text();
				const minutes = +text.slice(0, -2).split(':')[1];
				expect(minutes).to.equal(new Date().getMinutes());
			});
	});
};
