<script setup>
const titulo = 'Precisa de um site?'
const texto = 'Construimos sites para todos os ramos'
const botãotexto = 'Experimente'

</script>

<template>
  <div class="imagem">
    <ul class="list-box">
        <h2 class="tituloheader">{{ titulo }}</h2>
        <h3 class="textoheader">{{ texto }}</h3>
        <a class="botãoheader" href="#"> <span>{{ botãotexto }}</span></a>
    </ul>
  </div>
</template>

<style scoped>
div {
background: black;
height: 30vw;
}
.list-box{
    text-align: center;
    right: 12vw;
    top: 6vw;
    position: relative;
    
  }
.imagem{
  background-image:url("../assets/1.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}
.tituloheader{
  margin: 0 auto;
  text-align: center;
  color: black;
  text-decoration: none;
  font-family: Segoe UI Symbol;
  font-weight:300;
  font-size: 2vw;
}
.textoheader{
  margin: 0 auto;
  text-align: center;
  color: black;
  font-family: Segoe UI Symbol;
  font-weight: bolder;
  font-size: 2.6vw;
}

a{
  display: block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
  font-family: Segoe UI Symbol;
  text-decoration: none;
  color: black;
  border: 2px solid black;
  letter-spacing: 2px;
  text-align: center;
  position: relative;
  transition: all .35s;
  border-radius: 10px;
  margin: 0 auto;
  top: 20px;
}

a span{
  position: relative;
  z-index: 2;
}

a:after{
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: #111;
  transition: all .35s;
  border-radius: 5px;
}

a:hover{
  color: #fff;
}

a:hover:after{
  width: 100%;
}

@media (max-width: 800px){

  .list-box{
    text-align: center;
    position: relative;
    right: 20vw;
    top: 40vw;
  }
  .imagem{
  background-image:url("../assets/2.jpg");
  background-repeat: no-repeat;
  background-attachment:local;
  background-position: center;
}
  .tituloheader{
  margin: 0 auto;
  font-size: 3vw;
}
.textoheader{
  margin: 0 auto;
  font-size: 3vw;
}

div {
background: black;
height: 90vw;
}

}


</style>