import potrait from "../assets/potrait_sm.png";

function Section({ heading, text }) {
  return (
    <section>
      <b className="pb-1">{heading}</b>
      <p className="pb-8 lg:pb-12">{text}</p>
    </section>
  );
}

function Text() {
  return (
    <div className="p-4 lg:p-8">
      <Section
        heading="2016 - Graphic design and Linux"
        text="My journey in the tech world began during my high school years, where I found myself drawn to both graphic design and the Linux operating system. As I delved deeper into writing configurations and scripts for various components and software programs, I realized my passion for coding and decided to pursue a career in software engineering."
      />
      <Section
        heading="2022 - Open-source"
        text="In 2022, I embarked on a deeper dive into open-source development, immersing myself in different communities and making meaningful contributions. I am particularly proud of launching my own projects, LunarKeymap and catppuccin/glazewm, which have allowed me to contribute to the broader tech community in unique ways."
      />
      <Section
        heading="2024 - UI/UX design and JavaScript"
        text="Currently, my focus lies in the realms of UI/UX design, web development, and mobile application development. I find immense excitement in the ever-evolving landscape of technology and am eager to see where my journey takes me next."
      />
    </div>
  );
}

function Image() {
  return (
    <div className="border-b p-8 pb-0">
      <img
        src={potrait}
        className="mx-auto my-0 min-h-full object-contain object-bottom"
      />
    </div>
  );
}

function About() {
  return (
    <div className="lg:grid lg:grid-cols-12">
      <div className="lg:col-span-8">
        <Text />
      </div>
      <div className="max-lg:hidden lg:col-span-4 lg:border-l">
        <Image />
      </div>
    </div>
  );
}
export default About;
