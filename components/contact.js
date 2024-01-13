function contactComponent(el) {
	const componentEl = document.createElement('div');
	componentEl.setAttribute('class', 'contact__container');

	componentEl.innerHTML = `    
  <h2 class="contact__title">Escribime</h2>
  <form action="" class="contact__form">
    <div class="contact__form-fieldset">
      <label for="nombre" class="contact__form-label">Nombre</label>
      <input type="text" id="nombre" placeholder="Tu nombre" class="contact__form-text-input">
    </div>
    <div class="contact__form-fieldset">
      <label for="email" class="contact__form-label">Email</label>
      <input type="email" id="email" placeholder="tu@gmail.com" class="contact__form-mail-input">
    </div>
    <div class="contact__form-fieldset">
      <label for="mensaje" class="contact__form-label">Mensaje</label>
      <textarea id="mensaje" class="contact__form-textarea"></textarea>
    </div>
    <button class="contact__form-submit-button" type="submit">
      <span>Enviar <i class='bx bx-paper-plane'></i></span>
    </button>
  </form>`;

	const formEl = componentEl.querySelector('.contact__form');
	formEl.addEventListener('submit', (e) => {
		e.preventDefault();
		console.log(e.target);
		/* Hay que hacer lo que pide la consigna */
	});

	el.appendChild(componentEl);
}
