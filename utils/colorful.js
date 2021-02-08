// console.log(red("Error!"));

const colorNames = {
  Reset: "\x1b[0m",
  Bright: "\x1b[1m",
  Dim: "\x1b[2m",
  Underscore: "\x1b[4m",
  Blink: "\x1b[5m",
  Reverse: "\x1b[7m",
  Hidden: "\x1b[8m",

  FgBlack: "\x1b[30m",
  FgRed: "\x1b[31m",
  FgGreen: "\x1b[32m",
  FgYellow: "\x1b[33m",
  FgBlue: "\x1b[34m",
  FgMagenta: "\x1b[35m",
  FgCyan: "\x1b[36m",
  FgWhite: "\x1b[37m",

  BgBlack: "\x1b[40m",
  BgRed: "\x1b[41m",
  BgGreen: "\x1b[42m",
  BgYellow: "\x1b[43m",
  BgBlue: "\x1b[44m",
  BgMagenta: "\x1b[45m",
  BgCyan: "\x1b[46m",
  BgWhite: "\x1b[47m",
};

exports.colorsWithBackground = (color, type, background, text) => {
  // return "\033[31m" + text;
  return (
    colorNames[type] +
    colorNames["Fg" + color] +
    colorNames["Bg" + background] +
    text +
    colorNames["Reset"]
  );
};
exports.colorsWithType = (color, type, text) => {
  // return "\033[31m" + text;
  return (
    colorNames[type] + colorNames["Fg" + color] + text + colorNames["Reset"]
  );
};
exports.colors = (color, text) => {
  // return "\033[31m" + text;
  return colorNames["Fg" + color] + text + colorNames["Reset"];
};

exports.color = (text, ...params) => {
  let res = "";
  //   params.map((b, a, x) => console.log(x));

  // text color
  res += params.length > 0 ? colorNames["Fg" + params[0]] : "";
  // text type
  res +=
    params.length > 1 && colorNames[params[1]] ? colorNames[params[1]] : "";
  // text style
  res += params.length > 2 ? colorNames["Bg" + params[2]] : "";

  //   return "\033[31m" + text;
  return res + text + colorNames["Reset"];
};
