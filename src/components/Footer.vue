<template>
    <footer class="footer-container fixed-bottom d-flex justify-content-around">
      <button type="button" class="content-button btn btn-sucess btn-circle">
        <img class="footer-button" src="../assets/Back.svg">
      </button>
      <button type="button" class="content-button btn btn-sucess btn-circle">
        <img class="footer-button" src="../assets/Home.svg">
      </button>
      <button type="button" class="content-button btn btn-sucess btn-circle">
        <img class="footer-button" src="../assets/Stats.svg">
      </button>
      <button type="button" class="content-button btn btn-sucess btn-circle">
        <img class="footer-button" src="../assets/More.svg">
      </button>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .footer-container {
    background: white;
    border-top-left-radius: 40px 40px;
    border-top-right-radius: 40px 40px; 
  }
  .footer-button {
    padding: 10px 0;
  }
</style>
