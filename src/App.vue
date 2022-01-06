<template>
  <Card  
    :img="'https://i.imgur.com/t2ykXfv.jpg'"
    :link="'https://www.instagram.com/p/BloI_FblUVy/'"
  />
</template>   

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card
  }
}
</script>

<style lang="scss">
  #app{
    height: 100%;
    width: 100%;
    //
    background-color: #8EC5FC;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);

  }

  html,body{
    height: 100%; margin: 0; padding: 0; font-size: 100%;
  }
  
</style>
