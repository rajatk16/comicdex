import { db } from "./db.server";

export type { Series } from '@prisma/client';
  
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
