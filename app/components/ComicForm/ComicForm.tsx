import { Button } from "../Button";
import type { Props } from "./types";
import { FormInput } from "../FormElements";

export const ComicForm = ({ error, fields, method = 'post', ...props }: Props) => {
  return (
    <form method={method} {...props} className="flex flex-col">
      <FormInput
        labelFor="title"
        labelName="Title"
        placeholder="Title of the Comic"
        errorMessage={error?.fieldErrors?.title}
      />
      <FormInput
        labelFor="imageURL"
        labelName="Image URL"
        placeholder="Cover Image of the Comic"
        errorMessage={error?.fieldErrors?.imageURL}
      />
      <FormInput
        labelFor="price"
        labelName="Price (USD)"
        inputType="number"
        inputStep={0.01}
        placeholder="Price of the Comic (USD)"
        errorMessage={error?.fieldErrors?.price}
      />
      <FormInput
        labelFor="description"
        labelName="Description"
        showTextArea
        errorMessage={error?.fieldErrors?.description}
      />
      <FormInput
        labelFor="artists"
        labelName="Artists"
        placeholder="Separate each name by a comma (John, James)"
        errorMessage={error?.fieldErrors?.artists}
      />
      <FormInput
        labelFor="writer"
        labelName="Writer"
        placeholder="Separate each name by a comma (John, James)"
        errorMessage={error?.fieldErrors?.writer}
      />
      <FormInput
        labelFor="series"
        labelName="Series"
        placeholder="Series name"
        errorMessage={error?.fieldErrors?.series}
      />
      <FormInput
        labelFor="onSaleDate"
        labelName="On Sale Date"
        placeholder="On Sale Date (Eg: Jun 20 2022)"
        errorMessage={error?.fieldErrors?.onSaleDate}
      />
      <FormInput
        labelFor="issueNo"
        labelName="Issue Number"
        inputType="number"
        placeholder="Issue Number"
        errorMessage={error?.fieldErrors?.issueNo}
      />
      <FormInput
        labelFor="pageCount"
        labelName="Number of Pages"
        inputType="number"
        placeholder="Number of pages"
        errorMessage={error?.fieldErrors?.pageCount}
      />
      <FormInput
        labelFor="starring"
        labelName="Starring"
        placeholder="Main characters in the comic (separate each by a comma)"
        errorMessage={error?.fieldErrors?.starring}
      />
      <Button className="text-center" type="submit" children="Submit" />
    </form>
  )
}