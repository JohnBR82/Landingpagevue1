<script setup>
import Computador from "../assets/computador-portatil.png"
import Fone from "../assets/fone-de-ouvido.png"
import Config from "../assets/configuracoes.png"
import Casa from "../assets/trabalho-em-casa.png"

</script>

<template>
<ul class="circulo">
  <li class="a"></li>
  <li class="active"></li>
</ul> 
    <h1 class="tituloabout">Sobre Nosso Trabalho</h1>
  <div class="border"></div>
  <div class="container1">
  <div class="articleoutros">
    <ul class="articleul">
        <img class="imagemartigo" :src="Computador" alt="" srcset="">
        <h1 class="tituloartigo">Full Stack </h1>
        <h4 class="textoartigo">Estou a dois anos e meio no mercado de programação, fiz varios trabalhos freelancer, domino o javascript, python, php.</h4>
    </ul>
  </div>
  <div class="articleoutros">
    <ul class="articleul">
        <img class="imagemartigo" :src="Fone" alt="" srcset="">
        <h1 class="tituloartigo">Freelancer</h1>
        <h4 class="textoartigo">Ofereço criar sites a partir do que você precisa</h4>
    </ul>
  </div>
  <div class="articleoutros">
    <ul class="articleul">
        <img class="imagemartigo" :src="Config" alt="" srcset="">
        <h1 class="tituloartigo">Trabalho</h1>
        <h4 class="textoartigo">Eu termino seu site o mais rapido possivel</h4>
    </ul>
  </div>
  <div class="articleoutros">
    <ul class="articleul">
        <img class="imagemartigo" :src="Casa" alt="" srcset="">
        <h1 class="tituloartigo">No conforto do lar</h1>
        <h4 class="textoartigo">Tenho disponibilidade todos os dias, desde telegram, discord ou email</h4>
    </ul>
  </div>
</div>
</template>

<style>
.container1{
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    box-sizing: border-box  !important;
}

.articleoutros{
    width:100%;
    height: 14vw;


}

.imagemartigo  {
  width: 140px;
    margin: auto;
  display: block;

}
.tituloartigo{
    text-align: center;
    justify-content: center;
    align-content: center;
    color: antiquewhite;
}

.textoartigo{
    text-align: center;
    justify-content: center;
    align-content: center;
    color: antiquewhite;
    }

.tituloabout{
  color: #fff;
  text-align: center;
}

.circulo {
  text-align: justify;
  position: relative;
  overflow: hidden;
}
.circulo:before, .active:after {
  content: '';
  width: 100%;
  border: 2px solid #fff;
  position: absolute;
  top: 1em;
  margin-top: -2px;
  z-index: -1;
}
.active:after {
  border-color: #fff;
}
.circulo:after {
  content: "";
  display: inline-block;
  width: 100%;
}
.a {
  width: 2em;
  height: 2em;
  text-align: center;
  line-height: 2em;
  border-radius: 50%;
  background: #111;
  margin-left: 49.2%;
  margin-right: 50%;
  display: inline-block;
  color: white;

    
}
.active ~ li {
  background: #111;
}



@media (max-width: 500px){
  .a{
    position: relative;
    top: 50px;
    display: none;
    
  }
  .tituloabout{
    margin-top: 16vw;
  }
}
@media (max-width: 800px){
  li .a{
    background: #111;
  }
  
  .imagemartigo{
    width: 15vw;
    margin-top: 1vw;
  }
  .a{
    margin-top: 18vw;
    
    
  }
  .tituloartigo{
    font-size: 3vw;
  }
  .textoartigo{
    font-size: 2.3vw;
    width: auto;
    font-style: normal;
  }
  .articleoutros{
    width: auto;
    height: 30vw;
  }
  .container1{
    width: auto;
    height: auto;
    display: block;
    flex-direction: column;
    box-sizing: border-box  !important;
}
}

@media screen and (max-width:1300px){
  .articleoutros{
    height: 20vw;
  }
}

@media (max-width: 900px){
  .a{
margin-top: 10vw;
    
  }
  .articleoutros{
    height: 40vw;
  }
}
@media (max-width: 400px){
  .a{
    display: none;
    
  }
  .tituloabout{
    margin-top: 26vw;
  }
  .articleoutros{
    height: 30vw;
  }
}


@media (max-width: 370px){

.articleul{
  height: 40vw;
}
}
</style>