import { Hero } from "@/components/Hero";
import { MDXContent } from "@/components/MDXContent";
import { getPostBySlug } from "@/features/projects/api/get-posts";
import { markdownToHtml } from "@/lib/remark/markdown-to-html";
import { notFound } from "next/navigation";

type ProjectPageParams = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage(props: ProjectPageParams) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  const date = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(post.date));

  return (
    <div>
      <Hero>
        <p className="mb-2 text-xl lg:text-2xl xl:text-3xl">{post.title}</p>
        <p className="text-lg text-neutral-500 xl:text-lg">{post.description}</p>
      </Hero>
      <section className="flex flex-col lg:flex-row">
        <div className="mb-4 flex-1 lg:mb-0">
          <p className="text-lg">{post.category}</p>
          <p className="text-neutral-500">{date}</p>
        </div>
        <div className="flex-2">
          <div className="mb-8 flex flex-col gap-8 lg:flex-col-reverse">
            <img src={post.coverImage} className="w-full" alt={post.title} />
            <a href={post.link} target="_blank" rel="noopener noreferrer" className="text-lg">
              Visit Project &rarr;
            </a>
          </div>
          <div className="prose flex flex-col gap-4 text-lg text-neutral-500">
            <MDXContent content={content} />
          </div>
        </div>
      </section>
    </div>
  );
}
