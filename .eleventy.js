module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addPassthroughCopy('./src/admin');

  eleventyConfig.addWatchTarget("./src/css/");

  // eleventyConfig.addCollection("navigation", function (collection) {
  //   return collection.getFilteredByTag("pages").sort((a, b) => {
  //     return a.data.order - b.data.order;
  //   });
  // });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}