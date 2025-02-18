<template>
  
    <div>
      <HeaderCustom></HeaderCustom>
     <BannerFerramenta></BannerFerramenta>
   
      <h3>
          Tudo em Ferramentas
         </h3>
      <ul>
          <li v-for="produto in produtosFiltrados" :key="produto.id">
            <img :src="produto.imagem" alt="Imagem do produto" width="100" />
            <div class="item-content">
              <p class="nome-produto">   {{ produto.nome }}</p> <p class="preco-produto"> R$ {{ produto.preco.toFixed(2) }}</p>
            </div>
           
          </li>
        </ul>
         
    </div>
  
      </template>
      
      
      <script setup>
      import { ref, computed } from 'vue'
      import { useFetch } from '#app'
      
      // Buscar os produtos da API
      const { data: produtos, pending, error } = useFetch('/api/produtos')
      
    
      const produtosFiltrados = computed(() => {
        return produtos.value?.filter(produto => produto.categoria === 'ferramentas') || []
      })
      </script>
      
      
      <style scoped>
      
      ul{
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      }
      
      h3{
      margin: 20px 10px 30px 30px;
      font-family: 'Poppins';
      font-size: 1.2rem;
      }
      
      li{
      list-style: none;
      display: grid;
      grid-template-rows: 160px 20px 20px;
      place-items: center;
      border: 1px solid lightgray;
      border-radius: 5px;
      width: 150px;
      height: 240px;
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
      