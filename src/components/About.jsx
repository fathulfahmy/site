import potrait from "../assets/potrait_sm.png";

function Section({ heading, text }) {
  return (
    <section>
      <b className="mb-1">{heading}</b>
      <p className="mb-8 lg:mb-12">{text}</p>
    </section>
  );
}

function Text() {
  return (
    <div className="p-4 lg:p-8">
      <Section
        heading="Early Tech (2014 - 2021)"
        text="I started my tech journey by customizing Android OS, installing Linux, and exploring system configurations. Later, I developed design skills in Inkscape, creating logos, banners, and posters. While studying Civil and Automotive Engineering, I discovered my passion for programming through Java, which led me to shift my focus to software development."
      />
      <Section
        heading="Industry Experience (2022 - 2023)"
        text="I pursued a bachelor's degree in Computer Science (Software Engineering)(Hons.), learning C, C++, C#, Java, PHP, HTML, CSS, Laravel, .NET MAUI, Android, and more. I actively contributed to open-source projects on GitHub and interned at Webby Group Sdn Bhd, where I worked on websites using React, Vue, jQuery, Laravel, REST API, and GraphQL API."
      />
      <Section
        heading="Future Goals (2025 - Present)"
        text="For my final year project, I developed The Barter App, a platform where users can exchange services for other services, cash, or both. Built with React Native, Laravel, and REST API, receiving positive recognition. Now, I am seeking opportunities as a Full Stack/Web/Mobile Developer to contribute my skills to innovative projects."
      />
    </div>
  );
}

function Image() {
  return (
    <div className="border-b p-8 pb-0">
      <img
        src={potrait}
        className="mx-auto my-0 size-48 object-contain object-bottom"
      />
    </div>
  );
}

function About() {
  return (
    <div className="lg:grid lg:grid-cols-12">
      <div className="lg:col-span-10">
        <Text />
      </div>
      <div className="max-lg:hidden lg:col-span-2 lg:border-l">
        <Image />
      </div>
    </div>
  );
}
export default About;
