import "colors";
// import bower from './amd/build';
import lib from "./lib/build";
// import es from './es/build';
import dist from "./dist/build";
import { copy } from "./fs-utils";
import { distRoot, bowerRoot } from "./constants";
// import { exec } from './exec';

// export default function Build(options) {
export default function Build() {
  return Promise.all([
    lib(),
    dist(),
  ])
  .then(() => copy(distRoot, bowerRoot));
}
