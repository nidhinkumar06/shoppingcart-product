const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/product/main-es2015.js',
    './dist/product/main-es5.js',
    './dist/product/polyfills-es2015.js',
    './dist/product/polyfills-es5.js',
    './dist/product/runtime-es2015.js',
    './dist/product/runtime-es5.js'
  ]

  await fs.ensureDir('product')

  await concat(files, 'product/product.js')
  console.log('Elements got created');
})()
