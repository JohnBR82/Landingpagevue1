<script setup>
import Formulario from '../components/Formulario.vue'
import Footera from '../components/Footer.vue'

</script>

<template>

    <h1 class="tituloabout">Outros Trabalhos</h1>
  <div class="border"></div>
  <div class="container1">
  <div class="articleoutros">
    <ul class="articleuloutros">
        <img class="imagemartigo" src="../assets/geradordefotos.png" alt="" srcset="">
        <h1 class="tituloartigooutros">Gerador De Fotos </h1>
        <h4 class="textoartigooutros">Crio fotos para seu negocio, seja qual for o motivo social</h4>
        <a class="linkartigos" href="https://media.discordapp.net/attachments/900615502584512545/1184957414160740492/00014-309091330.png?ex=658ddc96&is=657b6796&hm=f11ecf141a3235f8eeb27efeeb2ba088df8ea9eb50dc073f894349dfabf014d4&=&format=webp&quality=lossless&width=676&height=676">Demonstração</a>
    </ul>
  </div>
  <div class="articleoutros">
    <ul class="articleuloutros">
        <img class="imagemartigo" src="../assets/copywriting.png" alt="" srcset="">
        <h1 class="tituloartigooutros">Copywriting</h1>
        <h4 class="textoartigooutros">Posso produzir textos persuasivos para seu negocio</h4>
    </ul>
  </div>
  <div class="articleoutros">
    <ul class="articleuloutros">
        <img class="imagemartigo" src="../assets/blog.png" alt="" srcset="">
        <h1 class="tituloartigooutros">Blog</h1>
        <h4 class="textoartigooutros">Posso criar postagem para seu nicho, seja qual for ele</h4>
    </ul>
  </div>
  <div class="articleoutros">
    <ul class="articleuloutros">
        <img class="imagemartigo" src="../assets/tradução.png" alt="" srcset="">
        <h1 class="tituloartigooutros">Tradução</h1>
        <h4 class="textoartigooutros">Posso fazer tradução de qualquer texto, português para inglês e vice-versa</h4>
    </ul>
  </div>
</div>
<div class="container1">
  <div class="articleoutros">
    <ul class="articleuloutros">
        <img class="imagemartigo" src="../assets/testador.png" alt="" srcset="">
        <h1 class="tituloartigooutros"> Testador </h1>
        <h4 class="textoartigooutros">Posso testar seu jogo ou aplicativo para fins de dar uma analise clara, se existe erros ou bugs</h4>
    </ul>
  </div>
  <div class="articleoutros">
    <ul class="articleuloutros">
        <img class="imagemartigo" src="../assets/trafegopago.png" alt="" srcset="">
        <h1 class="tituloartigooutros">Trafego Pago</h1>
        <h4 class="textoartigooutros">Posso colocar seu site no topo, com metodos SEO</h4>
    </ul>
  </div>
  <div class="articleoutros">
    <ul class="articleuloutros">
        <img class="imagemartigo" src="../assets/bot.png" alt="" srcset="">
        <h1 class="tituloartigooutros">Bots</h1>
        <h4 class="textoartigooutros">Posso criar seu bot, mais preciso de especificações</h4>
    </ul>
  </div>
  <div class="articleoutros">
    <ul class="articleuloutros">
        <img class="imagemartigo" src="../assets/moderador.png" alt="" srcset="">
        <h1 class="tituloartigooutros">Moderador</h1>
        <h4 class="textoartigooutros">Posso ser moderador do seu discord, ficar horas monitorando atividades suspeitas</h4>
    </ul>
  </div>
</div>

<formulario/>
<footera/>
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
.tituloartigooutros{
    text-align: center;
    justify-content: center;
    align-content: center;
    color: antiquewhite;
}

.textoartigooutros{
    text-align: center;
    justify-content: center;
    align-content: center;
    color: antiquewhite;
    }

.tituloabout{
  color: #fff;
  text-align: center;
}


.linkartigos{
  display: table;
  margin-left: auto;
  margin-right: auto;
  text-decoration: none;
  color: red;
}
.active:after {
  border-color: #fff;
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

/* Art IA */
.Arte{
  margin-left: auto;
  margin-right: auto;

}
.image-example{
  height: 60vh;
  width: 60vh;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10vh;
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
  .tituloartigooutros{
    font-size: 3vw;
  }
  .textoartigooutros{
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
@media screen and (max-width:1900px){
  .articleoutros{
    height: 20vw;
  }
}
@media screen and (max-width:1300px){
  .articleoutros{
    height: 33vw;
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
  .titlenew {
  font-size: 1rem;
  width: 5vh;
  text-align: center;
}
}


@media (max-width: 370px){

.articleuloutros{
  height: 40vw;
}
}
</style>