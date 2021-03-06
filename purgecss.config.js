module.exports = {
  content: ["public/**/*.html"],
  css: ["themes/clean/static/css/style.css"],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          // This monstrosity was taken from: https://tailwindcss.com/docs/controlling-file-size/
          return content.match(/[\w-:/]+(?<!:)/g) || [];
        }
      },
      extensions: ["html"]
    }
  ]
};
