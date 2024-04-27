import { Logo } from "../navbar";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <div className="my-10 px-12 ">
      <Separator className="my-10" />
      <div className="grid gap-x-10 gap-y-10 lg:grid-cols-2 ">
        <div className="flex flex-col justify-between gap-y-10">
          <Logo />
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <div className="text-lg font-semibold">©</div>
            <div className="text-md cursor-pointer font-semibold hover:underline">
              Wallet 2022
            </div>
            <div className="text-md cursor-pointer font-semibold hover:underline">
              Privacy policy
            </div>
            <div className="text-md cursor-pointer font-semibold hover:underline">
              Cookies policy
            </div>
            <div className="text-md cursor-pointer font-semibold hover:underline">
              Terms of use
            </div>
          </div>
        </div>
        <div className="order-first flex flex-col justify-between gap-y-10 lg:order-last">
          <div>Updates right to your Inbox</div>
          <div className="grid gap-4 sm:grid-cols-[2fr,1fr]">
            <input
              type="email"
              placeholder="Email Address"
              className="rounded-2xl bg-dark-gray px-5 py-3"
            />
            <Button variant={"purple"} size={"lg"}>
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
