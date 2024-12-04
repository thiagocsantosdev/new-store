<template>
  <ul>
        <li v-for="produto in produtosFiltrados" :key="produto.id">
          <img :src="produto.imagem" alt="Imagem do produto" width="100" />
          <div class="item-content">
            <p class="nome-produto">   {{ produto.nome }}</p> <p class="preco-produto"> R$ {{ produto.preco.toFixed(2) }}</p>
          </div>
         
        </li>
      </ul>
</template>