<template>
<div >

      <HeaderCustom></HeaderCustom>
      <BannerIndex></BannerIndex>
      <CategoriasDesktop v-if ="isDesktop" ></CategoriasDesktop>
      <Categorias v-if ="isMobile"></Categorias>
      <h3 class="title">Principais Ofertas</h3>

      <ListaOfertas></ListaOfertas>
    
      <MarcaPromocional1></MarcaPromocional1>

       <Dicas></Dicas>
        <MarcaPromocional2></MarcaPromocional2>
       <PedidoExpresso></PedidoExpresso>
    </div>
</template>




<style scoped>

*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}


.banner{
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

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

const isDesktop = useMediaQuery('(min-width: 581px)')
const isMobile = useMediaQuery('(max-width: 580px)')
</script>