import content from "@/content/footer.json";

export const Footer = () => {
  return (
    <footer className="mx-auto max-w-7xl px-3 py-10 text-lg xl:text-xl">
      <div className="mb-10 flex flex-col gap-4 lg:flex-row-reverse">
        <div className="flex-1">
          <p className="mb-0.5">{content.contact.title}</p>
          <p className="text-neutral-500">{content.contact.email}</p>
        </div>

        <div className="flex-1">
          <p className="mb-0.5">{content.made_in.title}</p>
          <a href="http://github.com/fathulfahmy/site" target="_blank" rel="noopener noreferrer">
            <p className="text-neutral-500">{content.made_in.subtitle}</p>
          </a>
        </div>

        <div className="flex-1">
          <p className="mb-0.5">{content.copyright.title}</p>
          <p className="text-neutral-500">{content.copyright.subtitle}</p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-[16dvw] leading-none font-semibold tracking-tight lg:text-[10dvw]">{content.logo}</p>
      </div>
    </footer>
  );
};
