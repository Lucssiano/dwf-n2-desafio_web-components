function addService(service = {}, element) {
	const componentEl = document.createElement('div');
	componentEl.setAttribute('class', 'services__service');

	componentEl.innerHTML = `
	<img src=${service.imageURL} alt="Servicio" class="services__service-img">
	<h4 class="services__service-title">${service.titulo}</h4>
	<p class="services__service-description">${service.descripcion}</p>
	`;

	element.appendChild(componentEl);
	// element.insertBefore(componentEl, el.firstChild);
}

function servicesComponent(el) {
	getServicesInfo().then((services) => {
		for (const service of services) {
			addService(service, el);
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
			// hacer un if como en welcome para ver en que pagina estoy (si portfolio o servicios) y a partir de ahi manejar lo que se hace
			console.log(data.items);
			const dataAsset = data.includes.Asset;
			const services = data.items.filter((item) => !item.fields.hasOwnProperty('url')); // Ver de buscar otro filtro y sacar el item de url de los servicios y portfolio de Contentful
			const servicesCollection = services.map((item) => {
				return {
					titulo: item.fields.title,
					descripcion: item.fields.description,
					idImage: item.fields.image.sys.id,
				};
			});
			for (let i = 0; i < 3; i++) {
				const service = servicesCollection[i];
				const serviceImg = dataAsset.find((img) => img.sys.id === service.idImage);
				service['imageURL'] = serviceImg.fields.file.url;
			}
			servicesCollection.pop(); // para que solo me de 3 servicios
			return servicesCollection;
		});
}
