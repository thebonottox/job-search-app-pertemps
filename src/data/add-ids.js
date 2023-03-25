const fs = require("fs");

// Set the file paths
const dataFilePath = "./jobs.json";
const outputFilePath = "./jobs_with_ids.json";

// Read the data from the input file
const data = fs.readFileSync(dataFilePath);

// Parse the JSON data into an array of objects
const objects = JSON.parse(data);
// console.log(objects.jobs);

// Create new objects with an added 'id' property
const objectsWithIds = objects.jobs.map((obj, index) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[key] = obj[key];
  });
  newObj.id = index + 1;
  return newObj;
});

// Convert the array of objects back to JSON
const newData = JSON.stringify(objectsWithIds);

// Write the modified JSON data to the output file
fs.writeFileSync(outputFilePath, newData);

console.log(
  `Added IDs to ${objectsWithIds.length} objects in ${dataFilePath} and wrote the result to ${outputFilePath}.`
);
