
<script setup>

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 
import Footera from './Footer.vue'
</script>
<template>

    <section id="profile">
      <div class="section__pic-container">
        <img src="../assets/Eu.jpg" alt="John Doe profile picture" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Olá meu nome é</p>
        <h1 class="title">Gabriel</h1>
        <p class="section__text__p2">Desenvolvedor FrontEnd</p>
        <div class="btn-container">
          <button class="btn btn-color-1" onclick="topFunction()" id="myBtn">
            Contact
          </button>
        </div>
        <div id="socials-container">
          <img
            src="./assets/linkedin.png"
            alt="My LinkedIn profile"
            class="icon"
            onclick="location.href='https://linkedin.com/'"
          />
          <img
            src="./assets/github.png"
            alt="My Github profile"
            class="icon"
            onclick="location.href='https://github.com/'"
          />
        </div>
      </div>
    </section>
    <section id="about">
      <p class="section__text__p1">Quer Saber Mais</p>
      <h1 class="title">Sobre Mim</h1>
      <div class="section-container">

          <div class="about-containers">
            <div class="details-container">
              <h3>Experiencia</h3>
              <p class="textballoon1">2+ anos <br/>Freelancer <br />Desenvolvedor FrontEnd</p>
            </div>
            <div class="details-container">
              <h3>Educação</h3>
              <p class="textballoon1">José Mauricio<br />Ensino Medio Completo</p>
            </div>
          </div>

      </div>
    </section>
    <section id="experience">
      <p class="section__text__p1">Explore A Minha</p>
      <h1 class="title">Experiencia</h1>
      <div class="experience-details-container">
        <div class="about-containers2">
          <div class="details-container">
            <h2 class="experience-sub-title">Desenvolvimento FrontEnd</h2>
            <div class="article-container">
              <article>
                <div>
                  <h3>React</h3>
                  <p>Experiente</p>
                </div>
              </article>
              <article>
                <img


                  class="icon"
                />
                <div>
                  <h3>Vue</h3>
                  <p>Experiente</p>
                </div>
              </article>
              <article>
                <img

                  class="icon"
                />
                <div>
                  <h3>SASS</h3>
                  <p>Experiente</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Desenvolvimento Front/Back</h2>
            <div class="article-container">
              <article>
                <img
                  class="icon"
                />
                <div>
                  <h3>MySQL</h3>
                  <p>Avançado</p>
                </div>
              </article>
              <article>
                <img
                  class="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Avançado</p>
                </div>
              </article>
              <article>
                <img

                  class="icon"
                />
                <div>
                  <h3>PHP</h3>
                  <p>Intermediario</p>
                </div>
              </article>
              <article>
                <img
                  class="icon"
                />
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="contact">
      <p class="section__text__p1">Me</p>
      <h1 class="title">Contate</h1>
      <div class="contact-info-upper-container">
        <div class="contact-info-container">
          <img
            src="../assets/github.png"
            alt="Email icon"
            class="icon contact-icon email-icon"
          />
          <p><a href="https://github.com/JohnBR82">Github</a></p>
        </div>
        <div class="contact-info-container">
          <img
            src="../assets/linkedin.png"
            alt="LinkedIn icon"
            class="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/gabrielfront/">LinkedIn</a></p>
        </div>
      </div>
    </section>
    <Footera/>
</template>



<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");



p {
  color: rgb(85, 85, 85);
}


.textballoon1{
  margin-top: 1rem;
}

section {
  padding-top: 4vh;
  height: 96vh;
  margin: 0 10rem;
  box-sizing: border-box;
  min-height: fit-content;
}

.section-container {
  display: flex;
}

/* PROFILE SECTION */

#profile {
  display: flex;
  justify-content: center;
  gap: 5rem;
  height: 80vh;
}

.section__pic-container {
  display: flex;
  height: 400px;
  width: 400px;
  margin: auto 0;
}

.section__text {
  align-self: center;
  text-align: center;
}

.section__text p {
  font-weight: 600;
}

.section__text__p1 {
  text-align: center;
  color: #fff;
}

.section__text__p2 {
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: #fff;
}

.title {
  font-size: 3rem;
  text-align: center;
  color: #fff;
}

#socials-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  gap: 1rem;
}


/* BUTTONS */

.btn-container {
  display: flex;
  justify-content: center;

}

.btn {
  font-weight: 600;
  transition: all 300ms ease;
  padding: 0rem;
  width: 6rem;
  border-radius: 2rem;
  height: 3rem;
}

.btn-color-1,
.btn-color-2 {
  border: rgb(53, 53, 53) 0.1rem solid;
}

.btn-color-1:hover,
.btn-color-2:hover {
  cursor: pointer;
}

.btn-color-1,
.btn-color-2:hover {
  background: rgb(53, 53, 53);
  color: white;
}

.btn-color-1:hover {
  background: rgb(0, 0, 0);
}

.btn-color-2 {
  background: none;
}

.btn-color-2:hover {
  border: rgb(255, 255, 255) 0.1rem solid;
}

.btn-container {
  gap: 1rem;
}

/* ABOUT SECTION */

#about {
  position: relative;
}

.about-containers {
  gap: 2rem;
  margin-bottom: 2rem;
  margin-top: 10rem;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 10vw;
  width: 60%;
}

.about-containers2 {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  margin-top: 22rem;
  margin-right: 1vw;
  margin-left: 1vw;
}

.about-details-container {
  justify-content: center;
  flex-direction: column;
}

.text-outside{
  color: #fff;
}

.about-containers,
.about-details-container {
  display: flex;
}

.about-pic {
  border-radius: 2rem;
}

.arrow {
  position: absolute;
  right: -5rem;
  bottom: 2.5rem;
}

.details-container {
  padding: 1.5rem;
  flex: 1;
  background: white;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  text-align: center;
}

.section-container {
  gap: 4rem;
  height: 80%;
}

.section__pic-container {
  height: 400px;
  width: 400px;
  margin: auto 0;
}

/* EXPERIENCE SECTION */

#experience {
  position: relative;
}

.experience-sub-title {
  color: rgb(85, 85, 85);
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 2rem;
}

.experience-details-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.article-container {
  display: flex;
  text-align: initial;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 2.5rem;
  justify-content: space-around;
}

article {
  display: flex;
  width: 10rem;
  justify-content: space-around;
  gap: 0.5rem;
}

article .icon {
  cursor: default;
}

/* PROJECTS SECTION */

#projects {
  position: relative;
}

.color-container {
  border-color: rgb(163, 163, 163);
  background: rgb(250, 250, 250);
}

.project-img {
  border-radius: 2rem;
  width: 90%;
  height: 90%;
}

.project-title {
  margin: 1rem;
  color: black;
}

.project-btn {
  color: black;
  border-color: rgb(163, 163, 163);
}

/* CONTACT */

#contact {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 70vh;
}

.contact-info-upper-container {
  display: flex;
  justify-content: center;
  border-radius: 2rem;
  border: rgb(53, 53, 53) 0.1rem solid;
  border-color: rgb(163, 163, 163);
  background: (250, 250, 250);
  margin: 2rem auto;
  padding: 0.5rem;
}

.contact-info-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin: 1rem;
}

.contact-info-container p {
  font-size: larger;
}

.contact-icon {
  cursor: default;
}

.email-icon {
  height: 2.5rem;
}
.contact-icon {
  height: 2.5rem;
}

</style>