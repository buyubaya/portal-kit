export default function promisify(fn) {
  return (...args) => new Promise((resolve, reject) => {
    function finish(err, result) {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    }

    fn(...args.concat(finish));
  });
}
