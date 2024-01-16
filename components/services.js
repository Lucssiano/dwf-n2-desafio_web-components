function servicesComponent(el) {
	const componentEl = document.createElement('div');
	componentEl.setAttribute('class', 'services__container');

	componentEl.innerHTML = `   
  <div class="services__service">
    <img src="./img/paginas-web-img.jpg" alt="Servicio" class="services__service-img">
    <h4 class="services__service-title">Desarrollo de páginas web</h4>
    <p class="services__service-description">Creacion de paginas webs, totalmente responsive y mobile first. Lorem
    ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div class="services__service">
    <img src="./img/paginas-web-img.jpg" alt="Servicio" class="services__service-img">
    <h4 class="services__service-title">Desarrollo de páginas web</h4>
    <p class="services__service-description">Creacion de paginas webs, totalmente responsive y mobile first. Lorem
    ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div class="services__service">
    <img src="./img/paginas-web-img.jpg" alt="Servicio" class="services__service-img">
    <h4 class="services__service-title">Desarrollo de páginas web</h4>
    <p class="services__service-description">Creacion de paginas webs, totalmente responsive y mobile first. Lorem
    ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>`;

	el.appendChild(componentEl);
	// el.insertBefore(componentEl, el.firstChild);
}

function getServices() {}

// function addService() {}
