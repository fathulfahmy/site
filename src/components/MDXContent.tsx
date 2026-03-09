"use client";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote";

export default function MDXContent(props: MDXRemoteProps) {
  return <MDXRemote {...props} />;
}
