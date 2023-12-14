<script setup>
const titulo = 'Como isso funciona?'
const texto = 'Diga o que você precisa, que farei acontecer'

</script>

<template>
  <div>
    <ul class="list-box1">
        <h3>{{ titulo }}</h3>
        <h1>{{ texto }}</h1>
    </ul>
  </div>
</template>


<style>
div{
    height: 8vw;
}
.list-box1 {
    margin-left: 6vw;
    margin-top: 3vw;
    font-family: Segoe UI Symbol;
    color: #fff;
}
@media (max-width: 800px){
  .list-box1 {
    color: #fff;
    margin-top: 2vw;
  }

}



</style>