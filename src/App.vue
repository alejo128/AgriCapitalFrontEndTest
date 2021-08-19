<template>
  <div>
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

<style>
  html {
    background-color: rgba(245, 245, 245, 0.692);
  }
  body{
    margin: 0;
  }
</style>
