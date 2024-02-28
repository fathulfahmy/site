import useScreenSize from "./useScreenSize.js";
import potrait from "./assets/potrait_lg.png";

function Splash() {
  const screenSize = useScreenSize();

  return (
    <>
      <div id="splash" className="grid max-lg:grid-rows-12 lg:grid-cols-12">
        <div className="border-b-[1px] max-lg:row-span-6 col-span-6">
          <div
            className="min-h-[512px] flex flex-col pb-[16px] px-[16px] pt-[calc(52px+16px)] lg:px-[40px]"
            style={{ height: screenSize.height }}
          >
            <h1 className="grow text-[12vw] leading-none font-semibold">
              Fathul Fahmy
            </h1>
            <div className="text-xl lg:text-2xl">
              Student . Developer . Designer .
            </div>
          </div>
        </div>
        <div className="border-b-[1px] lg:border-l-[1px] max-lg:row-span-6 col-span-6 ">
          <div
            className="flex flex-col justify-end min-h-[512px] w-full"
            style={{ height: screenSize.height }}
          >
            <img src={potrait} className="object-contain max-h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Splash;
