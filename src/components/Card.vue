<template>
  <div class="grid" id="grid">
    <a
      class="card"
      target="_blank"
      ref="card"
      @mousemove="move"
      @mouseleave="leave"
      @mouseover="over"

      @touchstart="move"
      @touchmove="leave"
      @touchend="over"
    >
      <div class="content">
        <div class="avater">
          
        </div>
        <div class="up">
          <NameBlock />
        </div>
        <div class="down">
          <InfoBlock />
        </div>
      </div>
      <!-- <div class="content2">
      </div> -->
      <div class="reflection" ref="refl"></div>

      <img src="@/assets/black.jpg" />

    </a>
  </div>
 

</template>

<script>
import {ref, onMounted} from 'vue'
import InfoBlock from './InfoBlock.vue'
import NameBlock from './NameBlock.vue'

export default {
  name: 'Card',
  components:{
    InfoBlock,
    NameBlock
  },
  setup() {
    // const debounce = ref()
    const refl = ref()
    const card = ref()
    const touch = () =>{
      // document.addEventListener('touchstart', touch,false);
      // var event = event || window.event;
      // .getElementById("inp");
    }

    const over = () =>{ //滑鼠碰到始
      // const refl = refl.value;
      console.log("over card==",card.value, "\nrefl==",refl.value)
      refl.value.style.opacity = 1; //完全不透明
    }

    const leave = () =>{//滑鼠離開時
      // const card = card.value;
      // const refl = refl.value;
      console.log("leave card==", card.value, "\nrefl==",refl.value)
      card.value.style.transform = `perspective(500px) scale(1)`;
      refl.value.style.opacity = 0;
    }

    const move = () =>{
      // const card = card.value;
      // const refl = refl.value;
      console.log("move card==",card, "\nrefl==",refl.value)
      const relX = (event.offsetX + 1) / card.value.offsetWidth;
      const relY = (event.offsetY + 1) / card.value.offsetHeight;
      const rotY = `rotateY(${(relX - 0.5) * 10}deg)`; //控制幅度
      const rotX = `rotateX(${(relY - 0.5) * -10}deg)`;
      card.value.style.transform = `perspective(500px) scale(1.1) ${rotY} ${rotX}`;

      const lightX = this.scale(relX, 0, 1, 150, -50);
      const lightY = this.scale(relY, 0, 1, 30, -100);
      const lightConstrain = Math.min(Math.max(relY, 0.3), 0.7);
      const lightOpacity = this.scale(lightConstrain, 0.3, 1, 1, 0) * 255;
      const lightShade = `rgba(${lightOpacity}, ${lightOpacity}, ${lightOpacity}, 1)`;
      const lightShadeBlack = `rgba(0, 0, 0, 1)`;
      refl.value.style.backgroundImage = `radial-gradient(circle at ${lightX}% ${lightY}%, ${lightShade} 20%, ${lightShadeBlack})`;//HOVER時反光大小
    }

    onMounted(() => {
      console.log("onmounted=,",refl.value, card.value)
    })

    return {
      card,
      refl,
      // debounce,
      touch,
      over,
      leave,
      move,
    }
  },
  // methods: {
  //   scale: (val, inMin, inMax, outMin, outMax) =>
  //     outMin + (val - inMin) * (outMax - outMin) / (inMax - inMin)
  // }
}
</script>

<style scoped lang="scss">
    .avater {
        z-index: 5;
        position: absolute;
        top: -20px;
        left: 0;
        height: 50%;
        width: 50%;
        display: flex;
        align-content: center;
        justify-content: center;
        // background-color: aqua;
        background-image: url('../assets/my.png');
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
    }

  #grid {
    display: flex;
    grid-template-columns: repeat(auto-fill, 150px); 
    grid-column-gap: 30px; 
    grid-row-gap: 30px; 
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    /* max-width: 700px; */
    align-content: center;
  }
  #grid .card {
    margin: 0 1rem;
    background-color: #ccc;
    width: 50%;
    height: 65%;
    border-radius: 10px;
    transition: all .1s ease;
    border-radius: 3px;
    position: relative;
    z-index: 1;
    // box-shadow: 0 0 5px transparent;
    // overflow: hidden;
    cursor: pointer; 
  }
  #grid .card:hover {
    transform: scale(1.2);
    z-index: 2;
    // box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4); 
  }
  #grid .card:hover img {
    filter: grayscale(0); 
  }
  #grid .card .reflection {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    down: 0;
    top: 0;
    transition: all .1s ease;
    opacity: 0;
    mix-blend-mode: soft-light; 
  }
  #grid .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(0.1);
    transition: all .3s ease; 
  }
  .content{
    color: #fff;
    font-size: 30px;
    z-index: 2;
    height: 100%;
    width: 100%;
    display: flex;
    // flex-direction: column;
    position: absolute;
  }
  .content2{
    color: #fff;
    font-size: 30px;
    z-index: 1;
    top: -50px;
    height: 100%;
    width: 100%;
    display: flex;
    // flex-direction: column;
    position: absolute;
    background-image: url('../assets/black.jpg');
  }
  .content .up{
    height: 100%;
    width: 40%
  }
  .content .down{
    height: 100%;
    width: 100%
  }
  
  
</style>
