<template>
  <div>
    <List :items="lists" />
    <span>Hello, world</span>
    <span v-if="employee !== null">Employee name: {{ employee.employee_name }}</span>
    <button id="fetch-employee" @click.prevent="setEmployee()">Fetch employee</button>
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
      const { data } = await this.$axios.$get('http://dummy.restapiexample.com/api/v1/employee/1')
      return data
    },
    async setEmployee() {
      const employee = await this.fetchEmployee()
      this.employee = employee
    }
  },
  components: {
    List
  }, 
}
</script>