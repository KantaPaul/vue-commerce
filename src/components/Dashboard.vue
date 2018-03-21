<template>
  <div class="dashboard">
      <ul class="collection with-header">
        <li class="collection-header"><h4>Employees</h4></li>
        <li class="collection-item" v-for="employee in employees" :key="employee.id">
          <div class="chip">{{ employee.dept }}</div> {{ employee.employee_id }} : {{ employee.name }}
          <router-link class="secondary-content" :to="{name: 'ViewEmployee', params: {id: employee.id}}">
            <i class="fa fa-eye"></i>
          </router-link>
        </li>
      </ul>
      <div class="fixed-action-btn">
        <router-link to="/New" class="btn-floating btn-large teal lighten-2 waves-effect waves-light">
            <i class="fa fa-pencil"></i>
        </router-link>
    </div>
  </div>
</template>

<script>
import db from './firebaseinit'

export default {
  name: 'Dashboard',
  data () {
    return {
      employees: []
    }
  },
  created () {
    db.collection('employee').orderBy('employee_id').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        var data = {
          'id': doc.id,
          'employee_id': doc.data().employee_id,
          'name': doc.data().name,
          'position': doc.data().position,
          'dept': doc.data().dept
        }
        this.employees.push(data)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
