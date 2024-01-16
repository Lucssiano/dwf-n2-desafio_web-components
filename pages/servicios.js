(function main() {
	const headerEl = document.querySelector('.header');
	const welcomeEl = document.querySelector('.welcome');
	const servicesEl = document.querySelector('.services__container');
	const footerEl = document.querySelector('.footer');

	headerComponent(headerEl);
	welcomeComponent(welcomeEl, 'servicios');
	servicesComponent(servicesEl); // probablemente haya que indicarle en que pagina estoy para servicios y portfolio
	footerComponent(footerEl);
})();
