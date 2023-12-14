<script setup>
import NavBar from './components/NavBar.vue'


</script>

<template>
 <main>
  <header>
    <NavBar/>

  </header>
  <RouterView/>



</main>
</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Segoe UI Symbol;
  
}
main{
  background-color: black;
}
header {
  line-height: 1.5;

}

</style>
