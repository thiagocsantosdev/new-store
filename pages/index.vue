<template>
<div  >

      <HeaderCustom ></HeaderCustom>
      <SubmenuCategorias></SubmenuCategorias>
     
      <div>
      <BannerIndex v-if="isDesktop"></BannerIndex>
      <BannerMobileIndex v-if="isMobile"></BannerMobileIndex>
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
   






</style>


<script setup>

import { useMediaQuery } from '@vueuse/core'

const isDesktop = useMediaQuery('(min-width: 641px)')
const isMobile = useMediaQuery('(max-width: 640px)')
</script>