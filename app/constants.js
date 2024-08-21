const getConfig = () => {
  return {
    cpp: {
      name: "C++",
      language: "cpp",
      value:
        "#include <iostream>\n\nint main() {\n    // Your code here\n    return 0;\n}",
    },
    c: {
      name: "C",
      language: "c",
      value:
        "#include <stdio.h>\n\nint main() {\n    // Your code here\n    return 0;\n}",
    },
    javascript: {
      name: "JavaScript",
      language: "javascript",
      value: "// Your code here\nconsole.log('Hello, World!');",
    },
    python: {
      name: "Python",
      language: "python",
      value: "# Your code here\nprint('Hello, World!')",
    },
  };
};

// This defines the list of experiments
export const experimentsList = [
  {
    config: getConfig(),
    id: "expt01",
    number: 1,
    title: "Two Sum",
    description:
      "Given an array of elements, find 2 numbers whose sum is equal to 0.",
    examples: [
      { input: "[2,7,11,15]", output: "-1" },
      { input: "[2,7,-2,1]", output: "{2,-2}" },
    ],
    constraints: ["arr.size()<1e5"],
    locked: false,
    completed: false,
  },
  {
    config: getConfig(),
    id: "expt02",
    number: 2,
    title: "Add Two Numbers",
    description:
      "Given two non-empty linked lists representing two non-negative integers, add them together and return it as a linked list.",
    examples: [
      { input: "(2 -> 4 -> 3) + (5 -> 6 -> 4)", output: "(7 -> 0 -> 8)" },
      { input: "(0) + (0)", output: "(0)" },
    ],
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100].",
    ],
    locked: false,
    completed: false,
  },
  {
    config: getConfig(),
    id: "expt03",
    number: 3,
    title: "Longest Substring Without Repeating Characters",
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      { input: "abcabcbb", output: "3" },
      { input: "bbbbb", output: "1" },
      { input: "pwwkew", output: "3" },
    ],
    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces.",
    ],
    locked: false,
    completed: false,
  },
  {
    config: getConfig(),
    id: "expt04",
    number: 4,
    title: "Median of Two Sorted Arrays",
    description:
      "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
    examples: [
      { input: "[1,3], [2]", output: "2.0" },
      { input: "[1,2], [3,4]", output: "2.5" },
      { input: "[0,0], [0,0]", output: "0.0" },
      { input: "[], [1]", output: "1.0" },
      { input: "[2], []", output: "2.0" },
    ],
    constraints: [
      "nums1.length == m",
      "nums2.length == n",
      "0 <= m, n <= 1000",
      "1 <= m + n <= 2000",
      "-10^6 <= nums1[i], nums2[i] <= 10^6",
    ],
    locked: false,
    completed: true,
  },
  {
    config: getConfig(),
    id: "expt05",
    number: 5,
    title: "Longest Palindromic Substring",
    description:
      "Given a string s, return the longest palindromic substring in s.",
    examples: [
      { input: "babad", output: "bab" },
      { input: "cbbd", output: "bb" },
      { input: "a", output: "a" },
      { input: "ac", output: "a" },
    ],
    constraints: [
      "1 <= s.length <= 1000",
      "s consist of only digits and English letters.",
    ],
    locked: false,
    completed: false,
  },
  {
    config: getConfig(),
    id: "expt06",
    number: 6,
    title: "ZigZag Conversion",
    description:
      "The string 'PAYPALISHIRING' is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)",
    examples: [
      { input: "PAYPALISHIRING, 3", output: "PAHNAPLSIIGYIR" },
      { input: "PAYPALISHIRING, 4", output: "PINALSIGYAHRPI" },
      { input: "A, 1", output: "A" },
    ],
    constraints: [
      "1 <= s.length <= 1000",
      "s consists of only digits and English letters.",
    ],
    locked: false,
    completed: false,
  },
  {
    config: getConfig(),
    id: "expt07",
    number: 7,
    title: "Reverse Integer",
    description:
      "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.",
    examples: [
      { input: "123", output: "321" },
      { input: "-123", output: "-321" },
      { input: "120", output: "21" },
      { input: "0", output: "0" },
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"],
    locked: false,
    completed: false,
  },
  {
    config: getConfig(),
    id: "expt08",
    number: 8,
    title: "String to Integer (atoi)",
    description:
      "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).",
    examples: [
      { input: "42", output: "42" },
      { input: "   -42", output: "-42" },
      { input: "4193 with words", output: "4193" },
      { input: "words and 987", output: "0" },
      { input: "-91283472332", output: "-2147483648" },
    ],
    constraints: [
      "0 <= s.length <= 200",
      "s consists of English letters (lower-case and upper-case), digits, ' ', '+', '-', and '.'.",
    ],
    locked: false,
    completed: false,
  },
  {
    config: getConfig(),
    id: "expt09",
    number: 9,
    title: "Palindrome Number",
    description:
      "Given an integer x, return true if x is a palindrome integer.",
    examples: [
      { input: "121", output: "true" },
      { input: "-121", output: "false" },
      { input: "10", output: "false" },
      { input: "-101", output: "false" },
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"],
    locked: false,
    completed: false,
  },
  {
    config: getConfig(),
    id: "expt10",
    number: 10,
    title: "Regular Expression Matching",
    description:
      "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where: '.' Matches any single character. '*' Matches zero or more of the preceding element.",
    examples: [
      { input: "aa, a", output: "false" },
      { input: "aa, a*", output: "true" },
      { input: "ab, .*", output: "true" },
      { input: "aab, c*a*b", output: "true" },
      { input: "mississippi, mis*is*p*.", output: "false" },
    ],
    constraints: [
      "1 <= s.length <= 20",
      "1 <= p.length <= 30",
      "s contains only lowercase English letters.",
      "p contains only lowercase English letters, '.', and '*'.",
    ],
    locked: false,
    completed: false,
  },
];
