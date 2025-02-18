<template>
    <div class="container-header">

    
    <AlertHeader></AlertHeader>
    <header>
       
        <div class="caixa">
           
        <NuxtLink to="/">  
        
            <Logo></Logo>
   
            </NuxtLink>
            
            <Buscar></Buscar>
       
        </div>
        
    </header>
</div>
</template>


<style scoped>

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

.container-header{
    display: flex;
    justify-content: center;
  
    margin-bottom:120px;
}


header{
    margin-top: 30px;
    
    display: flex;
   
    position: fixed;
  top: 1;
    z-index: 10;
   background-color:white;
   backdrop-filter: blur(20px);
    width:100vw;
    border-radius: 25px;
    box-shadow: 1px 1px 10px 1px gray;
    height: 100px;
    
    
}
.logo img{
    min-width: 150px; /* largura mínima */
  max-width: 150px; /* largura máxima */
  width: 30%; 
}

.caixa{
  
display: grid;
align-items: center;
grid-template-columns: 1fr 1fr ;
gap:20px;
    width: 100px;
    height: 100%;
  padding-left:20px;
 
}

/*tira o efeito de link nos compoentnes dentro do nuxtlink*/
a{
    text-decoration: none;
}





</style>