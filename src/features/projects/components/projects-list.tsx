import { Post } from "@/types/post";
import Link from "next/link";

interface ProjectsListProps {
  posts: Post[];
}

export const ProjectsList = ({ posts }: ProjectsListProps) => (
  <div className="flex flex-col gap-8">
    {posts.map((post) => (
      <Link key={post.slug} href={`/projects/${post.slug}`}>
        <div className="flex justify-between">
          <p className="text-lg xl:text-xl">{post.title}</p>
          <div className="mb-1 flex gap-1">
            <p className="bg-black p-0.5 text-white xl:text-lg">{new Date(post.date).getFullYear()}</p>
            <p className="bg-black p-0.5 text-white xl:text-lg">{post.category}</p>
          </div>
        </div>
        <img src={post.coverImage} className="w-full" alt={post.title} />
      </Link>
    ))}
  </div>
);
