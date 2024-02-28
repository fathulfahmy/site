import typography from "./assets/text_long.png";
import potrait from "./assets/potrait_lg.png";

function Splash() {
  return (
    <div id="splash" className="grid lg:grid-cols-12">
      <div className="border-b-[1px] col-span-6">
        <div className="flex flex-col min-h-[512px] lg:h-svh px-[16px] pb-[16px] pt-[calc(52px+16px)] lg:px-[40px]">
          <div className="grow">
            <img src={typography} className="object-contain" />
          </div>
          <div className="text-xl lg:text-2xl">
            Student . Developer . Designer .
          </div>
        </div>
      </div>
      <div className="border-b-[1px] lg:border-l-[1px] col-span-6 ">
        <div className="flex flex-col justify-end min-h-[512px] lg:h-svh">
          <img src={potrait} className="object-contain max-h-full" />
        </div>
      </div>
    </div>
  );
}

export default Splash;
