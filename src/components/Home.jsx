import typography from "../assets/typography.png";
import potrait from "../assets/potrait_lg.png";

function Text() {
  return (
    <div className="flex min-h-[32rem] flex-col p-4 pt-20 lg:h-full lg:px-8 lg:pt-20">
      <div className="grow pb-16">
        <img src={typography} />
      </div>
      <div className="text-xl font-extrabold tracking-tight lg:text-2xl">
        Student . Developer . Designer
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
