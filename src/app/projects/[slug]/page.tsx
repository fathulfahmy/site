import { Hero } from "@/components/Hero";
import { getAllPosts, getPostBySlug } from "@/features/projects/api/get-posts";
import { Post } from "@/types/api";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

type ProjectPageParams = {
  params: Promise<{
    slug: string;
  }>;
};

const ProjectPage = async (props: ProjectPageParams) => {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  const date = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(post.date));

  if (!post) {
    return notFound();
  }

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
            <MDXRemote source={post.content} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;

export async function generateMetadata(props: ProjectPageParams): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Fathul Fahmy`;

  return {
    title,
    openGraph: {
      title,
      images: [post.coverImage],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post: Post) => ({
    slug: post.slug,
  }));
}
