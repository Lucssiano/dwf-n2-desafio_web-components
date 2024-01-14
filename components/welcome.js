function welcomeComponent(el) {
	const componentEl = document.createElement('div');
	componentEl.setAttribute('class', 'welcome__container');

	componentEl.innerHTML = `
  <h1 class="welcome__title">Hola,<span>Soy Lucho</span></h1>
  <img src="./img/rocket-img.png" alt="Cohete" class="welcome__img">`;

	el.appendChild(componentEl);
}
