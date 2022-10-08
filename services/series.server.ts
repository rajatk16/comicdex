import { db } from "./db.server";
import type { Series } from "@prisma/client";

export type { Series };
  
export const getSeries = async (options?: any) => await db.series.findMany({
  include: {
    comics: {
      take: options.comicsTake || undefined
    }
  }
});

export const getSerie = async (options?: any) => await db.series.findUnique({
  where: {
    id: options.seriesId
  },
  include: {
    comics: {
      orderBy: {
        issueNo: 'asc'
      },
      take: options.comicsTake || undefined
    }
  }
})
