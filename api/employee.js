import axios from 'axios'

const employee = {
  show: (id) => {
    return axios.get(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
  }
}

export default employee;