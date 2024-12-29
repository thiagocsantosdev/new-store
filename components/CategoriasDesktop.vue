<template>
   
    <div class="container-categoria-desktop">

    
    <p class="title">
        Categorias
    </p>
    <nav>
        <ul > 
            
            <NuxtLink to="/">
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

  .container-categoria-desktop{
    width: 100%;
    display: flex;
    
    flex-direction: column;
  }

   nav ul{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    list-style: none;

   }

   nav ul li p{
    text-decoration: none;
    color: black;
   }

    a{
        text-decoration: none;
    }




ul li img{
    width: clamp(135px, 20vw, 235px);
    background-color: red;
}



</style>