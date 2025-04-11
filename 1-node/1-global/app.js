// import one of node modules to let VSCode this global is for use of node
const fs = require("fs");
console.log(global);
console.log(globalThis);

// global.hello = () => {
//   global.console.log("hello");
// };

// global.hello();
// hello();

globalThis.hello = () => {
  globalThis.console.log("hello");
};

globalThis.hello();
hello();
