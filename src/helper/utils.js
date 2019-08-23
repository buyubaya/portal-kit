const classNameLib = require("classnames");

export function isomorphicClassNames(styleObject, ...args) {
  const classes = [];
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (typeof arg === "string") {
      if (styleObject[arg]) {
        classes.push(styleObject[arg]);
      } else {
        classes.push(arg);
      }
    } else if (Array.isArray(arg)) {
      arg.forEach(class1 => {
        if (styleObject[class1]) {
          classes.push(styleObject[class1]);
        } else {
          classes.push(class1);
        }
      });
    } else if (typeof arg === "object") {
      Object.keys(arg).forEach(
        key => {
          if (!arg[key]) {
            return;
          }
          if (styleObject[key]) {
            classes.push(styleObject[key]);
          } else {
            classes.push(key);
          }
        },
        this,
      );
    }
  }

  return classNameLib(classes);
}

export function multiClass(...classes) {
  return classes.length > 0 ? classes.join(" ") : "";
}

export function multipleClassName(...classNames) {
  const classes = [];
  if (classNames) {
    classNames.forEach(className => {
      classes.push(className);
    });
  }
  return classes.join(" ");
}
