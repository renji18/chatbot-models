import React, {  useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { sendMessageAction } from "../redux/actions/userActions"

const Form = () => {
  const dispatch = useDispatch()
  const { message } = useSelector((state) => state?.message)
  const [value, setValue] = useState(null)

  const sendMessage = () => {
    dispatch(sendMessageAction(value))
  }

  return (
    <div className="p-10 space-y-5">
      <p>Enter a number to multiply by 100</p>
      <input
        onChange={(e) => setValue(e.target.value)}
        className="border outline-none p-2 w-full"
        type="number"
      />
      <button
        onClick={sendMessage}
        className="bg-teal-500 py-3 px-5 rounded-full text-rose-50"
      >
        Enter
      </button>

      {message && (
        <div className="text-center">
          <span>Answer is: </span>
          <span>{message}</span>
        </div>
      )}
    </div>
  )
}

export default Form
