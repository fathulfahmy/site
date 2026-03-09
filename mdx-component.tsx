import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  img: (props) => <img {...props} className="block w-full" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
