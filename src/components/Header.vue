<template>
  <div class="header-container">
    <img class="header-img" src="../assets/Top.svg">
    <div class="header-text">Elegir archivos</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @media (max-width: 576px) {
    .header-container{
      position: relative;
      background-color: rgba(245, 245, 245, 0.692);
    }
    .header-img{
     height: 100px;
     width: 100%;
    }
    .header-text{
      position: absolute;
      left: 11%;
      bottom: 32%;
      color: #FFF;
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
    }
  }
  @media (min-width: 577px) {
    .header-container { 
      display: none;
    }
  }
</style>
