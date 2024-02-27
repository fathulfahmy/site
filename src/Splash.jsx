function Splash() {
  return (
    <>
      <div
        id="splash"
        className="min-h-[512px] h-dvh pt-[52px] grid max-lg:grid-rows-12 lg:grid-cols-12"
      >
        <div className="border-b-[1px] row-span-6 col-span-6">
          <div className="flex flex-col h-full py-[16px] px-[16px] lg:px-[40px]">
            <h1 className="grow text-[12vw] leading-none font-semibold">
              Fathul Fahmy
            </h1>
            <div className="text-xl lg:text-2xl">
              Student . Developer . Designer .
            </div>
          </div>
        </div>
        <div className="border-b-[1px] lg:border-l-[1px] row-span-6 col-span-6 "></div>
      </div>
    </>
  );
}

export default Splash;
