<template>
    <div id="dash">
        <h1>dashboard page</h1>
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
    db.collection('employees').get().then(querySnapshot => {
      querySnapshot.forEach(doc => {
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
