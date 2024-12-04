<template>

   <BannerHidraulica></BannerHidraulica>
    <h3>
        Tudo em Hidráulica
    </h3>
    <ul>
        <li v-for="produto in produtosFiltrados" :key="produto.id">
          <img :src="produto.imagem" alt="Imagem do produto" width="100" />
          <div class="item-content">
            <p class="nome-produto">   {{ produto.nome }}</p> <p class="preco-produto"> R$ {{ produto.preco.toFixed(2) }}</p>
          </div>
         
        </li>
      </ul>
</template>


<style scoped>

   

    h3{
        font-family: 'Poppins';
        font-size: 1rem;
        padding: 20px;
    }

  

</style>


<script setup>
import { ref, computed } from 'vue'
import { useFetch } from '#app'

// Buscar os produtos da API
const { data: produtos, pending, error } = useFetch('/api/produtos')

// Filtrar produtos pela categoria "eletrica"
const produtosFiltrados = computed(() => {
  return produtos.value?.filter(produto => produto.categoria === 'hidraulica') || []
})
</script>
