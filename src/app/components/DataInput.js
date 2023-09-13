import React, { useRef, useState } from 'react'

const DataInput = ({ label, idHtmlFor, type = "text", name, warningText }) => {
  const inputRef = useRef();
  const [isWarningVisible, setIsWarningVisible] = useState(false);

  const showWarningHandler = () => {
    if (type === "password") {
      setIsWarningVisible(inputRef.current?.value.length < 8);
    } else if (type === "email") {
      const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      setIsWarningVisible(!emailPattern.test(inputRef.current?.value));
    }
  }
  return (
    <>
      <div className='flex flex-col text-lg sm:text-base'>
        <label htmlFor={idHtmlFor}>{label}</label>
        <input onInput={showWarningHandler} onBlur={showWarningHandler} ref={inputRef} type={type} id={idHtmlFor} name={name} className={`outline-none border rounded-lg p-3 ${isWarningVisible ? "border-red-500" : "border-gray-400"}`} />
        {isWarningVisible &&
          <span className='text-sm text-red-500 sm:text-xs'>{warningText}</span>
        }
      </div>
    </>
  )
}

export default DataInput
