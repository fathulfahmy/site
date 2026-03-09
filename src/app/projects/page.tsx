import { Hero } from "@/components/hero";
import content from "@/content/projects.json";
import { getAllPosts } from "@/features/projects/api/get-posts";
import { ProjectsList } from "@/features/projects/components/projects-list";

export default function ProjectsPage() {
  const posts = getAllPosts();
  const oldest = new Date(posts[posts.length - 1].date).getFullYear();
  const newest = new Date(posts[0].date).getFullYear() % 100;
  return (
    <div>
      <Hero>
        <h1 className="mb-1 text-xl lg:text-2xl xl:text-3xl">{content.hero.title}</h1>
        <p className="text-lg text-neutral-500 lg:text-xl xl:text-2xl">
          {content.hero.subtitle} &copy;{oldest}-{newest}
        </p>
      </Hero>
      <section className="flex flex-col lg:flex-row">
        <div className="flex-1"></div>
        <div className="flex-2">
          <ProjectsList posts={posts} />
        </div>
      </section>
    </div>
  );
}
