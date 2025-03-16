module.exports = {
  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx|js)': filenames => [
    `eslint --fix ${filenames.join(' ')}`,
    `prettier --write ${filenames.join(' ')}`,
  ],
  // Prettify only Markdown and JSON files
  '**/*.(md|json)': filenames => `prettier --write ${filenames.join(' ')}`,
};
