import { Hero } from "@/components/Hero";
import MDXContent from "@/components/MDXContent";
import { getPostBySlug, getPostSlugs } from "@/features/projects/api/get-posts";
import Link from "next/link";

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
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
            <img src={post.coverImage} className="w-full" />
            <Link href={post.link} className="text-lg">
              Visit Project &rarr;
            </Link>
          </div>
          <div className="prose flex flex-col gap-4 text-lg text-neutral-500">
            <MDXContent {...post.content} />
          </div>
        </div>
      </section>
    </div>
  );
}
