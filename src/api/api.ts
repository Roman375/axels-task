import axios from 'axios'
import { fetchEmployeeType } from '../types/employeesType'
import { getOverviewsType } from '../types/overviewsType'

export const employeeAPI = {
  getEmployees(): Promise<fetchEmployeeType> {
    return axios.get(`http://api.additivasia.io/api/v1/assignment/employees`)
  },
}

export const overviewAPI = {
  getOverviews(employeeName: string): Promise<getOverviewsType> {
    return axios.get(`http://api.additivasia.io/api/v1/assignment/employees/${employeeName}`)
  },
}
