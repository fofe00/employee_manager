<template>
  <div class="home">
    <editemployee/>
  </div>
</template>

<script>
// @ is an alias to /src
import editemployee from '@/components/Editemployee.vue'

export default {
  name: 'Edit',
  components: {
    editemployee
  }
}
</script>
