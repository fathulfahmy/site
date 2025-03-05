function Card({ title, desc, platform, href }) {
  return (
    <div className="flex h-72 flex-col p-4 lg:h-80 lg:p-8">
      <div className="grow">
        <h3 className="mb-1">{title}</h3>
        <p>{desc}</p>
      </div>
      <div className="text-right">
        <a href={href} target="_blank">
          <div className="button">Open in {platform}</div>
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="lg:grid lg:grid-cols-12">
      <div className="border-b lg:col-span-6">
        <Card
          title="The Barter App"
          desc="Developed a platform where users can exchange services for other services, cash, or both. Built with React Native for user mobile application, Laravel for admin website, API documentation website, and REST API."
          platform="GitHub"
          href="https://github.com/fathulfahmy/the-barter-app"
        />
      </div>
      <div className="border-b lg:col-span-6 lg:border-l">
        <Card
          title="Event Management System"
          desc="Developed a web-based system to manage multiple events. Features include landing page, user profile, event registration. Built with PHP, HTML, and CSS for user registration website and admin website."
          platform="GitHub"
          href="https://github.com/fathulfahmy/event-management-system"
        />
      </div>
      <div className="max-lg:border-b lg:col-span-6">
        <Card
          title="TBS-BTS Mobile App UI/UX"
          desc="Redesigned a public transportation mobile application to enhance user experience. Designed with Figma and Google Material Design 3."
          platform="Behance"
          href="https://www.behance.net/gallery/192555099/TBS-BTS-UIUX-Redesign"
        />
      </div>
      <div className="lg:col-span-6 lg:border-l">
        <Card
          title="Lunar Keymap"
          desc="Developed a Visual Studio Code extension with over 1.5k installs to enable a keyboard-driven workflow. Features include code editor navigation, file creation, debugging and git keybindings."
          platform="GitHub"
          href="https://github.com/fathulfahmy/lunarkeymap"
        />
      </div>
    </div>
  );
}
export default Projects;
