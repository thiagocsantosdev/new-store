<template>
  <HeaderCustom></HeaderCustom>
  <NuxtPage />
  <footer>

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
    
  </footer>
</template>


<style scoped>

footer{
  background-color: red;
  height: 50vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 100px;
  padding-top: 100px;
  padding-left: 20px;

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


</style>