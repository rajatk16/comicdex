export type FormInputProps = {
  labelName: string;
  labelFor?: string;
  labelClass?: string;
  inputType?: string;
  inputClass?: string;
  placeholder?: string;
  errorMessage?: string | string[];
  inputStep?: number;
  showTextArea?: boolean;
  textAreaRows?: number;
  wrapperClass?: string;
  defaultInputValue?: string;
  autoComplete?: string;
}