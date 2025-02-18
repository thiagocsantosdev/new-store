<template>
<div class="container" >

      <HeaderCustom v-if="isDesktop"></HeaderCustom>
      <MobileHeadermobile v-if='isMobile'></MobileHeadermobile>
      <div>
      <BannerIndex v-if="isDesktop"></BannerIndex>
      <CategoriasDesktop v-if ="isDesktop" ></CategoriasDesktop>
      <Categorias v-if ="isMobile"></Categorias>
      <h3 class="title">Principais Ofertas</h3>

      <ProdutosCarrousel v-if="isDesktop"></ProdutosCarrousel>
      
      <MarcaPromocional1 v-if="isDesktop"></MarcaPromocional1>

      <h3 class="title">Mãos a obra</h3>
      <produtosCarrouselEssenciais v-if="isDesktop"></produtosCarrouselEssenciais>
        <MobileProdutosCarrouselEssenciais v-if="isMobile"></MobileProdutosCarrouselEssenciais>
      <Dicas></Dicas>
      <h3 class="title">Ofertas LIMITADAS</h3>
      <ProdutosCarrouselOfertaDaSemana></ProdutosCarrouselOfertaDaSemana>
      <h3 class="title">Marcas Parceiras</h3>
      <MarcasParceirasVue></MarcasParceirasVue>
       <PedidoExpresso v-if="isDesktop"></PedidoExpresso>
       
       </div>
    </div>
</template>




<style scoped>

*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
.title{
        padding: 20px;
        font-family: 'Poppins';
        font-size: 1.6rem;
        font-weight: 500;
    }
   


.container{
 
}




</style>


<script setup>

import { useMediaQuery } from '@vueuse/core'

const isDesktop = useMediaQuery('(min-width: 581px)')
const isMobile = useMediaQuery('(max-width: 580px)')
</script>