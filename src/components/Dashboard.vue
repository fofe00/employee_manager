<template>
    <div id="dash">
        <h4>dashboard page1</h4>
      <ul class="collection with-header">
        <li class="collection-header"><h4>Employee list</h4></li>
        <li class="collection-item" v-for="employee in employees" :key="employee.employee_id">{{ employee.name }}</li>
      </ul>
        <div class="fixed-action-btn">
            <router-link to="/new" class="btn-floating btn-large red">
                <i class="bi bi-plus" style="font-size: 2rem; "></i>
            </router-link>
        </div>
    </div>
</template>

<script>
import db from './firebaseInit'
export default {
  name: 'dashboard',
  data () {
    return {
      employees: []
    }
  },
  created () {
    /* db.collection('employees').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
        console.log(doc.data())
        const data = {
          id: doc.id,
          employee_id: doc.data().employee_id,
          name: doc.data().name,
          dept: doc.data().dept,
          position: doc.data().position
        }
        this.employees.push(data)
      })
    }) */
    const listUsers = db.collection('user')
    listUsers.onSnapshot(docSnapshot => {
      const foo = []
      docSnapshot.forEach(doc => {
        foo.push({ id: doc.id, name: doc.data().name })
      })
      foo.forEach(fo => {
        console.log(fo.name)
      })
    })
    const listEmployee = db.collection('employees')
    listEmployee.onSnapshot(docSnapshot => {
      this.employees = []
      docSnapshot.forEach(doc => {
        const data = {
          id: doc.id,
          employee_id: doc.data().employee_id,
          name: doc.data().name,
          dept: doc.data().dept,
          position: doc.data().position
        }
        this.employees.push(data)
      })
    })
  }
}
</script>
