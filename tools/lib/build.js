import "colors";
import fsp from "fs-promise";
import buildBabel from "../buildBabel";
import { exec } from "../exec";
import { srcRoot, libRoot } from "../constants";

export default function BuildCommonJs() {
  console.log("Building: ".cyan + "npm module".green);

  return exec(`rimraf ${libRoot}`)
    .then(() => fsp.mkdirs(libRoot))
    .then(() => buildBabel(srcRoot, libRoot))
    .then(() => console.log("Built: ".cyan + "npm module".green));
}
