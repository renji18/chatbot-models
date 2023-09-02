import { put } from "redux-saga/effects"
import * as services from "./services.js"
import * as actions from "../actions/"

// send user message Data
export function* sendMessageSagaCall(action) {
  try {
    const response = yield services.sendDataToBackend(action.data)
    yield put(actions.recieveMessageAction(response?.data?.answer))
  } catch (error) {
    console.log(error, "sendMessageSagaCall")
  }
}
