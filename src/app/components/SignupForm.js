import React from 'react'
import DataInput from './DataInput'
import Button from './Button'

const SignupForm = () => {

  return (
    <>
      <form className="space-y-3">
        <DataInput label={"Email"} name={"email"} idHtmlFor={"email"} type="email" warningText={"Please enter a valid email address"} />
        <DataInput label={"Password"} name={"password"} idHtmlFor={"password"} type="password" warningText={"Password should be at least 8 characters long"} />
        <DataInput label={"Password Confirmation"} name={"passwordConfirmation"} idHtmlFor={"passwordConfirmation"} type="password" warningText={"Password should be at least 8 characters long"} />
        <Button />
      </form>
    </>
  )
}

export default SignupForm