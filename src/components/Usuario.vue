<template>
<div class="perfil">
    <img v-bind:src="pessoa.avatar" alt="Perfil" />
    <strong>{{ pessoa.first_name + pessoa.last_name }}</strong>
    <span>{{ pessoa.email }}</span>
</div>
</template>

<script setup>
import { ref, onMounted,} from 'vue';

const pessoa = ref({
})


onMounted(async() => {
    pessoa.value = await buscaInformacoes();
});


const buscaInformacoes = async () => {
    const req = await fetch("https://reqres.in/api/users/1")
    const json = await req.json();
    return json.data;
};

</script>



<style scoped>

.formulario{
    margin: 0 auto;
    padding: 5px;
    width: 200px;
    background-color: darkcyan;
}

.botao {
    margin: 5px auto;
    padding: 5px;
    display: block;
    background: darkcyan;
    border-radius: 5px;
    border-style: none;
    cursor: pointer;
}

.botao:hover{
    background: rgb( 102, 147, 147)
}
</style>