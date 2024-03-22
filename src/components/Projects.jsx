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
          title="Outfit Puzzle"
          desc="Developed a social media platform to share outfit collections and inspirations."
          platform="GitHub"
          href="https://github.com/fathulfahmy/outfit-puzzle"
        />
      </div>
      <div className="border-b lg:col-span-6 lg:border-l">
        <Card
          title="Tournament Management System"
          desc="Developed a web-based event registration and administration platform to eliminate traditional paper-based process."
          platform="GitHub"
          href="https://github.com/fathulfahmy/event-management"
        />
      </div>
      <div className="max-lg:border-b lg:col-span-6">
        <Card
          title="TBS-BTS Mobile App UI/UX"
          desc="Redesigned UI/UX of an existing mobile app based on Google Material Design 3 principles."
          platform="Behance"
          href="https://www.behance.net/gallery/192555099/TBS-BTS-UIUX-Redesign"
        />
      </div>
      <div className="lg:col-span-6 lg:border-l">
        <Card
          title="Lunar Keymap"
          desc="Developed a Visual Studio Code extension with over 700 installs, replicating LunarVim keybindings to enable efficient keyboard-driven workflow for developers."
          platform="GitHub"
          href="https://github.com/fathulfahmy/lunarkeymap"
        />
      </div>
    </div>
  );
}
export default Projects;
