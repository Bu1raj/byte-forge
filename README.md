Backend I/O format
The docker container accepts a JSON of the format:
{
"language": "C",
"code": "",
"testCases": [
{
"input": "test",
"expectedOutput": "test"
},
....
]
}

And returns a JSON of the format
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
