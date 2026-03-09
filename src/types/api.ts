import { MDXRemoteSerializeResult } from "next-mdx-remote";

export type Post = {
  category: string;
  slug: string;
  title: string;
  description: string;
  date: string; // ISO Date	"2015-03-25"
  coverImage: string;
  link: string;
  isFeatured: boolean;
  content: MDXRemoteSerializeResult;
};

export type PostMeta = Omit<Post, "content">;
