<template>

<div>
    <ul>
        <li v-for="produto in produtos" :key="produto.id">
          <img :src="produto.imagem" alt="Imagem do produto" width="100" />
          <div class="item-content">
            <p class="nome-produto">   {{ produto.nome }}</p> <p class="preco-produto"> R$ {{ produto.preco.toFixed(2) }}</p>
          </div>
         
        </li>
      </ul>
</div>
</template>



<script setup>
import { ref, onMounted } from 'vue';

const produtos = ref([]);

onMounted(async () => {
  const response = await fetch('/api/produtos');
  produtos.value = await response.json();
});
</script>



<style scoped>






ul{
display: flex;
gap: 10px;
flex-wrap: wrap;
}


li{
list-style: none;
display: grid;
grid-template-rows: 240px 20px 20px;
place-items: center;
border: 1px solid lightgray;
border-radius: 5px;
width: 150px;
height: 340px;
}



.item-content{
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;

}

.nome-produto{
font-family: 'Montserrat';
padding: 20px;
}

.preco-produto{
font-family: 'Montserrat';
font-weight: 800;
}
</style>