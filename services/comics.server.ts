import type { Comic } from "@prisma/client";
import { db } from "./db.server";

export type { Comic } from '@prisma/client';

export const getComics = async (options?: any) => await db.comic.findMany();

export const createComic = async (data: Omit<Comic, 'id' | 'createdAt' | 'updatedAt'>) => await db.comic.create({
  data: {
    ...data
  }
});

export const getComicById = async (id: string) => await db.comic.findUnique({
  where: {
    id
  }
});