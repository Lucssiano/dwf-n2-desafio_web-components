(function main() {
	// addComponents();
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

	// getServices();

	const ACCESS_TOKEN = 'F1nsR-5x3RL7y74XwqvFHR4PFzhyq3VlTlj0b-Mnn6E';
	const SPACE_ID = 'idhxktutcvpy';
	const ENVIRONMENT_ID = 'master';
	const ENTRIES_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries?access_token=${ACCESS_TOKEN}`;

	fetch(ENTRIES_URL)
		.then((res) => res.json())
		.then((data) => {
			const items = data.items;
			const welcomeItems = items.filter((item) => item.sys.contentType.sys.id === 'desafioWebcomponents');
			console.log(welcomeItems, 'bienvenida');
			const presentationItems = items.filter((item) => item.sys.contentType.sys.id === 'presentacionDesafioWebcomponents');
			console.log(presentationItems, 'presentacion');
			const serviceItems = items.filter(
				(item) =>
					item.sys.contentType.sys.id === 'serviciosproductosDesafioWebcomponents' && !item.fields.hasOwnProperty('url'),
			);
			console.log(serviceItems, 'servicios');
		});
})();

// function addComponents() {
// 	const headerEl = document.querySelector('.header');
// 	const welcomeEl = document.querySelector('.welcome');
// 	const servicesEl = document.querySelector('.services');
// 	const contactEl = document.querySelector('.contact');
// 	const footerEl = document.querySelector('.footer');

// 	headerComponent(headerEl);
// 	welcomeComponent(welcomeEl);
// 	servicesComponent(servicesEl);
// 	contactComponent(contactEl);
// 	footerComponent(footerEl);
// }
// function getImages(){}
