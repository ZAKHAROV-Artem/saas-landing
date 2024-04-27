import Image from "next/image";
import { Separator } from "../ui/separator";

export default function Companies() {
  return (
    <div className="flex flex-col items-center gap-y-20">
      <Separator />
      <Image
        src="/logos.png"
        alt="Companies"
        width={931}
        height={35}
        quality={100}
      />
      <Separator />
    </div>
  );
}
