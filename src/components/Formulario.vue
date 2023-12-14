<script>
class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this);
  }

  displaySuccess() {
    this.form.innerHTML = this.settings.success;
  }

  displayError() {
    this.form.innerHTML = this.settings.error;
  }

  getFormObject() {
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) => {
      formObject[field.getAttribute("name")] = field.value;
    });
    return formObject;
  }

  onSubmission(event) {
    event.preventDefault();
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  async sendForm(event) {
    try {
      this.onSubmission(event);
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormObject()),
      });
      this.displaySuccess();
    } catch (error) {
      this.displayError();
      throw new Error(error);
    }
  }

  init() {
    if (this.form) this.formButton.addEventListener("click", this.sendForm);
    return this;
  }
}

const formSubmit = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
  success: "<h1 class='success'>Mensagem enviada!</h1>",
  error: "<h1 class='error'>Não foi possível enviar sua mensagem.</h1>",
});
formSubmit.init();
</script>

<template>
  <hr class="linha1">
  <h1 class="tituloformulario"> Precisa De Mim </h1>
  <div class="border"></div>
  <form
      action="https://formsubmit.co/ajax/e1456a8617c58e75b8b0b7bcdbf2ddea"
      method="POST"
      data-form
    >
      
      <label for="nome">Nome</label>
      <input type="text" name="nome" id="nome" required />
      <label for="email">E-mail</label>
      <input type="email" name="email" id="email" required />
      <label for="mensagem">Mensagem</label>
      <textarea name="mensagem" id="mensagem" required></textarea>
      <button type="submit" data-button>Enviar</button>

      <h2 class="tituloformulario"> Formulario Não Está Funcionando</h2>
      <div class="border"></div>
    </form>
    <div class="button2">
      <a class="point1" href="https://docs.google.com/forms/d/e/1FAIpQLSfjOlrsdCATk_5E2xFWTPf-lRZuPyusQ0Yop9fRdHs5E3-0UQ/viewform?usp=sf_link">Tente aqui</a>
    </div>
</template>

<style>
form {
  width: 100%;
  max-width: 30rem;
  align-content: center;
  text-align: center;
  margin: auto;
  display: block;
  margin-top: 2vw;
  margin-bottom: 3vw;
}

label,
input,
textarea,
button {
  display: block;
}

input,
textarea,
button {
  width: 100%;
  font: inherit;
  padding: 1.25rem;
  font-weight: 700;
}

input,
textarea {
  margin-bottom: 1rem;
  color: white;
  background: #323644;
  border: 0.125rem solid transparent;
  border-radius: 1.125rem;
  transition: border-color 0.3s, box-shadow 0.3s;
}

input:hover,
input:focus,
textarea:hover,
textarea:focus {
  outline: none;
  border-color: #111;
  box-shadow: 0 0 0 0.3125rem #26344a;
}

label {
  margin-bottom: 0.5rem;
  color: #fff;
  text-align: center;
}

textarea {
  min-height: 12.5rem;
  resize: vertical;
}

button {
  border: none;
  border-radius: 99px;
  color: black;
  background: #FFFF00;
  cursor: pointer;
  transition: 0.3s;
}

button:hover,
button:focus {
  outline: none;
  background: #111;
}

button:disabled {
  cursor: not-allowed;
  background: #555b69;
}

.point1{
  border: none;
  border-radius: 99px;
  color: black;
  background: #FFFF00;
  cursor: pointer;
  transition: 0.3s;
  margin: 0 auto;
  display: block;
  align-content: center;
  align-items: center;
  text-align: center;
  height: 2vw;
  width: 22vw;
  text-decoration: none;
  padding: 0.5vw;
  font-weight: 800;
  font: inherit;
}

.point1:hover{
  outline: none;
  background: #111;
}

.success,
.error {
  text-align: center;
}

.success {
  color: greenyellow;
}

.border{
  background: #FFFF00;
}
.error {
  color: tomato;
}
.tituloformulario{
text-align: center;
color: #fff;
margin-top: 1vw;
}
.linha1{
  color: #fff;
}
@media (max-width: 500px){
 
  input{
    display: block;
    margin: 0px auto;
    width:90% ;
  }
  textarea{
    display: block;
    width:90% ;
    margin: 0px auto;
    margin-bottom:20px;
  }
  button{
    display: block;
    width:90% ;
    margin: 0px auto;
    margin-bottom:20px;
  }
  .point1{
    width: 20vw;
    height: 5vw;
    font-size: small;
  }
  .title{
    font-size: 1rem;

  }
}
@media (max-width: 700px){
  .point1{
    width: 20vw;
    height: 5vw;
    font-size: small;
    text-align: center;
  }
}
@media (max-width: 900px){
  .point1{
    width: 20vw;
    height: 3vw;
    font-size: small;
    text-align: center;
  }
}
@media (max-width: 1100px){
  .point1{
    width: 20vw;
    height: 3vw;
    font-size: small;
    text-align: center;
  }
}
@media (max-width: 1300px){
  .point1{
    width: 20vw;
    height: 3vw;
    font-size: small;
    text-align: center;
  }
}
</style>
