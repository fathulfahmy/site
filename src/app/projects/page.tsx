import { getAllPosts } from "@/features/projects/api/get-posts";
import { Project } from "@/features/projects/components/project";

export default function ProjectsPage() {
  const posts = getAllPosts();
  const oldest = new Date(posts[posts.length - 1].date).getFullYear();
  const newest = new Date(posts[0].date).getFullYear() % 100;
  return <Project posts={posts} oldest={oldest} newest={newest} />;
}
