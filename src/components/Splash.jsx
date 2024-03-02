import typography from "../assets/text_long.png";
import potrait from "../assets/potrait_lg.png";

function Splash() {
  return (
    <div id="splash" className="lg:grid lg:grid-cols-12">
      <div className="border-b-[1px] lg:col-span-6">
        <div className="flex min-h-[512px] flex-col p-[16px] pt-[calc(52px+16px)] lg:h-svh lg:px-[40px]">
          <div className="grow">
            <img src={typography} className="max-h-full object-contain" />
          </div>
          <div className="text-xl lg:text-2xl">
            Student . Developer . Designer .
          </div>
        </div>
      </div>
      <div className="border-b-[1px] lg:col-span-6 lg:border-l-[1px] ">
        <div className="flex min-h-[512px] flex-col justify-end lg:h-svh ">
          <img src={potrait} className="max-h-full object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Splash;
