import fs from "node:fs/promises";

try {
  fs.readFile("read.txt", "utf8").then((data) => console.log(data));
} catch (err) {
  console.error(err);
}
