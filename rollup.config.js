// import multiEntry from "rollup-plugin-multi-entry";
import notify from 'rollup-plugin-notify';
import multiInput from 'rollup-plugin-multi-input';
import babel from 'rollup-plugin-babel';
import html from "rollup-plugin-html";
import json from '@rollup/plugin-json';
import scss from 'rollup-plugin-scss';
import copy from 'rollup-plugin-copy'
import { rollupImportMapPlugin } from "rollup-plugin-import-map";
import path from 'path';

let baseOut = 'example/dist';
export default {
  input: 'src/**/**/*.js',
  plugins: [scss({
    // include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
    output: path.join(baseOut, "/css/style.css"),
    failOnError: true,
    // Import library as global use all scss
    // prefix: `@import "src/base/flexbox.scss";`
  }), notify(), babel({
    babelrc: false,
    "presets": [["@babel/env"], ["minify", {
      "builtIns": false
    }]],
    "plugins": ["@babel/plugin-syntax-dynamic-import", ["module-resolver", {
      "root": ["./src"],
      "alias": {
        "guest": "./src/guest"
      }
    }]]
  }),
  copy({
    targets: [
      { src: 'import-map.json', dest: path.join(baseOut) },
      { src: ['system'], dest: path.join(baseOut) }
    ]
  })
    , multiInput(), html(), json()],
  output: {
    dir: path.join(baseOut),
    format: 'system',
    sourcemap: true,
  }
}
