function contactComponent(el) {
	const componentEl = document.createElement('div');
	componentEl.setAttribute('class', 'contact__container');

	componentEl.innerHTML = `    
  <h2 class="contact__title">Escribime</h2>
  <form class="contact__form">
    <div class="contact__form-fieldset">
      <label for="name" class="contact__form-label">Nombre</label>
      <input name="name" type="text" id="name" placeholder="Tu nombre" class="contact__form-text-input">
    </div>
    <div class="contact__form-fieldset">
      <label for="email" class="contact__form-label">Email</label>
      <input name="email" type="email" id="email" placeholder="tu@gmail.com" class="contact__form-mail-input">
    </div>
    <div class="contact__form-fieldset">
      <label for="message" class="contact__form-label">Mensaje</label>
      <textarea name="message" id="message" class="contact__form-textarea"></textarea>
    </div>
    <button class="contact__form-submit-button" type="submit">
      <span>Enviar <i class='bx bx-paper-plane'></i></span>
    </button>
  </form>`;

	const formEl = componentEl.querySelector('.contact__form');
	formEl.addEventListener('submit', async (e) => {
		e.preventDefault();
		const form = e.target;
		const data = {
			to: form.email.value,
			message: form.message.value,
		};
		/* Que hace esa api? */
		const response = await fetch('https://apx-api.vercel.app/api/utils/dwf', {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(data),
		});
		form.reset(); /* Me sirve para que se borren los datos del form una vez que se envió el mail */
		return response.json();
	});

	el.appendChild(componentEl);
}
