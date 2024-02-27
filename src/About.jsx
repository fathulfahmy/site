function About() {
  return (
    <>
      <div className="lg:grid grid-cols-12">
        <div className="border-b-[1px] flex flex-col gap-[32px] lg:gap-[48px] py-[48px] lg:py-[64px] px-[16px] lg:px-[40px] col-span-8 ">
          <section>
            <h3 className="about__heading">2016 - Graphic design and Linux</h3>
            <p>
              My journey in the tech world began during my high school years,
              where I found myself drawn to both graphic design and the Linux
              operating system. As I delved deeper into writing configurations
              and scripts for various components and software programs, I
              realized my passion for coding and decided to pursue a career in
              software engineering.
            </p>
          </section>
          <section>
            <h3 className="about__heading">2022 - Open-source</h3>
            <p>
              In 2022, I embarked on a deeper dive into open-source development,
              immersing myself in different communities and making meaningful
              contributions. I am particularly proud of launching my own
              projects, LunarKeymap and catppuccin/glazewm, which have allowed
              me to contribute to the broader tech community in unique ways.
            </p>
          </section>
          <section>
            <h3 className="about__heading">
              2024 - UI/UX design and JavaScript
            </h3>
            <p>
              Currently, my focus lies in the realms of UI/UX design, web
              development, and mobile application development. I find immense
              excitement in the ever-evolving landscape of technology and am
              eager to see where my journey takes me next.
            </p>
          </section>
        </div>
        <div className="max-lg:hidden lg:border-l-[1px] col-span-4">Image</div>
      </div>
    </>
  );
}

export default About;
