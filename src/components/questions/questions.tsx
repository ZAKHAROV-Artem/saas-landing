import Image from "next/image";
import { Button } from "../ui/button";

export default function Questions() {
  return (
    <div className="grid h-full place-content-center place-items-center gap-x-28 lg:grid-cols-2">
      <div className="my-10 max-w-md text-center lg:mt-0 lg:w-full lg:text-left">
        <h1 className="text-6xl font-semibold leading-normal">
          {`Questions? Let’s talk`}
        </h1>
        <p className="mb-16 mt-10 tracking-widest opacity-40">
          {`Contact us through our 24/7 live chat.`}
          <br />
          {`We’re always happy to help!`}
        </p>
        <Button>Get started</Button>
      </div>

      <div className="rounded-2xl">
        <Image
          src="/gif.png"
          alt="Gif"
          width={500}
          height={446}
          quality={100}
        />
      </div>
    </div>
  );
}
