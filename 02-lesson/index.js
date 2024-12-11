import fs from "node:fs/promises";

// const data = JSON.stringify({ name: "Anna", age: 19 }, undefined, 2);

// try {
//   fs.writeFile("write.txt", data).then(() => console.log("done"));
// } catch (err) {
//   console.error(err);
// }

// fs.appendFile("append.txt", "I love node.JS\n");
const FILE_NAME = "write.txt";
try {
  fs.readFile(FILE_NAME, "utf8")
    .then((data) => data.toUpperCase())
    .then((data) =>
      fs.writeFile(FILE_NAME, data).then(() => console.log("done"))
    );
} catch (err) {
  console.error(err);
}
