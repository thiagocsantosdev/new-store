<template>
  
  <div>
    <CategoriasHidraulica></CategoriasHidraulica>
  </div>

    </template>
    
    
    <script setup>
    import { ref, computed } from 'vue'
    import { useFetch } from '#app'
    
    // Buscar os produtos da API
    const { data: produtos, pending, error } = useFetch('/api/produtos')
    
  
    const produtosFiltrados = computed(() => {
      return produtos.value?.filter(produto => produto.categoria === 'hidraulica') || []
    })
    </script>
    
    
    <style scoped>
    
    ul{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    }
    
    h3{
    margin: 0px 0px 30px 30px;
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
    