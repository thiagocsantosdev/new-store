<template>
<div class="container">
  <input type="text" placeholder="Pesquise aqui">
   <Icon class="icon" name="ic:outline-search"></Icon>
</div>
</template>


<style>

 .container{

    position: relative;
    display: inline-block;
    align-items: center;
    margin:0px;
   
 }

 .container input{
    padding-left: 30px;
    height: 35px;
    align-items: center;
    border-radius: 5px;
    border: 1px solid gray;
   
 }

 .container input::placeholder{
    font-family: 'Poppins';
 }


.icon{
    position: absolute;
    margin-left: -32px;
    margin-top: 5px;
    padding: 12px;
    color: gray;
}
</style>