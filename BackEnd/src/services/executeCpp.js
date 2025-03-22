const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");

const outputPath = path.join(__dirname, "outputs");
console.log("The output path is:", outputPath);

// Create the outputs directory if it doesn't exist
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath, { recursive: true });
}

const executeCpp = (filepath) => {
  return new Promise((resolve, reject) => {
    const jobId = path.basename(filepath, ".cpp"); // Extract filename without extension
    const outPath = path.join(outputPath, `${jobId}.exe`);

    // Compile and execute the C++ program
    const command = `g++ "${filepath}" -o "${outPath}" && "${outPath}"`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        return reject({ error, stderr });
      }
      if (stderr) {
        return reject(stderr);
      }
      resolve(stdout);
    });
  });
};

module.exports = { executeCpp };
