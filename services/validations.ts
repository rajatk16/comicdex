import { z } from "zod";

export const CreateComic = z.object({
  title: z.string().min(4, "Title is too short"),
  imageURL: z.string().url("This is not a URL").min(4, "Image URL is too short"),
  price: z.number().gte(0, "Please enter a valid number (greater than 0)"),
  description: z.string().optional(),
  artists: z.string().min(4, "Enter atlease one name"),
  writer: z.string().min(4, "Enter atleast one name"),
  series: z.string().min(4, "Enter atleast one name"),
  onSaleDate: z.string().optional(),
  issueNo: z.number().gt(0, "Please enter a valid number (greater than 0)"),
  pageCount: z.number().gt(0, "Please enter a valid number (greater than 0)"),
  starring: z.string().min(4, "Enter atleast one character name"),
})