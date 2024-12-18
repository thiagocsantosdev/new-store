<template>
    <div class="container">
        <div class="cozinha">

        </div>

        <div class="banheiro">

        </div>
    </div>
</template>


<style scoped>

 .container{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
 }

  .banheiro{
    background-image: url('/banheiro.png');
    height: 300px;
    width: 615px;
    margin-top: 40px;
  }

  .cozinha{
    background-image: url('/cozinha.png');
    height: 300px;
    width: 615px;
    margin-top: 40px;
  }
</style>