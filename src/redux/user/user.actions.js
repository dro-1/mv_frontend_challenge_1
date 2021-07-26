import { userTypes } from './user.types'

export const setUser = (user) => ({
  type: userTypes.SET_USER,
  payload: user,
})

export const withdraw = (amount) => ({
  type: userTypes.WITHDRAW,
  payload: amount,
})

export const deposit = (amount) => ({
  type: userTypes.DEPOSIT,
  payload: amount,
})
