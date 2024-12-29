<template>
    <div class="container">
        <div class="cozinha">
          <img src="/banheiro.png" alt="">
        </div>

        <div class="banheiro">
          <img src="/cozinha.png" alt="">
        </div>
    </div>
</template>


<style scoped>

 .container{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

 width: clamp(1280, 90vw, 1280px);
 flex-wrap: wrap;
 }

  .banheiro img, .cozinha img{
    height: 300px;
    margin-top: 40px;
    width: clamp(250px, 90vw, 550px);
  }

  
</style>