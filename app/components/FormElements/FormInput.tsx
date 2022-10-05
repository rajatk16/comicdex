import cx from 'classnames'

import type { FormInputProps } from "./types";

export const FormInput = ({
    labelFor,
    labelName,
    inputType = "text",
    inputClass,
    labelClass,
    placeholder = '',
    errorMessage,
    inputStep,
    showTextArea = false,
    textAreaRows = 4,
    wrapperClass,
    defaultInputValue,
    autoComplete
}: FormInputProps) => (
  <div className={cx("mb-6", wrapperClass)}>
    <label 
      htmlFor={labelFor ? labelFor : labelName.toLowerCase()} 
      className={cx("block mb-2 text-sm font-medium text-gray-900", labelClass)}
    >
      {labelName}
    </label>
    {showTextArea ? (
      <textarea
        id={labelFor}
        name={labelFor}
        rows={textAreaRows}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        placeholder={placeholder}
      ></textarea>
    ): (
        <input 
          autoComplete={autoComplete}
          defaultValue={defaultInputValue}
          type={inputType}
          id={labelFor} 
          name={labelFor} 
          className={cx("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5", inputClass)}
          placeholder={placeholder}
          step={inputStep ?? inputStep}
        />
    )}
    {errorMessage && <p className="mt-2 text-red-500 text-xs">{errorMessage}</p>}
  </div>
)