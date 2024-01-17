function addService(params = {}, element) {
	const componentEl = document.createElement('div');
	componentEl.setAttribute('class', 'services__service');

	componentEl.innerHTML = `
	<img src=${params.imageURL} alt="Servicio" class="services__service-img">
	<h4 class="services__service-title">${params.titulo}</h4>
	<p class="services__service-description">${params.descripcion}</p>
	`;

	if (params.projectURL) {
		const linkEl = document.createElement('a');
		linkEl.setAttribute('class', 'services__project-link');
		linkEl.innerText = 'Ir al sitio web';
		linkEl['href'] = params.projectURL;
		linkEl['target'] = '_blank';
		componentEl.appendChild(linkEl);
	}

	element.appendChild(componentEl);
	// element.insertBefore(componentEl, el.firstChild);
}

function servicesComponent(el) {
	getServicesInfo()
		.then((services) => {
			for (const service of services) {
				addService(service, el);
			}
		})
		.then(() => {
			const services = document.querySelectorAll('.services__service');
			let amountOfServices = 3;
			for (let i = 0; i < amountOfServices; i++) {
				const service = services[i];
				service.classList.toggle('active');
			}

			const seeMoreButton = document.querySelector('.services__see-more-items');
			if (seeMoreButton) {
				let arrowType = 'up';
				let seeMoreParagraph = 'Ver menos';
				seeMoreButton.addEventListener('click', () => {
					const service = services[amountOfServices];
					service.classList.toggle('active');

					seeMoreButton.innerHTML = `
					<i class='bx bx-${arrowType}-arrow-circle services__see-more-icon'></i>
					<p class="services__see-more__paragraph">${seeMoreParagraph}</p>
					`;

					if (arrowType == 'up') {
						// Acá en realidad se deberian ir sumando los servicios/proyectos de a 3, pero yo no tengo más que 4 así que no modifico la variable de cantidad de servicios
						arrowType = 'down';
						seeMoreParagraph = 'Ver más';
					} else {
						// Acá en realidad se deberian ir restando los servicios/proyectos de a 3, pero yo no tengo más que 4 así que no modifico la variable de cantidad de servicios
						arrowType = 'up';
						seeMoreParagraph = 'Ver menos';
					}
				});
			}
		});
}

function getServicesInfo() {
	const ACCESS_TOKEN = 'F1nsR-5x3RL7y74XwqvFHR4PFzhyq3VlTlj0b-Mnn6E';
	const SPACE_ID = 'idhxktutcvpy';
	const ENVIRONMENT_ID = 'master';
	const CONTENT_TYPE_ID = 'serviciosproductosDesafioWebcomponents';
	const ENTRIES_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries?access_token=${ACCESS_TOKEN}&&content_type=${CONTENT_TYPE_ID}`;

	return fetch(ENTRIES_URL)
		.then((res) => res.json())
		.then((data) => {
			const items = data.items;
			const dataAsset = data.includes.Asset;
			const page = document.title.toLowerCase();
			const isPortfolioPage = page == 'portfolio';
			const projects = items.filter((item) => item.fields.hasOwnProperty('url')); // Ver de buscar otro filtro y sacar el item de url de los servicios de Contentful
			const services = items.filter((item) => !item.fields.hasOwnProperty('url')); // Ver de buscar otro filtro y sacar el item de url de los servicios de Contentful

			const itemsToUse = isPortfolioPage ? projects : services;

			const itemsCollection = itemsToUse.map((item) => {
				const itemImg = dataAsset.find((img) => img.sys.id === item.fields.image.sys.id);
				const itemObject = {
					titulo: item.fields.title,
					descripcion: item.fields.description,
					imageURL: itemImg.fields.file.url,
				};
				if (isPortfolioPage) itemObject['projectURL'] = item.fields.url;
				return itemObject;
			});
			return itemsCollection;
		})
		.catch((err) => console.error(err));
}
