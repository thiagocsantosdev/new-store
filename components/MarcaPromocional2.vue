<template>
    <div class="container">
        <div class="content">
         <h4>
            <p></p>
            <p>LORENZETTI</p>
         </h4>
        </div>

        <div class="items">
        <div class="item">
            <img src="/aquastorm.png" alt="">
            <p class="preco">R$:699,90</p>
            <p class="promocional">R$:499,90</p>
            <p class="description">em até 10x sem juros</p>
        </div>
        <div class="item">
            <img src="/advanced.png" alt="">
            <p class="preco">R$:199,90</p>
            <p class="promocional">R$:159,90</p>
            <p class="description">em até 10x sem juros</p>
        </div>
        <div class="item">
            <img src="/lorenshower.png" alt="">
            <p class="preco">R$:149,90</p>
            <p class="promocional">R$:109,90</p>
            <p class="description">em até 10x sem juros</p>
        </div>
 </div>
</div>
</template>


<style scoped>

.container{
    background-color: red;
    width: 100%;
    height: 300px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 2fr ;
}


.content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-style: italic;
 
}

h4{
    color: white;
    font-size: 3rem;
    font-weight: bold;
}

.items{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.item{
    background-color: white;
    width: 260px;
    height: 260px;
    border-radius: 15px;
}

.item img{
   width: 200px;
   margin-top: -10px;
}

.preco{
    color: gray;
    text-decoration: line-through;
    padding-left: 20px;
}

.promocional{
    color: green;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 0;
    padding-left: 20px;
}
.description{
    color: #1f1f1f;
    padding-left: 20px;
    line-height: 0;
}

</style>