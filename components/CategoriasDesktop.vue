<template>
   
    
    <p class="title">
        Categorias
    </p>
    <nav>
        <ul> <NuxtLink to="/">
            <li> 
                <div class="item">
                <img src="/categorias_desktop/desktop_ofertas.png" alt="">    
                </div>
                <p>Ofertas</p>
            </li>
        </NuxtLink>
        
           <NuxtLink to="eletrica">
            <li>
                <div class="item">
                    <img src="/categorias_desktop/desktop_eletrica.png" alt="">    
                </div>
                <p>Elétrica</p>
            </li>
            </NuxtLink>
          

            <NuxtLink to="hidraulica">
            <li> 
                <div class="item">
                    <img src="/categorias_desktop/desktop_hidraulica.png" alt="">       
                </div>
                <p>Hidráulica</p>
            </li>
        </NuxtLink>

                <NuxtLink to="ferramenta">
            <li> 
                <div class="item">
                    <img src="/categorias_desktop/desktop_ferramentas.png" alt="">  
                </div>
                <p>Ferramentas</p>
            </li>
        </NuxtLink>

        <NuxtLink to="ferramenta">
            <li> 
                <div class="item">
                    <img src="/categorias_desktop/desktop_iluminacao.png" alt="">  
                </div>
                <p>Iluminação</p>
            </li>
        </NuxtLink>

        
        </ul>
    </nav>


</template>

<style scoped>

.title{
  margin: 20px 0px 20px 30px;  
}

nav ul{
    display: flex;

    gap: 12px;
}

nav ul li{
    list-style: none;
   
   
}

a{
  all: unset;
  text-decoration: none;
}



nav ul li p{

   color: black;
}





nav ul li p{
    width: 34px;
   
}


.icons{
    font-size: 40px;
}


ul li img{
    max-width: 235px;
    background-color: red;
}


.container{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: red;
    width: 100vw;
}
</style>