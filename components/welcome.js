function welcomeComponent(element, page) {
	getWelcomeInfo(page).then((info) => {
		const componentEl = document.createElement('div');
		componentEl.setAttribute('class', 'welcome__container');

		componentEl.innerHTML = `
		<h1 class="welcome__title">${info.title}<span>${info.subtitle}</span></h1>
		<img src="${info.img}" alt="Cohete" class="welcome__img">`;

		element.appendChild(componentEl);
	});
}

function getWelcomeInfo(page) {
	const ACCESS_TOKEN = 'F1nsR-5x3RL7y74XwqvFHR4PFzhyq3VlTlj0b-Mnn6E';
	const SPACE_ID = 'idhxktutcvpy';
	const ENVIRONMENT_ID = 'master';
	const CONTENT_TYPE_ID = 'desafioWebcomponents';
	const ENTRIES_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries?access_token=${ACCESS_TOKEN}&&content_type=${CONTENT_TYPE_ID}`;

	return fetch(ENTRIES_URL)
		.then((res) => res.json())
		.then((data) => {
			/* Ver de hacerlo de otra forma para no tener que usar ids */
			if (page === 'home') {
				const welcomeTitleId = '3GNjf5VVijfT52XBNJGmnF';
				const welcomeImgId = '74WvkosAg0fhqaBybHm2xZ';
				return makeWelcomeObject(welcomeTitleId, welcomeImgId, data);
			} else if (page === 'servicios') {
				const welcomeTitleId = '1JU4ZlulSjOHQxaIgRInqF';
				const welcomeImgId = '7jQ6h1myW7RiK7hKSpy0pU';
				return makeWelcomeObject(welcomeTitleId, welcomeImgId, data);
			} else if (page === 'portfolio') {
				const welcomeTitleId = '4gygLfrUXYxrKSQUZ6YPmk';
				const welcomeImgId = '7jQ6h1myW7RiK7hKSpy0pU';
				return makeWelcomeObject(welcomeTitleId, welcomeImgId, data);
			}
		});
}

function makeWelcomeObject(titleId, imageId, data) {
	const items = data.items;
	const dataAsset = data.includes.Asset;

	const welcomeTitle = items.find((title) => title.sys.id === titleId);
	const welcomeImg = dataAsset.find((img) => img.sys.id === imageId);

	return {
		title: welcomeTitle.fields.welcomeBeggingTitle, // Me confundí y le puse "Begging" en vez de "Beginning" en Contentful
		subtitle: welcomeTitle.fields.welcomeSpanTitle,
		img: welcomeImg.fields.file.url,
	};
}
