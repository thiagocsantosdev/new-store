<template>
    <p class="title">
        Categorias
    </p>
    <nav>
        <ul>
            <li> 
                <div class="item">
                <Icon class="icons" name="ic:baseline-attach-money"></Icon>     
                </div>
                <p>Ofertas</p>
            </li>

            <li> 
                <div class="item">
                <Icon class="icons" name="material-symbols:electric-bolt-outline-rounded"></Icon>     
                </div>
                <p>Elétrica</p>
            </li>

            <li> 
                <div class="item">
                <Icon class="icons" name="ic:baseline-water-drop"></Icon>     
                </div>
                <p>Hidráulica</p>
            </li>

            <li> 
                <div class="item">
                <Icon class="icons" name="ic:baseline-construction"></Icon>     
                </div>
                <p>Ferramentas</p>
            </li>

        
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

.item{
    display: grid;
    place-items: center;
    background-color: red;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    color: white;
}

nav ul li p{
    width: 34px;
 
}


.icons{
    font-size: 40px;
}
</style>