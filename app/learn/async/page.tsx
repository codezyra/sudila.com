"use client";
export default function Page() {
  return (
    <main>
      <h1>Async</h1>
    </main>
  );
}

// async - we use async to return a promise
// await - we use await to wait and handle the promise

function f1() {
  console.log("f1"); // 9. execute this line
}

function f2() {
  console.log("f2"); // 10. execute this line
}

function f3() {
  console.log("f3"); // 6. execute this line
}

function main() {
  console.log("main start"); // 2. execute this line
  setTimeout(f1, 0); // 3. add f1 to callback queue
  setTimeout(f2, 0); // 4. add f2 to callback queue
  f3(); // 5. start to execute f3 from start of first line of f3
  console.log("main end"); // 7. execute this line after f3
}

main(); // 1. first call stack have this and start to execute from first line of main function

// in queue f1 and f2 are waiting to execute (because both have 0 ms delay if f1 have 1ms delay then f2 will execute first)
// 8. f1 start to execute
// 9. after f1 end f2 start to execute
// 11. done
