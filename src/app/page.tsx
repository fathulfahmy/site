import { Home } from "@/features/home/components/home";
import { getAllPosts } from "@/features/projects/api/get-posts";

export default function HomePage() {
  const posts = getAllPosts().filter((post) => post.isFeatured);
  const oldest = new Date(posts[posts.length - 1].date).getFullYear();
  const newest = new Date(posts[0].date).getFullYear();

  return <Home posts={posts} oldest={oldest} newest={newest} />;
}
