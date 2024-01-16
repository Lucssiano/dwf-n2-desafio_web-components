function footerComponent(el) {
	getLogo().then((logo) => {
		const componentEl = document.createElement('div');
		componentEl.setAttribute('class', 'footer__container');

		componentEl.innerHTML = `
        <a href="/" class="img-logo-container">
          <img src=${logo} alt="Logo Luciano" class="logo">
        </a>
        <nav class="footer__nav">
          <a href="./" class="footer__nav-link">
            <i class='bx bx-home nav-icon'></i>
            <span>Home</span>
          </a>
          <a href="./portfolio.html" class="footer__nav-link">
            <i class='bx bx-briefcase nav-icon'></i>
            <span>Portfolio</span>
          </a>
          <a href="./servicios.html" class="footer__nav-link">
            <i class='bx bx-user nav-icon'></i>
            <span>Servicios</span>
          </a>
          <a href="./contacto.html" class="footer__nav-link">
            <i class='bx bx-phone nav-icon'></i>
            <span>Contacto</span>
          </a>
        </nav>
        <div class="footer__social-media-container">
          <a href="https://github.com/Lucssiano" class="footer__social-media-link" target="_blank">
            <i class='bx bxl-github footer__social-media-icon'></i>
          </a>
          <a href="https://www.linkedin.com/in/lucianoriente" class="footer__social-media-link" target="_blank">
            <i class='bx bxl-linkedin-square footer__social-media-icon'></i>
          </a>
          <a href="https://twitter.com/LuchooDev" class="footer__social-media-link" target="_blank">
            <i class='bx bxl-twitter footer__social-media-icon'></i>
          </a>
        </div>
        <div class="footer__terms-container">
          <p class="footer__terms">©2024 - <a href="https://apx.school" target="_blank">https://apx.school</a></p>
        </div>`;

		el.appendChild(componentEl);
	});
}

// La repito pero en realidad se puede usar directamente sin definirla porque el header y el footer siempre se usan juntos, y la función está definida en el header
// async function getLogo() {
// 	const ACCESS_TOKEN = 'F1nsR-5x3RL7y74XwqvFHR4PFzhyq3VlTlj0b-Mnn6E';
// 	const SPACE_ID = 'idhxktutcvpy';
// 	const ENVIRONMENT_ID = 'master';
// 	const LOGO_ID = '1plZT9oMWtLEUCWk89kpKy';
// 	const LOGO_CONTENTFUL_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/assets/${LOGO_ID}?access_token=${ACCESS_TOKEN}`;

// 	try {
// 		const res = await fetch(LOGO_CONTENTFUL_URL);
// 		const data = await res.json();
// 		const logo = data.fields.file.url;
// 		return logo;
// 	} catch (err) {
// 		console.error(err);
// 	}
// }
