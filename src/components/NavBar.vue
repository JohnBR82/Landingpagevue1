<template>
    <nav>
     <span>John Freela</span>
      <ul>
        <li><router-link to="/">Inicio</router-link></li>
        <li><router-link to="/sobre">Sobre</router-link></li>
        <li><router-link to="/outros">Outros</router-link></li>
      </ul>
    </nav>
</template>









<script>

</script>


<style scoped>
nav {
    padding: 4px;
    height: 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFF00;
}
ul {
    display: flex;
    list-style-type: none;
    margin-right: 15vh;
    column-gap: 3vh;
    
}
ul li {
    padding: 0 5px;
}
ul li a {
    text-decoration: none;
    color: #111;
    font-family: Segoe UI Symbol;
    font-weight: bolder;  
    font-size: larger;
}

a:hover{
  color: #fff;
  transition: all .35s;
}
@media (max-width: 500px){
  .a{
    position: relative;
    top: 50px;
    
  }
}
</style>