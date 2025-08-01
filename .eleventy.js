import { EleventyHtmlBasePlugin } from "@11ty/eleventy";
import EleventyNavigationPlugin from "@11ty/eleventy-navigation";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pkg from "./package.json" with { type: "json" };

import collections from "./lib/collections/index.js";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(EleventyNavigationPlugin);

  eleventyConfig.addPlugin(feedPlugin, {
    collection: {
      name: "feed",
      limit: 10,
    },
    metadata: {
      language: "en-US",
      title: pkg.name
        .split(/[\W+]/)
        .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
        .join(" "),
      subtitle: pkg.description,
      base: pkg.author.url,
      author: {
        name: pkg.author.name,
        email: pkg.author.email,
      },
    },
  });

  eleventyConfig.addPlugin(collections);

  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: "_layouts",
    },
  };
}
