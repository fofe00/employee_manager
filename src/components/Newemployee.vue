<template>
    <div id="new-employee">
        <h3>new employee page</h3>
        <div class="row">
        <form class="col s12" @submit.prevent="SaveEmployee">
          <div class="row">
            <div class="input-field col s12">
              <input id="empId" type="text" class="validate" v-model="employee.employee_id">
              <label for="empId">Matricule</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="name" type="text" class="validate" v-model="employee.name">
              <label for="name">Name</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="dept" type="text" class="validate" v-model="employee.dept">
              <label for="dept">Department</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="pos" type="text" class="validate" v-model="employee.position">
              <label for="pos">Position</label>
            </div>
          </div>
          <button class="waves-effect waves-light btn" type="submit" >Save</button>
        </form>
      </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'new-employee',
  data () {
    return {
      name: ' ',
      position: ' ',
      employee_id: ' ',
      department: ' ',
      employee: { }
    }
  },
  methods: {
    SaveEmployee (e) {
      e.preventDefault()
      db.collection('employees').add(this.employee).then(
        () => {
          // eslint-disable-next-line no-sequences,no-unused-expressions
          this.employee.employee_id = ' ',
          this.employee.position = ' ',
          this.employee.dept = ' ',
          this.employee.name = ' '
        }
      ).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
