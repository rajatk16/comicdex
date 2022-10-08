import type { Comic } from "@prisma/client";
import type { ComponentPropsWithoutRef } from "react";

export type Props = ComponentPropsWithoutRef<'div'> & {
  series: {
    id: string;
    title: string;
    comics: Comic[]
  }[]
}