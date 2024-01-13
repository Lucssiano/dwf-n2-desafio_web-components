function headerComponent(el) {
	/* Modifico directamente el html del elemento porque sino se rompe todo el flex */
	el.innerHTML = `   
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

	const burgerMenuEl = el.querySelector('.header__menu-button');
	const burgerMenuLinesEL = el.querySelectorAll('.header__menu-button .header__menu-div');
	const navbarEl = el.querySelector('.header__nav-mobile');

	burgerMenuEl.addEventListener('click', () => {
		navbarEl.classList.toggle('active');
		burgerMenuLinesEL.forEach((line) => {
			line.classList.toggle('active');
		});
	});
}
