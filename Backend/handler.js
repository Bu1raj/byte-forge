const { exec } = require('child_process');
const fs = require('fs');

const executePythonCode = (code, input) => {
  return new Promise((resolve, reject) => {
    const filename = 'temp.py';
    fs.writeFileSync(filename, code);

    exec(`echo "${input}" | python ${filename}`, (error, stdout, stderr) => {
      fs.unlinkSync(filename);
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout.trim());
      }
    });
  });
};

const executeCCode = (code, input) => {
  return new Promise((resolve, reject) => {
    const filename = 'temp.c';
    const output = 'temp_c';
    fs.writeFileSync(filename, code);

    exec(`gcc ${filename} -o ${output}`, (error, stdout, stderr) => {
      if (error) {
        fs.unlinkSync(filename);
        reject(stderr);
      } else {
        exec(`echo "${input}" | ./${output}`, (runError, runStdout, runStderr) => {
          fs.unlinkSync(filename);
          fs.unlinkSync(output);
          if (runError) {
            reject(runStderr);
          } else {
            resolve(runStdout.trim());
          }
        });
      }
    });
  });
};

const executeCppCode = (code, input) => {
  return new Promise((resolve, reject) => {
    const filename = 'temp.cpp';
    const output = 'temp_cpp';
    fs.writeFileSync(filename, code);

    exec(`g++ ${filename} -o ${output}`, (error, stdout, stderr) => {
      if (error) {
        fs.unlinkSync(filename);
        reject(stderr);
      } else {
        exec(`echo "${input}" | ./${output}`, (runError, runStdout, runStderr) => {
          fs.unlinkSync(filename);
          fs.unlinkSync(output);
          if (runError) {
            reject(runStderr);
          } else {
            resolve(runStdout.trim());
          }
        });
      }
    });
  });
};

const handler = async (event) => {
  const language = event.language || 'C';
  const code = event.code || '';
  const testCases = event.testCases || [];

  const results = [];

  for (const testCase of testCases) {
    const { input, expectedOutput } = testCase;

    try {
      let actualOutput;
      if (language === 'C') {
        actualOutput = await executeCCode(code, input);
      } else if (language === 'C++') {
        actualOutput = await executeCppCode(code, input);
      } else if (language === 'python') {
        actualOutput = await executePythonCode(code, input);
      } else {
        actualOutput = "Support Coming soon :)";
      }

      const passed = actualOutput === expectedOutput;

      results.push({
        input,
        expectedOutput,
        actualOutput,
        passed,
      });

    } catch (error) {
      results.push({
        input,
        expectedOutput,
        actualOutput: null,
        error: error.toString(),
        passed: false,
      });
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(results),
  };
};

module.exports = { handler };
