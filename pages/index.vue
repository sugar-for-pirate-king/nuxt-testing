<template>
  <div>
    <List :items="lists" />
    <span>Hello, world</span>
    <span v-if="employee !== null">Employee name: {{ employee.employee_name }}</span>
    <button id="fetch-employee" @click.prevent="fetchEmployee()">Fetch employee</button>
  </div>
</template>

<script>
import List from '~/components/list'
export default {
  name: 'RootPage',
  data(){
    return {
      employee: null,
      lists: []
    }
  },
  methods: {
    async fetchEmployee() {
      const { data } = await this.$employeeClient.show(1)
      this.employee = data.data
    },
  },
  components: {
    List
  }, 
}
</script>