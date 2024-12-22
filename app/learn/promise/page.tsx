"use client";

import { resolve } from "path";

export default function Page() {
  return (
    <main>
      <h1>Promise</h1>
    </main>
  );
}

//Promise States(Internal) can't access within the code
// 1. Pending: initial state, neither fulfilled nor rejected.
// 2. Fulfilled: meaning that the operation completed successfully.
// 3. Rejected: meaning that the operation failed.

// 4. Settled: Promise is either fulfilled or rejected.

//Promise Results
// 1. Value: The value of the operation when resolved.
// 2. Error: The error of the operation when rejected.
// 3. Undefined: The value of the operation when pending.

//Promise States(External)
// 1. Resolved: Promise is either fulfilled or rejected.
// 2. Unresolved: Promise is pending.

//Promise Methods
// 1. then(): It is used to handle the resolved state of a promise.
// 2. catch(): It is used to handle the rejected state of a promise.
// 3. finally(): It is used to handle the settled state of a promise.

let promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error("No water"));
  }, 2000);

  //   let value = " water";
  //   resolve(value);
});

const grandParentCooking = () => {
  promise
  .then()
  
  .catch(function (error) {
    console.log("Grand Parent is not cooking" + error);
  });
};

grandParentCooking();





// function x() {
//   console.log("x");
// }

// let y = function () {
//   console.log("y");
// };

// let z = () => {
//   console.log("z");
// };
