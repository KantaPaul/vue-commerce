<template>
  <div class="dashboard">
      <h3>Dashboard</h3>
      <div class="fixed-action-btn">
        <router-link to="/New" class="btn-floating btn-large teal lighten-2 waves-effect waves-light">
            <i class="fa fa-pencil"></i>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
