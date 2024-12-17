<template>
  <div class="container">
    <HeaderCustom></HeaderCustom>
  <NuxtPage />
  <footer>
      <div class="institucional_ajuda">
        <div class="item">
       <p class="title">
      Institucional
     </p>
      <nav>
        <ul>
          <li>Quem somos</li>
          <li>Nossa loja</li>
          <li>Fale Conosco</li>
        </ul>
      </nav></div>

      <div class="item">
       <p class="title">
      Ajuda
     </p>
      <nav>
        <ul>
          <li>Política de troca</li>
          <li>Garantias</li>
          <li>Prazos entregas</li>
        </ul>
      </nav></div>
      </div>

      <div class="atendimento">
        <p class="title">
      Atendimento
     </p>
     <p class="content">
      Telefone : (71) 2137 1088
     </p>
     <div class="social">
      
     </div>
      </div>
    
      
  </footer>
  </div>
  
</template>


<style scoped>

footer{
  background-color: red;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  padding-top: 100px;
  padding-left: 20px;

}

.institucional_ajuda{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
 .title{
  color: white;
  font-family: 'Poppins';
  font-weight: bold;
  font-size: 1.1rem;
 }

 nav ul{
  display: flex;
  flex-direction: column;
  color: white;
  display: flex;

 }

 .item{
  display: flex;
  flex-direction: column;
 }

 .content{
  color: white;
 }

 .atendimento{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
 }






 


</style>