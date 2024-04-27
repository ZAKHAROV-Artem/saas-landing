import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};
export default function Container({ children, className }: Props) {
  return <div className={cn("container", className)}>{children}</div>;
}
