<template>
    
    <header>
        <NuxtLink to="/">  <div class="logo">
            <img src="/logo.png" alt="">
        </div> </NuxtLink>
       

    </header>

</template>


<style scoped>

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

header{
    display: flex;
    align-items: center;


}
.logo img{
    min-width: 50px; /* largura mínima */
  max-width: 800px; /* largura máxima */
  width: 30%; 
}





</style>