(function main() {
	const headerEl = document.querySelector('.header');
	const welcomeEl = document.querySelector('.welcome');
	const servicesEl = document.querySelector('.services__container');
	const footerEl = document.querySelector('.footer');

	headerComponent(headerEl);
	welcomeComponent(welcomeEl);
	servicesComponent(servicesEl);
	footerComponent(footerEl);
})();
