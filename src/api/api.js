import axios from 'axios'

export const employeeAPI = {
  getEmployees() {
    return axios.get(`http://api.additivasia.io/api/v1/assignment/employees`)
  },
}

export const overviewAPI = {
  getOverviews(employeeName) {
    debugger
    return axios.get(`http://api.additivasia.io/api/v1/assignment/employees/${employeeName}`)
  },
}
