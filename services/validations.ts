import { z } from "zod";

export const CreateComic = z.object({
  title: z.string().min(4, "Title is too short"),
  imageURL: z.string().url("This is not a URL").min(4, "Image URL is too short"),
  price: z.number().gte(0),
  description: z.string().optional(),
  artists: z.string().min(4, "This is too short"),
  writer: z.string().min(4, "This is too short"),
  series: z.string().min(4, "This is too short"),
  onSaleDate: z.string().optional(),
  issueNo: z.number().gt(0),
  pageCount: z.number().gt(0),
  starring: z.string().min(4, "This is too short"),
})