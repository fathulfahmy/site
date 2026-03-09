import { Hero } from "@/components/hero";
import content from "@/content/home.json";
import { getAllPosts } from "@/features/projects/api/get-posts";
import { ProjectsList } from "@/features/projects/components/projects-list";
import Link from "next/link";

export default function HomePage() {
  const posts = getAllPosts().filter((post) => post.isFeatured);
  const oldest = new Date(posts[posts.length - 1].date).getFullYear();
  const newest = new Date(posts[0].date).getFullYear();

  return (
    <div>
      <Hero>
        <h1 className="text-xl lg:pr-14 lg:text-2xl xl:text-3xl">
          {content.hero.title}&nbsp;
          <span className="text-neutral-500">{content.hero.subtitle}</span>
        </h1>
      </Hero>

      <section className="flex flex-col pb-30 lg:flex-row">
        <div className="mb-8 flex-1 lg:mb-0">
          <p className="text-lg xl:text-xl">{content.featured.title}</p>
          <p className="text-neutral-500 xl:text-lg">
            {oldest} - {newest}
          </p>
        </div>
        <div className="flex flex-2 flex-col gap-8 lg:flex-col-reverse">
          <ProjectsList posts={posts} />
          <div className="flex justify-between text-lg xl:text-xl">
            {content.featured.cta.map((cta) => (
              <Link key={cta.href} href={cta.href} className={cta.isDesktopOnly ? "hidden lg:block" : ""}>
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col text-lg lg:flex-row xl:text-xl">
        <div className="mb-4 flex-1 lg:mb-0">
          <p>{content.about.title}</p>
          <p className="hidden text-base text-neutral-500 lg:block">{content.about.subtitle}</p>
        </div>
        <div className="flex-2">
          <div className="mb-8">
            <h2 className="lg:text-2xl">
              {content.about.description_1}&nbsp;
              <span className="text-neutral-500">{content.about.description_2}</span>
            </h2>
          </div>
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex-1">
              <p className="mb-3">Services</p>
              <div className="text-neutral-500">
                {content.services.map((service) => (
                  <p key={service}>{service}</p>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <p className="mb-3">(Worked With)</p>
              <div className="text-neutral-500">
                {content.clients.map((client) => (
                  <p key={client}>{client}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
