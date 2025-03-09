import typography from "../assets/typography.png";
import potrait from "../assets/potrait_lg.png";
import resume from "../assets/Fathul Fahmy CV.pdf";

function Text() {
  return (
    <div className="flex min-h-[32rem] flex-col p-4 pt-20 lg:h-full lg:px-8">
      <div className="grow pb-16">
        <img src={typography} />

        <a href={resume} target="_blank">
          <div className="button mt-4 w-full text-center lg:w-1/2">
            Open Resume
          </div>
        </a>
      </div>

      <div className="text-xl tracking-tight lg:text-2xl">
        Graduate . Developer . Designer
      </div>
    </div>
  );
}
function Image() {
  return (
    <img
      src={potrait}
      className="mx-auto my-0 h-full object-contain object-bottom"
    />
  );
}
function Home() {
  return (
    <div id="#" className="lg:grid lg:grid-cols-12">
      <div className="lg:col-span-6">
        <Text />
      </div>
      <div className="h-[32rem] min-h-[32rem] max-lg:border-t lg:col-span-6 lg:h-screen lg:border-l">
        <Image />
      </div>
    </div>
  );
}
export default Home;
