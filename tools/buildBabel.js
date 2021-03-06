import { transform } from "babel-core";
import fs from "fs";
import path from "path";
import outputFileSync from "output-file-sync";

function buildContent(content, filename, destination, babelOptions = {}) {
  babelOptions.filename = filename; /* eslint no-param-reassign:"off" */
  const result = transform(content, babelOptions);
  outputFileSync(destination, result.code, { encoding: "utf8" });
}

function buildFile(filename, destination, babelOptions = {}) {
  const content = fs.readFileSync(filename, { encoding: "utf8" });
  // We only have .js files that we need to build
  if (path.extname(filename) === ".js") {
    const outputPath = path.join(destination, path.basename(filename));
    // console.log('%s => %s', filename, outputPath);
    buildContent(content, filename, outputPath, babelOptions);
  }
}

export default function buildBabel(
  folderPath,
  destination,
  babelOptions = {},
  firstFolder = true,
) {
  const stats = fs.statSync(folderPath);

  if (stats.isFile()) {
    buildFile(folderPath, destination, babelOptions);
  } else if (stats.isDirectory()) {
    const outputPath = firstFolder
      ? destination
      : path.join(destination, path.basename(folderPath));
    const files = fs
      .readdirSync(folderPath)
      .map(file => path.join(folderPath, file));
    files.forEach(filename =>
      buildBabel(filename, outputPath, babelOptions, false));
  }
}
