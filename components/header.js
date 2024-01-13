function headerComponent(el) {
	const componentEl = document.createElement('div');
	componentEl.setAttribute('class', 'header__container');

	componentEl.innerHTML = `   
  <img src="./img/logo-img.jpg" alt="Logo Luciano" class="logo">
  <div class="header__menu-button">
    <div class="header__menu-div line-1"></div>
    <div class="header__menu-div line-2"></div>
    <div class="header__menu-div line-3"></div>
  </div>
  <nav class="header__nav-mobile">
    <a href="#home" class="header__nav-link">Home</a>
    <a href="#portfolio" class="header__nav-link">Portfolio</a>
    <a href="#servicios" class="header__nav-link">Servicios</a>
    <a href="#contacto" class="header__nav-link">Contacto</a>
  </nav>
  <nav class="header__nav-desktop">
    <a href="#home" class="header__nav-link">Home</a>
    <a href="#portfolio" class="header__nav-link">Portfolio</a>
    <a href="#servicios" class="header__nav-link">Servicios</a>
    <a href="#contacto" class="header__nav-link">Contacto</a>
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
