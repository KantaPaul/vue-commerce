<template>
  <div class="navbar">
      <nav class="teal lighten-2">
        <div class="container">
            <div class="nav-wrapper">
                <ul id="nav-mobile" class="left hide-on-med-and-down">
                    <li><router-link to="/">Dashboard</router-link></li>
                    <li><router-link to="/New">New</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
