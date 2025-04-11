console.log("logging...");
console.clear();

// log level -> to log errors in log file
console.log("log"); // for development
console.info("info"); // for important info
console.warn("warn"); // 경보
console.error("error"); // 심각한 에러, user error, system error

// assert: checks if a condition is true.
// only print a log when the condition is false.
console.assert(2 === 3, "not same!");
console.assert(2 === 2, "same!");

// print object
const student = { name: "gyuri", age: 30, company: { name: "Gyuri company" } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 1 });

// measuring time
console.time("for loop");
for (let i = 0; i < 10; i++) {
  i++;
}

console.timeEnd("for loop");

// counting
function a() {
  console.count("a function");
}
a();
console.countReset("a function");
a();

// trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log("f3");
  console.trace();
}
f1();
