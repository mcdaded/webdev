# Base Readme

yarn create vuepress-site [sitename]

cd sitename
code .

cd docs

yarn install

yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest

npx taliwindcss init -p

config.js
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ]
  }

Need to downgrade autoprefixer
package.json
    "autoprefixer": "^9.0.0",
