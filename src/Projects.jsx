function List(props) {
  return (
    <>
      <div className="border-b-[1px] border-neutral-300 grid max-lg:gap-[64px] lg:grid-cols-12 py-[32px] lg:py-[64px] px-[16px] lg:px-[40px]">
        <div className="lg:col-span-10">
          <h3 className="font-semibold tracking-tight">{props.title}</h3>
          <p>{props.desc}</p>
        </div>
        <div className="max-lg:text-right lg:col-span-2">
          <a
            href={`${props.linkto}`}
            target="_blank"
            className="underline hover:no-underline"
          >
            Open in {props.platform}
          </a>
        </div>
      </div>
    </>
  );
}

function Projects() {
  return (
    <>
      <List
        title="Uniten Esports"
        desc="Event management system built with Bootstrap 5, PHP, and MySQL."
        platform="GitHub"
        linkto="https://github.com/fathulfahmy/event-management"
      />
      <List
        title="TBS-BTS Mobile App"
        desc="UI/UX redesign based on Material Design 3."
        platform="Behance"
        linkto="https://www.behance.net/gallery/192555099/TBS-BTS-UIUX-Redesign"
      />
      <List
        title="LunarKeymap"
        desc="Visual Studio Code keybindings for keyboard-driven code editor."
        platform="Marketplace"
        linkto="https://marketplace.visualstudio.com/items?itemName=fathulfahmy.lunarkeymap"
      />
      <List
        title="Catppuccin"
        desc="GlazeWM color theme and configuration written in YAML."
        platform="GitHub"
        linkto="https://github.com/catppuccin/glazewm"
      />
    </>
  );
}

export default Projects;
