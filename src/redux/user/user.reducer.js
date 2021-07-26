import { userTypes } from './user.types'

const INITIAL_STATE = {
  name: '',
  balance: NaN,
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SET_USER:
      const { name, balance } = action.payload
      return {
        ...state,
        name,
        balance,
      }
    case userTypes.WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload,
      }
    case userTypes.DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
      }
    default:
      return state
  }
}
