<template>
    <div  class="container-header" >

    
   
    <header>
        <div class="conteudo-header">
        <div class="caixa">
           
        <NuxtLink to="/">  
        
            <Logo></Logo>
   
            </NuxtLink>
            
            <Buscar></Buscar>
            <Menu2Header></Menu2Header>
          
        </div>
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
    align-items: center;
    justify-content: center;
    height: 80px;
}

header{

    display: flex;
    align-items: start;
    justify-content: center;
    position: fixed;
  top: 1;
    z-index: 10;
   background-color: red;

    width: 100%;
    height: 120px;
    padding: 20px;
 
 
}
.logo img{
    min-width: 150px; /* largura mínima */
  max-width: 150px; /* largura máxima */
  width: 30%; 
}

.caixa{
  
display: grid;
align-items: center;
grid-template-columns: 1fr 4fr 2fr;
    width: 100%;
    height: 100%;
 
}

/*tira o efeito de link nos compoentnes dentro do nuxtlink*/
a{
    text-decoration: none;
}

.conteudo-header{
    margin-top: 30px;
    width: 1320px;
    color: white;
}




</style>


