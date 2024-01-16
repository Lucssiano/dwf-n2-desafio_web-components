(function main() {
	const headerEl = document.querySelector('.header');
	const welcomeEl = document.querySelector('.welcome');
	const servicesEl = document.querySelector('.services__container');
	const contactEl = document.querySelector('.contact');
	const footerEl = document.querySelector('.footer');

	headerComponent(headerEl);
	welcomeComponent(welcomeEl, 'home');
	getPresentationFromContentful();
	servicesComponent(servicesEl);
	contactComponent(contactEl);
	footerComponent(footerEl);
})();

function getPresentationFromContentful() {
	const ACCESS_TOKEN = 'F1nsR-5x3RL7y74XwqvFHR4PFzhyq3VlTlj0b-Mnn6E';
	const SPACE_ID = 'idhxktutcvpy';
	const ENVIRONMENT_ID = 'master';
	const ENTRIES_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries?access_token=${ACCESS_TOKEN}`;

	fetch(ENTRIES_URL)
		.then((res) => res.json())
		.then((data) => {
			const items = data.items;
			const presentationItem = items.find((item) => item.sys.contentType.sys.id === 'presentacionDesafioWebcomponents');
			const presentationTitle = presentationItem.fields.title;
			const presentationParagraph = presentationItem.fields.paragraph;
			const presentationImgId = presentationItem.fields.personalImage.sys.id;
			const dataAsset = data.includes.Asset;
			const presentationImg = dataAsset.find((img) => img.sys.id === presentationImgId).fields.file.url;

			document.querySelector('.about-me__title').innerText = presentationTitle;
			document.querySelector('.about-me__description').innerText = presentationParagraph;
			document.querySelector('.about-me__personal-img').src = presentationImg;
		});
}
