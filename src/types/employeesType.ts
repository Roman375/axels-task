const SET_EMPLOYEE = 'SET_EMPLOYEE'
const LOAD_EMPLOYEE = 'LOAD_EMPLOYEE'

export type StateType = {
  employees: Array<string>
}

export type setEmployeeActionType = {
  type: typeof SET_EMPLOYEE
  payload: Array<string>
}

export type getEmployeeActionType = {
  type: typeof LOAD_EMPLOYEE
}

export type fetchEmployeeType = {
  data: string[]
}
