import { Post, PostMeta } from "@/types/api";
import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";

const contentDirectory = path.join(process.cwd(), "src/content/posts");

export function getPostSlugs(): string[] {
  return fs.readdirSync(contentDirectory).map((file) => file.replace(/\.mdx$/, ""));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  const mdxContent = await serialize(content);

  return {
    ...data,
    slug,
    content: mdxContent,
  } as Post;
}
export function getAllPosts(): PostMeta[] {
  const slugs = fs.readdirSync(contentDirectory).map((file) => file.replace(/\.mdx$/, ""));

  const posts = slugs.map((slug) => {
    const filePath = path.join(contentDirectory, `${slug}.mdx`);
    const source = fs.readFileSync(filePath, "utf8");
    const { data } = matter(source);
    return { ...data, slug } as PostMeta;
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
