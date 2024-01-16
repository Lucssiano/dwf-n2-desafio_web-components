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
			const items = data.items;
			const dataAsset = data.includes.Asset;
			const page = document.title.toLowerCase();

			// Ver de simplificar estos ifs en una funcion
			if (page === 'portfolio') {
				const projects = items.filter((item) => item.fields.hasOwnProperty('url')); // Ver de buscar otro filtro y sacar el item de url de los servicios y portfolio de Contentful
				const projectCollection = [];
				for (let i = 0; i < 3; i++) {
					// Esto lo hago así porque solo quiero 3 projectos principalmente
					const project = projects[i];
					const projectImg = dataAsset.find((img) => img.sys.id === project.fields.image.sys.id).fields.file.url;
					const projectObject = {
						titulo: project.fields.title,
						descripcion: project.fields.description,
						imageURL: projectImg,
						projectURL: project.fields.url,
					};
					projectCollection.push(projectObject);
				}
				return projectCollection;
			} else {
				const services = items.filter((item) => !item.fields.hasOwnProperty('url')); // Ver de buscar otro filtro y sacar el item de url de los servicios y portfolio de Contentful
				const servicesCollection = [];
				for (let i = 0; i < 3; i++) {
					// Esto lo hago así porque solo quiero 3 servicios principalmente
					const service = services[i];
					const serviceImg = dataAsset.find((img) => img.sys.id === service.fields.image.sys.id).fields.file.url;
					const serviceObject = {
						titulo: service.fields.title,
						descripcion: service.fields.description,
						imageURL: serviceImg,
					};
					servicesCollection.push(serviceObject);
				}
				return servicesCollection;
			}
		});
}
