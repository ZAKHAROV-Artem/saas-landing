import Image from "next/image";

export default function FeaturesItems() {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-x-20 gap-y-10 text-center ">
      <div className="grid max-w-64 place-items-center gap-3">
        <Image
          src="/cards-icon.png"
          alt="Cards icon"
          width={70}
          height={70}
          quality={100}
        />
        <h4>Customizable card</h4>
        <p className="opacity-40">
          Custom your own card for your exact incomes and expenses needs.
        </p>
      </div>
      <div className="grid max-w-64 place-items-center gap-3">
        <Image
          src="/coin-icon.png"
          alt="Coin icon"
          width={70}
          height={70}
          quality={100}
        />
        <h4>No payment fee</h4>
        <p className="opacity-40">
          Transfer your payment all over the world with no payment fee.
        </p>
      </div>
      <div className="grid max-w-64 place-items-center gap-3">
        <Image
          src="/purse-icon.png"
          alt="Purse icon"
          width={70}
          height={70}
          quality={100}
        />
        <h4>All in one place</h4>
        <p className="opacity-40">
          The right place to keep your credit and debit cards, boarding passes &
          more.
        </p>
      </div>
    </div>
  );
}
