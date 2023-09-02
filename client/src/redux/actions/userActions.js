import * as actionType from "./actionTypes"

// send data to backend
export const sendMessageAction = (data) => ({
  type: actionType.SEND_MESAGE,
  data,
})

// recieve data from backend
export const recieveMessageAction = (data) => ({
  type: actionType.RECIEVE_MESAGE,
  data,
})
