<template>
  <div id="app">
    <my-navbar></my-navbar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    'my-navbar': Navbar
  }
}
</script>

<style>

</style>
