import Image from "next/image";
import { Navbar } from "../navbar";
import { Button } from "../ui/button";
import { Container } from "../layout";

export default function Header() {
  return (
    <header className="flex h-fit flex-col lg:h-screen">
      <Navbar />
      <Container className="grow">
        <div className="grid h-full place-content-center place-items-center gap-x-28 lg:grid-cols-2">
          <div className="my-10 max-w-lg text-center lg:mt-0 lg:w-full lg:text-left">
            <h1 className="text-6xl font-semibold leading-normal">
              SaaS Landing Page Template
            </h1>
            <p className="mb-16 mt-10 tracking-widest opacity-40">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
            <Button>Get started</Button>
          </div>

          <div className="rounded-2xl bg-dark-gray">
            <Image
              src="/header.png"
              alt="Header"
              width={500}
              height={446}
              quality={100}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
