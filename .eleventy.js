const { DateTime } = require("luxon");
const markdownFilter = require("./markdown-filter");
const sitemap = require("@quasibit/eleventy-plugin-sitemap");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(sitemap, {
        sitemap: {
            hostname: "https://www.everwash.com"
        },
    });

    eleventyConfig.addCollection("sitemap", function(collectionApi) {
        const excludedDirs = ['admin', 'netlify', 'authors', 'static'];
        return collectionApi.getAll().filter(item => {
          // Exclude items whose URL path includes any of the excluded directories
          return !excludedDirs.some(dir => item.url.includes('/' + dir + '/'));
        });
      });
      
    eleventyConfig.addPassthroughCopy('./src/img');
    eleventyConfig.addPassthroughCopy('./src/admin');
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/js');
    eleventyConfig.addPassthroughCopy('./src/about/*.html');
    eleventyConfig.addPassthroughCopy('./src/careers');
    eleventyConfig.addPassthroughCopy('./src/landers/');
    eleventyConfig.addPassthroughCopy("./src/distributors/");
    eleventyConfig.addPassthroughCopy('./src/members/*.html');
    eleventyConfig.addPassthroughCopy('./src/wash-owners/*.html');
    eleventyConfig.addPassthroughCopy('./src/EverWash-Case-Study-2022.pdf');
    eleventyConfig.addPassthroughCopy('./src/everwash-white-paper.pdf');
    eleventyConfig.addPassthroughCopy('./src/EverWash-Customer-Journey-eBook-2023.pdf');
    eleventyConfig.addPassthroughCopy('./src/omniX_CaseStudy_SalesNavigator.pdf');
    eleventyConfig.addPassthroughCopy('./src/netlify.toml');
    eleventyConfig.addPassthroughCopy('./src/robots.txt');
    eleventyConfig.addPassthroughCopy('./src/sitemap.xml');
    eleventyConfig.addPassthroughCopy('./src/apple-app-site-association.json');
    eleventyConfig.addPassthroughCopy('./src/.well-known');
    eleventyConfig.addPassthroughCopy('./src/pardot_996891.txt');
    eleventyConfig.addPassthroughCopy("./src/theresumator_helper.html");
    eleventyConfig.addPassthroughCopy("./src/ebook");
    

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    });
    eleventyConfig.addFilter("markdownFilter", markdownFilter);

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}