module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addPassthroughCopy('./src/admin/');

  eleventyConfig.addWatchTarget("./src/css/");

  eleventyConfig.addGlobalData("svgSrc", "/assets/svg/");
  eleventyConfig.addGlobalData("imgSrc", "/assets/img/");

  eleventyConfig.addCollection("navigation", function (collection) {
    return collection.getFilteredByTag("pages").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  eleventyConfig.addCollection('latestLove', function (collection) {
    return collection.getFilteredByGlob('./src/reviews/*.md')
    .filter(review => review.data.rating > 8)
  });

  eleventyConfig.addFilter('filterStyle', (item, style) => {
    let itemStyle = item.map(i => i.data.style);
    let beerFilter = item.filter(i => i.data.style.toString().toLowerCase().includes(style));
    console.log(style, itemStyle)
    return beerFilter;
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}