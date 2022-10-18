const { strict } = require("assert");
const mongoose = require("mongoose");
const { stringify } = require("querystring");

mongoose
  .connect("mongodb://localhost:27017/my-students")
  .then(() => console.log("connnected to mongodb"))
  .catch((err) => console.error("Failled !"));

///// schema //
const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  dob: Date,
  entryDate: { type: Date, default: Date.now },
  passed: Boolean,
  hobbies: [String],
  parents: {
    father: String,
    mother: String,
  },
  subjects: [{ name: String, marks: { type: Number, min: 0, max: 100 } }],
});

/// MODEL ///

const Student = mongoose.model("Student", studentSchema); ///class

//// NORMAL Way to Data input//

// const student = new Student({
//   firstName: "Rezaul",
//   lastName: "Karim",
//   dob: new Date("3 december 2000"),
//   passed: true,
//   hobbies: ["coding", "football"],
//   parents: {
//     father: "ABCD",
//     mother: "EFG",
//   },
//   subjects: [
//     { name: "Math", marks: 79 },
//     { name: "Bangla", marks: 87 },
//     { name: "English", marks: 98 },
//   ],
// });

// const student1 = new Student({
//   firstName: "robi",
//   lastName: "hassan",
//   dob: "5 feb 2000",
//   passed: true,
//   hobbies: ["Cricket", "Hocky"],
//   parents: {
//     father: "cow",
//     mother: "egg",
//   },
//   subjects: [
//     { name: "Math", marks: 44 },
//     { name: "Bangla", marks: 43 },
//     { name: "English", marks: 56 },
//   ],
// });
// student.save().then((data) => console.log(data))
// student1.save().then((data) => console.log(data));

// CRUD OPERATOIN
///// Async Await function

////////// C === CREATE

async function createStudent() {
  const student = new Student({
    firstName: "Niloy",
    lastName: "dev",
    dob: new Date("3 december 2000"),
    passed: true,
    hobbies: ["coding", "football"],
    parents: {
      father: "ABCD",
      mother: "EFG",
    },
    subjects: [
      { name: "Math", marks: 79 },
      { name: "Bangla", marks: 87 },
      { name: "English", marks: 98 },
    ],
  });

  try {
    const data = await student.save();
    console.log(data);
  } catch (error) {
    console.log(err._message);
  }
}
// createStudent();

/// CRUD ---R--> READ

async function readStudents() {}
