// Requirement 1: import named and default exports from gradeUtils.js
import isPassing, { computeAverage } from './JS gradeUtils.js';

// Starter Data
const enrollers = [
  { name: "Ana Cruz", prelim: 85, midterm: 90, final: 88 },
  { name: "Bea Santos", prelim: 70, midterm: 65, final: 60 },
  { name: "Cid Ramos", prelim: 95, midterm: 92, final: 97 },
  { name: "Dex Alonzo", prelim: 60, midterm: 55, final: 50 },
  { name: "Eli Tan", prelim: 78, midterm: 80, final: 76 },
];

// Requirement 2: Promise simulating a registrar API call
const getEnrollers = () => {
  return new Promise((resolve, reject) => {
    const simulateError = false;

    setTimeout(() => {
      if (simulateError) {
        reject("Error: Unable to fetch enrollers.");
      } else {
        resolve(enrollers);
      }
    }, 1000);
  });
};
 getEnrollers()
  .then((students) => {
    students.forEach((student) => {
      const average = computeAverage(
        student.prelim,
        student.midterm,
        student.final
      );

      const status = isPassing(average) ? "PASSED" : "FAILED";

      console.log(
        `${student.name}: Average = ${average.toFixed(2)}, Status = ${status}`
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });