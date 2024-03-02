import typography from "../assets/typography.png";
import potrait from "../assets/potrait_lg.png";

function Text() {
  return (
    <div className="flex min-h-[32rem] flex-col p-4 pt-20 md:h-screen md:px-8 md:pt-20">
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
    <div id="#" className="md:grid md:grid-cols-12">
      <div className="md:col-span-6">
        <Text />
      </div>
      <div className="h-[32rem] min-h-[32rem] max-md:border-t md:col-span-6 md:h-screen md:border-l">
        <Image />
      </div>
    </div>
  );
}
export default Home;
