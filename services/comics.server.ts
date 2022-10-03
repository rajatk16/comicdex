import type { Comic } from "@prisma/client";
import { db } from "./db.server";

export type { Comic } from '@prisma/client';

export const getComics = () => db.comic.findMany();

export const createComic = (data: Omit<Comic, 'id' | 'createdAt' | 'updatedAt'>) => db.comic.create({
  data: {
    ...data
  }
})