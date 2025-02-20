<template>
    <div class="container-banner">

    
    <Carousel control>
     <CarouselInner>

        <CarouselItem>
       <CarouselItemImage
       width="200"
       height="300"
        src="/banners_index/1.png"
        
       />
      </CarouselItem>

    
      <CarouselItem>
       <CarouselItemImage
       width="200"
       height="300"
        src="/banners_index/2.png"
        
       />
      </CarouselItem>

      <CarouselItem>
       <CarouselItemImage
       width="200"
       height="300"
        src="/banners_index/3.png"
       />
      </CarouselItem>
    
     </CarouselInner>
    </Carousel>
</div>
   </template>


<style scoped>

.container-banner{
    width: 100%;
    height: 360px;
    display: flex;
    align-items: end;
 
   
}

img{
    border-radius: 15px;
}

</style>
   

   