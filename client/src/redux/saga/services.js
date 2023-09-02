import axios from "axios"

export async function sendDataToBackend(message) {
  const response = await axios.post("http://127.0.0.1:5000/increment", {
    message,
  })
  return response
}
