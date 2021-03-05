import axios from 'axios'

export const employeeAPI = {
  getEmployees(): any {
    return axios.get(`http://api.additivasia.io/api/v1/assignment/employees`)
  },
}

export const overviewAPI = {
  getOverviews(employeeName: string): any{
    return axios.get(`http://api.additivasia.io/api/v1/assignment/employees/${employeeName}`)
  },
}
