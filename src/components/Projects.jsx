function Item({ title, desc, platform, href }) {
  return (
    <div className="flex h-72 flex-col p-4 md:h-80 md:p-8">
      <div className="grow">
        <h3 className="pb-1">{title}</h3>
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
    <div className="md:grid md:grid-cols-12">
      <div className="border-b md:col-span-6">
        <Item
          title="Tournament Management System"
          desc="Developed a web-based event registration and administration platform to eliminate traditional paper-based process."
          platform="GitHub"
          href="https://github.com/fathulfahmy/event-management"
        />
      </div>
      <div className="border-b md:col-span-6 md:border-l">
        <Item
          title="TBS-BTS Mobile App UI/UX"
          desc="Redesigned UI/UX of an existing mobile app based on Google Material Design 3 principles."
          platform="Behance"
          href="https://www.behance.net/gallery/192555099/TBS-BTS-UIUX-Redesign"
        />
      </div>
      <div className="max-md:border-b md:col-span-6">
        <Item
          title="Min Keyboard Tester"
          desc="Developed a web-application for detecting keypress to aid users in testing keyboard functionalities by providing visual and audio feedback."
          platform="Browser"
          href="https://minkeyboardtester.netlify.app"
        />
      </div>
      <div className="md:col-span-6 md:border-l">
        <Item
          title="Lunar Keymap"
          desc="Developed a Visual Studio Code extension replicating LunarVim keybindings to enable efficient keyboard-driven workflow for developers."
          platform="GitHub"
          href="https://github.com/fathulfahmy/lunarkeymap"
        />
      </div>
    </div>
  );
}
export default Projects;
