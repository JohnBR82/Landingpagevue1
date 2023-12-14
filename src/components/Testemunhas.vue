<template>
  <div class="testimonials">
      <div class="inner">
        <h1>Testemunhas</h1>
        <div class="border"></div>

        <div class="row">
          <div class="col">
            <div class="testimonial">
              <img :src="Carlos" class="imgtestimonial" alt="">
              <div class="name">Carlos Oliveira</div>

              <p class="texttestimonials">
                Gabriel foi crucial para o sucesso inicial da minha startup. Habilidade técnica impressionante, sugestões valiosas e compromisso com a qualidade. Contrataria novamente sem hesitar.
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testimonial">
              <img :src="Ana" class="imgtestimonial" alt="">
              <div class="name">Ana Santos</div>

              <p class="texttestimonials">
                Gabriel desempenhou papel fundamental no desenvolvimento do site do meu restaurante. Criatividade, flexibilidade e compromisso com a qualidade. Altamente recomendado.
              </p>
            </div>
          </div>

          <div class="col">
            <div class="testimonial">
              <img :src="Maria" class="imgtestimonial" alt="">
              <div class="name">Maria Silva</div>
              <p class="texttestimonials">
                Gabriel desenvolveu o site da minha loja de moda feminina com maestria. Profissionalismo, design incrível e pontualidade nos prazos. Recomendo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
import Carlos from "../assets/p1.png"
import Ana from "../assets/p2.png"
import Maria from "../assets/p3.png"
</script>

<style>
div .name{
    height: 2vw;
    color: #111
}
.texttestimonials{
    color: #111;
}
.testimonials{
  padding: 40px 0;
  color: #111;
  text-align: center;
  height: 26vw;
}
.inner{
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  color: #fff;
}

.border{
  width: 160px;
  height: 5px;
  background: #6ab04c;
  margin: 26px auto;
}

.row{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
}
.col{
  flex: 33.33%;
  max-width: 33.33%;
  box-sizing: border-box;
  padding: 15px;

}
.testimonial{
  background: #fff;
  padding: 30px;
  height: auto;
  border-radius: 5px;
}
.testimonial img{
  width: 100px;
  height: 100px;
  border-radius: 50%;

}
.name{
  font-size: 20px;
  text-transform: uppercase;
  margin: 0;
}
.stars{
  color: #6ab04c;
  margin-bottom: 20px;
}


@media screen and (max-width:960px) {
  div .name{
    height: 7vw;
    color: #111;
    font-size: 2vw;
}
.testimonials{
  height: 10vw;
}
.texttestimonials{
  font-size: 1.5vw;
  margin-top: 10px;
}
.testimonials{
  height: 90vw;
}
.testimonial img{
  width: 100px;
  height: 100px;
  border-radius: 50%;

}
}

@media screen and (max-width:550px) {
  div .name{
    height: 4vw;
    color: #111;
    font-size: 2vw;
}

.texttestimonials{
  font-size: 1.5vw;
  margin-top: 10px;
}
.testimonials{
  height: 120vw;

}
.testimonial{
  width: 120px;
}
.testimonial img{
  width: 50px;
  height: 50px;
  border-radius: 50%;

}

}
@media screen and (max-width:1600px){
  .testimonials{
    height: 40vw;
  }  
  div .name{
    height: 4vw;
    color: #111;
    font-size: 2vw;
}

}

@media screen and (max-width:1300px){
  .testimonials{
    height: 40vw;
  }
}
@media screen and (max-width:1180px){
  .testimonials{
    height: 60vw;
    margin-top: 10vw;
  }

}
@media screen and (max-width:900px){
  .testimonials{
    height: 80vw;
    margin-top: 10vw;
  }
}

@media screen and (max-width:610px){
  .testimonials{
    height: 90vw;
    margin-top: 30vw;
  }
}

@media screen and (max-width:610px){
  .testimonials{
    height: 110vw;
    margin-top: 30vw;
  }
  .testimonial{
  width: 110px;
}
@media screen and (max-width:380px){
  .testimonials{
    height: 120vw;
    margin-top: 10vw;
  }
  .testimonial{
  width: 100px;
}
}
}


</style>