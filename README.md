---
You can access the endpoint at http://<Azure link>:3000/process

# Code Execution Docker Container

## Overview
This Docker container is designed to execute code written in various programming languages (currently supporting C, C++, and Python) and validate the output against provided test cases. It accepts a JSON input specifying the code and test cases, and returns a JSON output with the results of the test case evaluations.

It can be viewed at the link below 
https://hub.docker.com/r/jkushal16/byteforge

## Backend I/O Format

### Input Format

The container accepts a JSON object with the following structure:

```json
{
  "language": "C",
  "code": "<your_code_here>",
  "testCases": [
    {
      "input": "test",
      "expectedOutput": "test"
    },
    ...
  ]
}
```

- **language**: (string) The programming language of the code. Supported values are `"C"`, `"C++"`, and `"python"`.
- **code**: (string) The code to be executed.
- **testCases**: (array of objects) A list of test cases to be evaluated.
  - **input**: (string) The input to be provided to the code.
  - **expectedOutput**: (string) The expected output from the code.

### Output Format

The container returns a JSON array with the results of each test case. Each element in the array is an object with the following structure:

```json
[
  {
    "input": "test",
    "expectedOutput": "test",
    "actualOutput": "test",
    "passed": true
  },
  ...
]
```

- **input**: (string) The input that was provided to the code.
- **expectedOutput**: (string) The expected output for the given input.
- **actualOutput**: (string) The actual output produced by the code.
- **passed**: (boolean) A flag indicating whether the actual output matches the expected output.

## Example

### Sample Input

```json
{
  "language": "C",
  "code": "#include <stdio.h>\nint main() { char str[100]; scanf(\"%s\", str); printf(\"%s\", str); return 0; }",
  "testCases": [
    {
      "input": "test",
      "expectedOutput": "test"
    },
    {
      "input": "example",
      "expectedOutput": "example"
    },
    {
      "input": "C_programming",
      "expectedOutput": "C_programming"
    }
  ]
}
```

### Sample Output

```json
[
  {
    "input": "test",
    "expectedOutput": "test",
    "actualOutput": "test",
    "passed": true
  },
  {
    "input": "example",
    "expectedOutput": "example",
    "actualOutput": "example",
    "passed": true
  },
  {
    "input": "C_programming",
    "expectedOutput": "C_programming",
    "actualOutput": "C_programming",
    "passed": true
  }
]
```

## How to Use
1. Build and run the Docker container.
2. Send a POST request to the container's endpoint with the input JSON.
3. The container will process the code and test cases, and return the results in the output JSON format.

## Supported Languages
- **C**
- **C++**
- **Python**

## Future Enhancements
- Add support for additional programming languages.
- Improve error handling and output formatting.

---
