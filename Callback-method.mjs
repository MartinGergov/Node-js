import { writeFile } from "node:fs";

writeFile("message.txt", "Hello there! How are you?", "utf8", (error) => {
  if (error) {
    console.error(error);
  }
  console.log("The file has been saved!");
});
