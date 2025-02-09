
<template>
  
  <Carousel v-bind="carouselConfig " >
   
    <Slide v-for="produto in produtos.filter(p => p.subcategorias ==='superpromo')" :key="produto.id">
      <li>
      <div class="carousel__item">{{ produto.id[0] }}
        <img :src="produto.imagem" alt="Imagem do produto" width="120" />
          <div class="item-content">
            <p>Quantidade limitada!</p>
            <p class="nome-produto">   {{ produto.nome }}</p> 
            <p class="preco-produto"> R$ {{ produto.preco.toFixed(2) }}</p>
            <button>
              Comprar
            </button>
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
  itemsToShow: 1,
  autoplay: 4000,
  wrapAround: true
}
</script>



<style scoped>

.item-content{
display: grid;
place-items: start;
flex-direction: column;
width: 400px;
padding: 20px;
}

.nome-produto{
font-family: 'Montserrat';

font-size: 1.6rem;
}

.carousel__item{
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 1fr;

  border-radius: 5px;
  width: 600px;
  height: 280px;
  margin-bottom: 40px;
  margin-top: 20px;
  transition: ease-in-out 200ms;
 
}

.carousel__item img{
  width: 260px;
}

.carousel__item img:hover{
  transform: scale(1.1);
  transition: ease-in-out 200ms;
}

.preco-produto{
font-family: 'Montserrat';
font-weight: 800;
font-size: 2rem;
}

.item-content p:nth-child(1){
  background-color: rgb(145, 145, 199);
  color: white;
  padding: 4px;
  font-size: .6rem;
  border-radius: 5px;
}

button{
  background-color: green;
  color: white;
  padding: 6px;
  border-radius: 5px;
  border: none;
}
</style>