
<template>
  
  <Carousel v-bind="carouselConfig">
   
    <Slide v-for="produto in produtos" :key="produto.id">
      <li>
      <div class="carousel__item">{{ produto.id[0] }}
        <img :src="produto.imagem" alt="Imagem do produto" width="120" />
          <div class="item-content">
            <p class="nome-produto">   {{ produto.nome }}</p> <p class="preco-produto"> R$ {{ produto.preco.toFixed(2) }}</p>
          </div>
         
        
    </div>
  </li>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>

</template>

<script setup>
import { ref, onMounted } from 'vue';

const produtos = ref([]);

onMounted(async () => {
  const response = await fetch('/api/produtos');
  produtos.value = await response.json();
});


import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 2.2,
  wrapAround: true
}
</script>



<style scoped>






ul{
display: flex;
gap: 10px;
flex-wrap: wrap;

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

.carousel__item{
  display: grid;
  place-items: center;
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 200px;
  height: 280px;
  margin-bottom: 40px;
  transition: ease-in-out 200ms;
}

.carousel__item:hover{
  border: 1px solid red;
  transition: ease-in-out 200ms;
  cursor: pointer;
}

.carousel__item img:hover{
  transform: scale(1.1);
  transition: ease-in-out 200ms;
}

.preco-produto{
font-family: 'Montserrat';
font-weight: 800;
}
</style>