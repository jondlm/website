import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const blogPosts = await getCollection("blog");

  return rss({
    title: "Chez Jon",
    description:
      "Jon de la Motte's personal blog. Some tech, some life, all Jon.",
    site: context.site,
    items: blogPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),
      link: `/website/blog/${post.slug}`,
    })),
  });
}
