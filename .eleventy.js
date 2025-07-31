import EleventyNavigationPlugin from "@11ty/eleventy-navigation";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyNavigationPlugin);

  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: "_layouts",
    },
  };
}
