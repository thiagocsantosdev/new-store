<template>
   
    
    <p class="title">
        Categorias
    </p>
    <nav>
        <ul> <NuxtLink to="/">
            <li> 
                <div class="item">
                <Icon class="icons" name="ic:baseline-attach-money"></Icon>     
                </div>
                <p>Ofertas</p>
            </li>
        </NuxtLink>
        
           <NuxtLink to="eletrica">
            <li>
                <div class="item">
                <Icon class="icons" name="material-symbols:electric-bolt-outline-rounded"></Icon>     
                </div>
                <p>Elétrica</p>
            </li>
            </NuxtLink>
          

            <NuxtLink to="hidraulica">
            <li> 
                <div class="item">
                <Icon class="icons" name="ic:baseline-water-drop"></Icon>     
                </div>
                <p>Hidráulica</p>
            </li>
        </NuxtLink>

                <NuxtLink to="ferramenta">
            <li> 
                <div class="item">
                <Icon class="icons" name="ic:baseline-construction"></Icon>     
                </div>
                <p>Ferramentas</p>
            </li>
        </NuxtLink>

        
        </ul>
    </nav>


</template>

<style scoped>

.title{
  margin-top :30px;  
}
 
nav{

margin-left: -40px;
}

nav ul{
    display: flex;
    align-items: center;
    justify-content: space-around;
}



nav ul li{
    list-style: none;

  
}

.item{
    background-color: red;
    color: white;
    padding: 24px;
    border-radius: 5px;
 
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
    font-size: 20px;
}



</style>