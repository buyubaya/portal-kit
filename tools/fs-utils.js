import path from "path";
import fsp from "fs-promise";
import fse from "fs-extra";

export function copy(src, dest, options) {
  const localOptions = options || {};

  return Promise.all([
    fsp.stat(src),
    fsp.exists(dest)
      .then(exists => {
        if (!exists) {
          return false;
        }

        return fsp.stat(dest);
      }),
  ])
  .then(([srcStat, destStat]) => {
    let dest1 = dest;

    if (srcStat.isFile() && destStat && destStat.isDirectory()) {
      const filename = path.basename(src);
      dest1 = path.join(dest, filename);
    }

    return new Promise((resolve, reject) => {
      fse.copy(src, dest1, localOptions, err => {
        if (err) {
          reject(err);
        }

        resolve();
      });
    });
  });
}
