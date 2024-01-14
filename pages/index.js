(function main() {
	const headerEl = document.querySelector('.header');
	const welcomeEl = document.querySelector('.welcome');
	const servicesEl = document.querySelector('.services');
	const contactEl = document.querySelector('.contact');
	const footerEl = document.querySelector('.footer');

	headerComponent(headerEl);
	welcomeComponent(welcomeEl);
	servicesComponent(servicesEl);
	contactComponent(contactEl);
	footerComponent(footerEl);
})();
