<template>
   <div >
    <img src="/startools2.png" alt="">
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
}
</style>