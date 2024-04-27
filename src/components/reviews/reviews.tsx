export default function Reviews() {
  return (
    <div className="flex min-h-[500px] w-full items-center justify-center rounded-2xl bg-purple p-10">
      <div className="space-y-10 md:max-w-2xl lg:max-w-3xl">
        <div className="text-center text-2xl font-semibold text-dark-gray md:text-left">
          {`“Wallet is a great product! All of my most important information is
          there - credit cards, transit cards, boarding passes, tickets, and
          more. And I don't need to worry because it's all in one place!
          thanks!”`}
        </div>
        <div className="flex items-center gap-x-5">
          <div className="h-16 w-16 rounded-full bg-blue" />
          <div>
            <div className="text-dark-gray opacity-40">Johnny Owens</div>
            <div className="">⭐⭐⭐⭐⭐</div>
          </div>
        </div>
      </div>
    </div>
  );
}
