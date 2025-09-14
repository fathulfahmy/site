import { SITE_TITLE, SITE_DESCRIPTION } from "@/consts";
import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const projects = await getCollection("projects");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: projects.map((project) => ({
      ...project.data,
      link: `/projects/${project.id}/`,
    })),
  });
}
