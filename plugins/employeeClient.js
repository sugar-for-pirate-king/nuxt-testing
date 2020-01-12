import employee from '~/api/employee'

export default ({app}, inject) => {
  inject('employeeClient', employee)
}