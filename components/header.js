function headerComponent(el) {
	const componentEl = document.createElement('div');
	componentEl.setAttribute('class', 'header__container');

	componentEl.innerHTML = `   
  <a href="/" class="img-logo-container">
    <img src="./img/logo-img.jpg" alt="Logo Luciano" class="logo">
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
}
