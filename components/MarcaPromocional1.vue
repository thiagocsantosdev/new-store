<template>
    <div class="marca-promocional">

  
   <div >
    <img src="/startools2.png" alt="">
  
   </div>

   <div class="itens">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
   </div>

</div>
</template>


<style scoped>

.container{
    background-image: url('/startools2.png');
    background-repeat: no-repeat;
    height: 480px;
    background-repeat: none;
    background-size: contain;
    width: clamp(1280px, 20vw, 1280px);
}

div{
    display: flex;
    align-items: center;
    justify-content: center;
    
}

img{
    width: clamp(400px, 90vw, 1280px);
    border-radius: 15px;
    margin-bottom: 10px;
}

.itens{
    display: grid;
      gap: 10px; /* Espaçamento entre os itens */
      grid-template-columns: repeat(6, 1fr); /* 3 colunas */
      grid-template-rows: auto; /* Ajusta automaticamente as alturas */
      width:1320px;
      
      max-width: 130; /* Largura máxima do layout */   
    
  
}

.item{
    height: 200px;
    background-color: black;
    border-radius: 15px;

}

.item:nth-child(1){
    grid-column: span 1;
    background-image: url('/furadeira.png');
}
.item:nth-child(2){
    grid-column: span 2;
    background-image: url('/miniparafusadeira.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.item:nth-child(3){
    grid-column: span 3;
    background-image: url('/alicate.png');
}
.item:nth-child(4){
    grid-column: span 2;
    background-image: url('/escovarotativa.png');
}
.item:nth-child(5){
    grid-column: span 4;
    background-image: url('/pulverizador.png');
    background-repeat: no-repeat;
    background-color:#1f1f1f;
}


.marca-promocional{
    display: flex;
    flex-direction: column;
}
</style>