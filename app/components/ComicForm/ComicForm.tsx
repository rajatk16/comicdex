import type { Props } from "./types"

export const ComicForm = ({ error, fields, method = 'post', ...props }: Props) => {
  return (
    <form method={method} {...props}>
      <div className="mb-6">
        <label 
          htmlFor="title" 
          className="
            block 
            mb-2 
            text-sm 
            font-medium 
            text-gray-900
          "
        >
          Title
        </label>
        <input 
          type="text" 
          id="title" 
          name="title" 
          className="
            bg-gray-50 
            border 
            border-gray-300 
            text-gray-900 
            text-sm 
            rounded-lg 
            focus:ring-blue-500 
            focus:border-blue-500 
            block 
            w-full 
            p-2.5
          " 
          placeholder="Title of the Comic" 
        />
        {error?.fieldErrors?.title && <p className="text-red-500">{error.fieldErrors.title}</p>}
      </div>
      <div className="mb-6">
        <label 
          htmlFor="imageURL" 
          className="
            block 
            mb-2 
            text-sm 
            font-medium 
            text-gray-900
          "
        >
          Image URL
        </label>
        <input 
          type="text" 
          id="imageURL" 
          name="imageURL" 
          className="
            bg-gray-50 
            border 
            border-gray-300 
            text-gray-900 
            text-sm 
            rounded-lg 
            focus:ring-blue-500 
            focus:border-blue-500 
            block 
            w-full 
            p-2.5
          " 
          placeholder="Cover Image of the Comic" 
        />
        {error?.fieldErrors?.imageURL && <p className="text-red-500">{error.fieldErrors.imageURL[0]}</p>}
      </div>
      <div className="mb-6">
        <label 
          htmlFor="price" 
          className="
            block
            mb-2
            text-sm 
            font-medium 
            text-gray-900
          "
        >
          Price (USD)
        </label>
        <input 
          type="number" 
          id="price" 
          name="price" 
          step={0.01}
          className="
            bg-gray-50 
            border 
            border-gray-300 
            text-gray-900 
            text-sm 
            rounded-lg 
            focus:ring-blue-500 
            focus:border-blue-500 
            block 
            w-full 
            p-2.5
          " 
          placeholder="Price of the Comic (USD)" 
        />
        {error?.fieldErrors?.price && <p className="text-red-500">{error.fieldErrors.price}</p>}
      </div>
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          rows={4}
          className="
            block
            p-2.5
            w-full
            text-sm
            text-gray-900
            bg-gray-50
            rounded-lg
            border
            border-gray-300
            focus:ring-blue-500
            focus:border-blue-500
          "
        ></textarea>
        {error?.fieldErrors?.description && <p className="text-red-500">{error.fieldErrors.description}</p>}
      </div>
      <div className="mb-6">
        <label 
          htmlFor="artists" 
          className="
            block
            mb-2
            text-sm 
            font-medium 
            text-gray-900
          "
        >
          Artists
        </label>
        <input 
          type="text" 
          id="artists" 
          name="artists" 
          className="
            bg-gray-50 
            border 
            border-gray-300 
            text-gray-900 
            text-sm 
            rounded-lg 
            focus:ring-blue-500 
            focus:border-blue-500 
            block 
            w-full 
            p-2.5
          " 
          placeholder="Separate each name by a comma (John, James)" 
        />
        {error?.fieldErrors?.artists && <p className="text-red-500">{error.fieldErrors.artists}</p>}
      </div>
      <div className="mb-6">
        <label 
          htmlFor="writer" 
          className="
            block
            mb-2
            text-sm 
            font-medium 
            text-gray-900
          "
        >
          Writer
        </label>
        <input 
          type="text" 
          id="writer" 
          name="writer" 
          className="
            bg-gray-50 
            border 
            border-gray-300 
            text-gray-900 
            text-sm 
            rounded-lg 
            focus:ring-blue-500 
            focus:border-blue-500 
            block 
            w-full 
            p-2.5
          " 
          placeholder="Separate each name by a comma (John, James)" 
        />
        {error?.fieldErrors?.writer && <p className="text-red-500">{error.fieldErrors.writer}</p>}
      </div>
      <div className="mb-6">
        <label 
          htmlFor="series" 
          className="
            block
            mb-2
            text-sm 
            font-medium 
            text-gray-900
          "
        >
          Series
        </label>
        <input 
          type="text" 
          id="series" 
          name="series" 
          className="
            bg-gray-50 
            border 
            border-gray-300 
            text-gray-900 
            text-sm 
            rounded-lg 
            focus:ring-blue-500 
            focus:border-blue-500 
            block 
            w-full 
            p-2.5
          " 
          placeholder="Series name" 
        />
        {error?.fieldErrors?.series && <p className="text-red-500">{error.fieldErrors.series}</p>}
      </div>
      <div className="mb-6">
        <label 
          htmlFor="onSaleDate" 
          className="
            block
            mb-2
            text-sm 
            font-medium 
            text-gray-900
          "
        >
          On Sale Date
        </label>
        <input 
          type="text" 
          id="onSaleDate"
          name="onSaleDate"
          className="
            bg-gray-50 
            border 
            border-gray-300 
            text-gray-900 
            text-sm 
            rounded-lg 
            focus:ring-blue-500 
            focus:border-blue-500 
            block 
            w-full 
            p-2.5
          " 
          placeholder="On Sale Date (Eg: Jun 20 2022)" 
        />
        {error?.fieldErrors?.onSaleDate && <p className="text-red-500">{error.fieldErrors.onSaleDate}</p>}
      </div>
      <div className="mb-6">
        <label 
          htmlFor="issueNo" 
          className="
            block
            mb-2
            text-sm 
            font-medium 
            text-gray-900
          "
        >
          Issue Number
        </label>
        <input 
          type="number" 
          id="issueNo" 
          name="issueNo" 
          className="
            bg-gray-50 
            border 
            border-gray-300 
            text-gray-900 
            text-sm 
            rounded-lg 
            focus:ring-blue-500 
            focus:border-blue-500 
            block 
            w-full 
            p-2.5
          " 
          placeholder="Issue Number" 
        />
        {error?.fieldErrors?.issueNo && <p className="text-red-500">{error.fieldErrors.issueNo}</p>}
      </div>
      <div className="mb-6">
        <label 
          htmlFor="pageCount" 
          className="
            block
            mb-2
            text-sm 
            font-medium 
            text-gray-900
          "
        >
          Page Count
        </label>
        <input 
          type="number" 
          id="pageCount" 
          name="pageCount" 
          className="
            bg-gray-50 
            border 
            border-gray-300 
            text-gray-900 
            text-sm 
            rounded-lg 
            focus:ring-blue-500 
            focus:border-blue-500 
            block 
            w-full 
            p-2.5
          " 
          placeholder="Number of pages" 
        />
        {error?.fieldErrors?.pageCount && <p className="text-red-500">{error.fieldErrors.pageCount}</p>}
      </div>
      <div className="mb-6">
        <label 
          htmlFor="starring" 
          className="
            block
            mb-2
            text-sm 
            font-medium 
            text-gray-900
          "
        >
          Starring
        </label>
        <input 
          type="text" 
          id="starring" 
          name="starring" 
          className="
            bg-gray-50 
            border 
            border-gray-300 
            text-gray-900 
            text-sm 
            rounded-lg 
            focus:ring-blue-500 
            focus:border-blue-500 
            block 
            w-full 
            p-2.5
          " 
          placeholder="Main characters in the comic (separate each by a comma)" 
        />
        {error?.fieldErrors?.starring && <p className="text-red-500">{error.fieldErrors.starring}</p>}
      </div>
      <div className="mb-6 flex justify-end">
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">Submit</button>
      </div>
    </form>
  )
}