module.exports = function (eleventyConfig) {
  eleventyConfig.setServerOptions({
    // Default values are shown:

    // Whether the live reload snippet is used
    liveReload: true,

    // Whether DOM diffing updates are applied where possible instead of page reloads
    domDiff: true,

    // The starting port number
    // Will increment up to (configurable) 10 times if a port is already in use.
    port: 8080,

    // Additional files to watch that will trigger server updates
    // Accepts an Array of file paths or globs (passed to `chokidar.watch`).
    // Works great with a separate bundler writing files to your output folder.
    // e.g. `watch: ["_site/**/*.css"]`
    watch: [],

    // Show local network IP addresses for device testing
    showAllHosts: true,

    // Use a local key/certificate to opt-in to local HTTP/2 with https
    https: {
      // key: "./localhost.key",
      // cert: "./localhost.cert",
    },

    // Change the default file encoding for reading/serving files
    encoding: "utf-8",

    // Show the dev server version number on the command line
    showVersion: false,
  });
  eleventyConfig.addPassthroughCopy('./src/assets/');
  eleventyConfig.addPassthroughCopy('./src/admin/');
  eleventyConfig.addPassthroughCopy('./src/js/');

  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/js/");

  eleventyConfig.addGlobalData("svgSrc", "/assets/svg/");
  eleventyConfig.addGlobalData("imgSrc", "/assets/img/");
  eleventyConfig.addGlobalData("faviconSrc", "/assets/img/favicons/");
  eleventyConfig.addGlobalData("reviewImgSrc", "/assets/img/reviews/");
  eleventyConfig.addGlobalData("localeImgSrc", "/assets/img/locations/");

  eleventyConfig.addCollection("navigation", function (collection) {
    return collection.getFilteredByTag("pages").sort((a, b) => {
      return a.data.order - b.data.order;
    });
  });

  eleventyConfig.addCollection('breweries', function (collection) {
    return collection.getFilteredByGlob('./src/locations/breweries/*.md').sort((a, b) => {
      if (a.data.name < b.data.name) return -1;
      else if (a.data.name > b.data.name) return 1;
      else return 0;
    });
  });
  
  eleventyConfig.addCollection('shops', function (collection) {
    return collection.getFilteredByGlob('./src/locations/shops/*.md').sort((a, b) => {
      if (a.data.name < b.data.name) return -1;
      else if (a.data.name > b.data.name) return 1;
      else return 0;
    });
  });

  eleventyConfig.addCollection('highRated', function (collection) {
    return collection.getFilteredByGlob('./src/reviews/*.md')
    .filter(review => review.data.rating > 7)
    .sort((a, b) => {return b.date - a.date;});
  });

  eleventyConfig.addCollection('styles', function (collection) {
    return collection.getFilteredByGlob('./src/styles/*.md').sort((a, b) => {
      if (a.data.title < b.data.title) return -1;
      else if (a.data.title > b.data.title) return 1;
      else return 0;
    });
  });

  eleventyConfig.addCollection('gotoStyles', function (collection) {
    return collection.getFilteredByGlob('./src/styles/*.md')
    .filter(style => style.data.gotoStyle === true)
    .sort((a, b) => {
      if (a.data.title < b.data.title) return -1;
      else if (a.data.title > b.data.title) return 1;
      else return 0;
    });
  });

  eleventyConfig.addFilter('filterStyle', (item, beerGroups, truncate) => {
    let review = []
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

    return (truncate ? 
      review
        .sort((a, b) => {return b.date - a.date;})
        .slice(0,3) : 
      review
        .sort((a, b) => {return b.date - a.date;})
      );
  });

  return {
    dir: {
      input: "src",
      output: "public"
    }
  }
}