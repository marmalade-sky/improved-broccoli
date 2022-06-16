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

  eleventyConfig.addCollection('highRated', function (collection) {
    return collection.getFilteredByGlob('./src/reviews/*.md')
    .filter(review => review.data.rating > 8)
    .sort((a, b) => {return b.date - a.date;})
  });

  eleventyConfig.addCollection('gotoStyles', function (collection) {
    return collection.getFilteredByGlob('./src/styles/*.md')
    .filter(style => style.data.gotoStyle === true)
  });

  eleventyConfig.addFilter('filterStyle', (item, beerGroups) => {
    let review = [];
    for (i in item) {
      let beerStyles = item[i].data.style;
      for (style in beerStyles) {
        let beerStyle = beerStyles[style].toLowerCase();
        for (group in beerGroups) {
          let beerGroup = beerGroups[group].toLowerCase();
          if (beerStyle === beerGroup && review.indexOf(item[i]) === -1) {
            review.push(item[i])
          }
        }
      }
    };
    return review;
    
    // Old fragile filter method
    // let beerFilter = item.filter(i => i.data.style.toString().toLowerCase().includes(style));
    // return beerFilter;
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}