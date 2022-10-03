import type { ComponentPropsWithoutRef } from "react";

export type Props = ComponentPropsWithoutRef<'form'> & {
  error?: any;
  fields?: any;
}