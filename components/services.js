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
				service.style.display = 'flex';
			}
			const seeMoreButton = document.querySelector('.services__see-more-items');
			seeMoreButton.addEventListener('click', () => {
				const service = services[amountOfServices];
				service.style.display = 'flex';
				amountOfServices++; // En realidad se sumarian de a 3, pero yo sumo de a 1 porque no tengo más
			});
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

			// Ver de simplificar estos ifs en una funcion
			if (page === 'portfolio') {
				const projects = items.filter((item) => item.fields.hasOwnProperty('url')); // Ver de buscar otro filtro y sacar el item de url de los servicios y portfolio de Contentful
				const projectsCollection = projects.map((project) => {
					const projectImg = dataAsset.find((img) => img.sys.id === project.fields.image.sys.id);
					return {
						titulo: project.fields.title,
						descripcion: project.fields.description,
						imageURL: projectImg.fields.file.url,
						projectURL: project.fields.url,
					};
				});
				return projectsCollection;
			} else {
				const services = items.filter((item) => !item.fields.hasOwnProperty('url')); // Ver de buscar otro filtro y sacar el item de url de los servicios y portfolio de Contentful
				const servicesCollection = services.map((service) => {
					const serviceImg = dataAsset.find((img) => img.sys.id === service.fields.image.sys.id);
					return {
						titulo: service.fields.title,
						descripcion: service.fields.description,
						imageURL: serviceImg.fields.file.url,
					};
				});
				return servicesCollection;
			}
		})
		.catch((err) => console.error(err));
}
