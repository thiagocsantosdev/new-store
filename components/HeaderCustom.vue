<template>
    
    <header>
        <NuxtLink to="#">  <div class="logo">
            <img src="/logo.png" alt="">
        </div> </NuxtLink>
       
       <Buscar></Buscar>
        <Carrinho></Carrinho>
    </header>

</template>


<style>

.logo img{
    width: 120px;
}

header{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
}

</style>