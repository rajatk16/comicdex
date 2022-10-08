import type { Comic } from "@prisma/client"

export type Props = {
  comics: Comic[]
  title: string;
  serieId: string;
}