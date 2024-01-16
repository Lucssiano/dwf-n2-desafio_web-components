function headerComponent(el) {
	const loaderEl = document.querySelector('.loader-container');
	loaderEl.style.display = 'inherit';

	getLogo()
		.then((logo) => {
			const componentEl = document.createElement('div');
			componentEl.setAttribute('class', 'header__container');

			componentEl.innerHTML = `
	  		<a href="/" class="img-logo-container">
	  		  <img src=${logo} alt="Logo Luciano" class="logo">
	  		</a>
	  		<div class="header__menu-button">
	  		  <div class="header__menu-div line-1"></div>
	  		  <div class="header__menu-div line-2"></div>
	  		  <div class="header__menu-div line-3"></div>
	  		</div>
	  		<nav class="header__nav-mobile">
	  		  <a href="./" class="header__nav-link">Home</a>
	  		  <a href="./portfolio.html" class="header__nav-link">Portfolio</a>
	  		  <a href="./servicios.html" class="header__nav-link">Servicios</a>
	  		  <a href="./contacto.html" class="header__nav-link">Contacto</a>
	  		</nav>
	  		<nav class="header__nav-desktop">
	  		  <a href="./" class="header__nav-link">Home</a>
	  		  <a href="./portfolio.html" class="header__nav-link">Portfolio</a>
	  		  <a href="./servicios.html" class="header__nav-link">Servicios</a>
	  		  <a href="./contacto.html" class="header__nav-link">Contacto</a>
	  		</nav>`;

			const burgerMenuEl = componentEl.querySelector('.header__menu-button');
			const burgerMenuButton = componentEl.querySelector('.header__menu-button');
			const burgerMenuLinesEL = componentEl.querySelectorAll('.header__menu-button .header__menu-div');
			const navbarEl = componentEl.querySelector('.header__nav-mobile');

			burgerMenuEl.addEventListener('click', () => {
				navbarEl.classList.toggle('active');
				burgerMenuButton.classList.toggle('active');
				burgerMenuLinesEL.forEach((line) => {
					line.classList.toggle('active');
				});
			});

			el.appendChild(componentEl);
		})
		.finally(() => {
			loaderEl.style.display = 'none';
		});
}

// La repito pero en realidad se puede usar directamente sin definirla porque el header y el footer siempre se usan juntos, y la función está definida en el header
async function getLogo() {
	const ACCESS_TOKEN = 'F1nsR-5x3RL7y74XwqvFHR4PFzhyq3VlTlj0b-Mnn6E';
	const SPACE_ID = 'idhxktutcvpy';
	const ENVIRONMENT_ID = 'master';
	const LOGO_ID = '1plZT9oMWtLEUCWk89kpKy';
	const LOGO_CONTENTFUL_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/assets/${LOGO_ID}?access_token=${ACCESS_TOKEN}`;

	try {
		const res = await fetch(LOGO_CONTENTFUL_URL);
		const data = await res.json();
		const logo = data.fields.file.url;
		return logo;
	} catch (err) {
		console.error(err);
	}
}
