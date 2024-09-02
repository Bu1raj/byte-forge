export const labData = {
  noStudentsInLab : 24,
  experimentsList : [
    {
      id: "expt01",
      title: "Two Sum",
      description: "Given an array of elements, find 2 numbers whose sum is equal to 0.",
      locked: false,
      noStudentsCompleted: 0,
      completed: false,
      problem:{
        testCases: [
          {
            input: "2 7 11 15",
            expectedOutput: "-1",
          },
          {
            input: "2 7 -2 1",
            expectedOutput: "2 -2",
          },
        ],
        constraints: ["arr.size()<1e5"],
      },
      quiz:{
        totalQuestions: 4,
        questions:[
          {
            id:"q01",
            question:"What is the time complexity of brute force approach of Two Sum problem?",
            options: ["O(n^2)","O(n)","O(log n)","O(1)"],
            correctAnswer: "O(n^2)",
          },
          {
            id:"q02",
            question:"What is the time complexity of Two Sum problem using hash map?",
            options: ["O(n^2)","O(n)","O(log n)","O(1)"],
            correctAnswer: "O(n)",
          },
          {
            id:"q03",
            question:"What is the time complexity of Two Sum problem using hash map?",
            options: ["O(n^2)","O(n)","O(log n)","O(1)"],
            correctAnswer: "O(n)",
          },
          {
            id:"q04",
            question:"What is the time complexity of Two Sum problem using hash map?",
            options: ["O(n^2)","O(n)","O(log n)","O(1)"],
            correctAnswer: "O(n)",
          },
        ],
      },
    },
    {
      id: "expt02",
      title: "Add Two Numbers",
      description: "Given two non-empty linked lists representing two non-negative integers, add them together and return it as a linked list.",
      locked: false,
      completed: false,
      noStudentsCompleted: 0,
      problem:{
        testCases: [
          {
            input: "2 4 3 5 6 4",
            expectedOutput: "7 0 8",
          },
          {
            input: "0 0",
            expectedOutput: "0",
          },
        ],
        constraints: ["The number of nodes in each linked list is in the range [1, 100]."],
      },
      quiz: {
        totalQuestions: 4,
        questions: [
          {
            id: "q01",
            question: "What is the best way to represent a linked list in a programming language?",
            options: [
              "Array",
              "HashMap",
              "Node-based structure",
              "Stack",
            ],
            correctAnswer: "Node-based structure",
          },
          {
            id: "q02",
            question: "What is the time complexity of adding two numbers represented as linked lists?",
            options: [
              "O(n)",
              "O(log n)",
              "O(n^2)",
              "O(1)",
            ],
            correctAnswer: "O(n)",
          },
          {
            id: "q03",
            question: "What is the maximum number of nodes that could exist in the linked lists based on the given constraints?",
            options: [
              "100",
              "10^6",
              "1",
              "1000",
            ],
            correctAnswer: "100",
          },
          {
            id: "q04",
            question: "Which data structure is most suitable for this problem?",
            options: [
              "Queue",
              "Linked List",
              "Array",
              "Stack",
            ],
            correctAnswer: "Linked List",
          },
        ],
      },
    },
    {
      id: "expt03",
      title: "Longest Substring Without Repeating Characters",
      description: "Given a string s, find the length of the longest substring without repeating characters.",
      locked: false,
      completed: false,
      noStudentsCompleted: 0,
      problem:{
        testCases: [
          {
            input: "abcabcbb",
            expectedOutput: "3",
          },
          {
            input: "bbbbb",
            expectedOutput: "1",
          },
          {
            input: "pwwkew",
            expectedOutput: "3",
          },
        ],
        constraints: [
          "0 <= s.length <= 5 * 10^4",
          "s consists of English letters, digits, symbols and spaces.",
        ],
      },
      quiz: {
        totalQuestions: 4,
        questions: [
          {
            id: "q01",
            question: "What is the time complexity of the optimal solution for finding the longest substring without repeating characters?",
            options: ["O(n^2)", "O(n)", "O(log n)", "O(n log n)"],
            correctAnswer: "O(n)",
          },
          {
            id: "q02",
            question: "Which data structure is commonly used to track characters in the substring for this problem?",
            options: ["Stack", "HashMap", "Queue", "Set"],
            correctAnswer: "Set",
          },
          {
            id: "q03",
            question: "What is the maximum possible length of the input string based on the constraints?",
            options: ["5 * 10^4", "10^6", "10^3", "5 * 10^3"],
            correctAnswer: "5 * 10^4",
          },
          {
            id: "q04",
            question: "Which sliding window technique is most suitable for solving this problem efficiently?",
            options: ["Fixed window", "Expanding and contracting window", "Two-pointer", "Binary search"],
            correctAnswer: "Expanding and contracting window",
          },
        ],
      },
    },
    {
      id: "expt04",
      title: "Median of Two Sorted Arrays",
      description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.",
      locked: false,
      completed: false,
      noStudentsCompleted: 0,
      problem : {
        testCases: [
          {
            input: "1 3 2",
            expectedOutput: "2.0",
          },
          {
            input: "1 2 3 4",
            expectedOutput: "2.5",
          },
          {
            input: "0 0 0 0",
            expectedOutput: "0.0",
          },
          {
            input: "1",
            expectedOutput: "1.0",
          },
          {
            input: "2",
            expectedOutput: "2.0",
          },
        ],
        constraints: [
          "nums1.length == m",
          "nums2.length == n",
          "0 <= m, n <= 1000",
          "1 <= m + n <= 2000",
          "-10^6 <= nums1[i], nums2[i] <= 10^6",
        ],
      },
      quiz: {
        totalQuestions: 4,
        questions: [
          {
            id: "q01",
            question: "What is the time complexity of the optimal solution for finding the median of two sorted arrays?",
            options: ["O(log(m+n))", "O(m+n)", "O(m*n)", "O(n)"],
            correctAnswer: "O(log(m+n))",
          },
          {
            id: "q02",
            question: "Which method is typically used to find the median of two sorted arrays efficiently?",
            options: ["Binary Search", "Linear Search", "Divide and Conquer", "Dynamic Programming"],
            correctAnswer: "Binary Search",
          },
          {
            id: "q03",
            question: "What is the maximum possible value for the sum of m and n based on the given constraints?",
            options: ["2000", "1000", "5000", "10^6"],
            correctAnswer: "2000",
          },
          {
            id: "q04",
            question: "What is the range of possible values for elements in nums1 and nums2?",
            options: ["-10^6 to 10^6", "-10^9 to 10^9", "-10^3 to 10^3", "-1000 to 1000"],
            correctAnswer: "-10^6 to 10^6",
          },
        ],
      },
    },
    {
      id: "expt05",
      title: "Longest Palindromic Substring",
      description: "Given a string s, return the longest palindromic substring in s.",
      locked: false,
      completed: false,
      noStudentsCompleted: 0,
      problem: {
        testCases: [
          {
            input: "babad",
            expectedOutput: "bab",
          },
          {
            input: "cbbd",
            expectedOutput: "bb",
          },
          {
            input: "a",
            expectedOutput: "a",
          },
          {
            input: "ac",
            expectedOutput: "a",
          },
        ],
        constraints: [
          "1 <= s.length <= 1000",
          "s consist of only digits and English letters.",
        ],
      },
      quiz: {
        totalQuestions: 4,
        questions: [
          {
            id: "q01",
            question: "What is the time complexity of the brute force approach for finding the longest palindromic substring?",
            options: ["O(n^2)", "O(n^3)", "O(n)", "O(log n)"],
            correctAnswer: "O(n^3)",
          },
          {
            id: "q02",
            question: "Which algorithm can be used to find the longest palindromic substring in linear time?",
            options: ["KMP Algorithm", "Manacher's Algorithm", "Rabin-Karp Algorithm", "Dynamic Programming"],
            correctAnswer: "Manacher's Algorithm",
          },
          {
            id: "q03",
            question: "What is the maximum possible length of the input string based on the constraints?",
            options: ["1000", "500", "100", "2000"],
            correctAnswer: "1000",
          },
          {
            id: "q04",
            question: "Which technique is commonly used in a dynamic programming solution for this problem?",
            options: ["Expanding around center", "Two-pointer", "Sliding window", "Greedy approach"],
            correctAnswer: "Expanding around center",
          },
        ],
      },
    },
    {
      id: "expt06",
      title: "ZigZag Conversion",
      description: "The string 'PAYPALISHIRING' is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)",
      locked: false,
      completed: false,
      noStudentsCompleted: 0,
      problem: {
        testCases: [
          {
            input: "PAYPALISHIRING 3",
            expectedOutput: "PAHNAPLSIIGYIR",
          },
          {
            input: "PAYPALISHIRING 4",
            expectedOutput: "PINALSIGYAHRPI",
          },
          {
            input: "A 1",
            expectedOutput: "A",
          },
        ],
        constraints: [
          "1 <= s.length <= 1000",
          "s consists of only digits and English letters.",
        ],
      },
      quiz: {
        totalQuestions: 4,
        questions: [
          {
            id: "q01",
            question: "What is the time complexity of the ZigZag conversion algorithm?",
            options: ["O(n)", "O(n^2)", "O(log n)", "O(n log n)"],
            correctAnswer: "O(n)",
          },
          {
            id: "q02",
            question: "How is the zigzag pattern formed for this problem?",
            options: ["Vertically down then diagonally up", "Vertically down then up", "Diagonally up then down", "Horizontally left to right"],
            correctAnswer: "Vertically down then diagonally up",
          },
          {
            id: "q03",
            question: "What is the maximum length of the string 's' based on the constraints?",
            options: ["1000", "500", "2000", "100"],
            correctAnswer: "1000",
          },
          {
            id: "q04",
            question: "What happens if the number of rows is 1 in the ZigZag conversion?",
            options: ["The string remains the same", "The string is reversed", "An error occurs", "Only the first character is returned"],
            correctAnswer: "The string remains the same",
          },
        ],
      },
    },
    {
      id: "expt07",
      title: "Reverse Integer",
      description: "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.",
      locked: false,
      completed: false,
      noStudentsCompleted: 0,
      problem: {
        testCases: [
          {
            input: "123",
            expectedOutput: "321",
          },
          {
            input: "-123",
            expectedOutput: "-321",
          },
          {
            input: "120",
            expectedOutput: "21",
          },
          {
            input: "0",
            expectedOutput: "0",
          },
        ],
        constraints: ["-2^31 <= x <= 2^31 - 1"],
      },
      quiz: {
        totalQuestions: 4,
        questions: [
          {
            id: "q01",
            question: "What is the time complexity of reversing the digits of an integer?",
            options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"],
            correctAnswer: "O(log n)",
          },
          {
            id: "q02",
            question: "What should be returned if the reversed integer exceeds the 32-bit signed integer range?",
            options: ["The reversed integer", "0", "The original integer", "An error"],
            correctAnswer: "0",
          },
          {
            id: "q03",
            question: "What is the maximum positive value for a 32-bit signed integer?",
            options: ["2^31 - 1", "2^31", "2^32 - 1", "2^32"],
            correctAnswer: "2^31 - 1",
          },
          {
            id: "q04",
            question: "How does the algorithm handle leading zeros in the reversed integer?",
            options: ["They are ignored", "They are added back", "They cause an error", "They are kept"],
            correctAnswer: "They are ignored",
          },
        ],
      },
    },
    {
      id: "expt08",
      title: "String to Integer (atoi)",
      description: "Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).",
      locked: false,
      completed: false,
      noStudentsCompleted: 0,
      problem:{
        testCases: [
          {
            input: "42",
            expectedOutput: "42",
          },
          {
            input: "-42",
            expectedOutput: "-42",
          },
          {
            input: "4193 with words",
            expectedOutput: "4193",
          },
          {
            input: "words and 987",
            expectedOutput: "0",
          },
          {
            input: "-91283472332",
            expectedOutput: "-2147483648",
          },
        ],
        constraints: [
          "0 <= s.length <= 200",
          "s consists of English letters (lower-case and upper-case), digits, ' ', '+', '-', and '.'.",
        ],
      },
      quiz: {
        totalQuestions: 4,
        questions: [
          {
            id: "q01",
            question: "What is the primary challenge in implementing the atoi function?",
            options: ["Handling spaces", "Dealing with overflow", "Converting characters to digits", "All of the above"],
            correctAnswer: "All of the above",
          },
          {
            id: "q02",
            question: "What should the atoi function return if the string contains non-numeric characters before any digits?",
            options: ["0", "The numeric part", "An error", "The full string"],
            correctAnswer: "0",
          },
          {
            id: "q03",
            question: "How does atoi handle strings that exceed the 32-bit signed integer range?",
            options: ["Returns the maximum/minimum 32-bit signed integer", "Returns 0", "Returns an error", "Returns the string as is"],
            correctAnswer: "Returns the maximum/minimum 32-bit signed integer",
          },
          {
            id: "q04",
            question: "What is the maximum length of the string 's' according to the constraints?",
            options: ["100", "200", "1000", "2147483647"],
            correctAnswer: "200",
          },
        ],
      },
    },
    {
      id: "expt09",
      title: "Palindrome Number",
      description: "Given an integer x, return true if x is a palindrome integer.",
      locked: false,
      completed: false,
      noStudentsCompleted: 0,
      problem : {
        testCases: [
          {
            input: "121",
            expectedOutput: "true",
          },
          {
            input: "-121",
            expectedOutput: "false",
          },
          {
            input: "10",
            expectedOutput: "false",
          },
          {
            input: "-101",
            expectedOutput: "false",
          },
        ],
        constraints: ["-2^31 <= x <= 2^31 - 1"],
      },

      quiz: {
        totalQuestions: 4,
        questions: [
          {
            id: "q01",
            question: "What is the time complexity of checking if an integer is a palindrome?",
            options: ["O(n)", "O(log n)", "O(1)", "O(n^2)"],
            correctAnswer: "O(log n)",
          },
          {
            id: "q02",
            question: "What is a key characteristic of a number that makes it not a palindrome?",
            options: ["Having leading zeros", "Negative sign", "Repeating digits", "All of the above"],
            correctAnswer: "Negative sign",
          },
          {
            id: "q03",
            question: "What is the maximum positive value for a 32-bit signed integer?",
            options: ["2^31 - 1", "2^31", "2^32 - 1", "2^32"],
            correctAnswer: "2^31 - 1",
          },
          {
            id: "q04",
            question: "How does the algorithm handle negative integers when checking for palindromes?",
            options: ["Considers them as non-palindromes", "Converts them to positive", "Ignores the negative sign", "Handles them as normal integers"],
            correctAnswer: "Considers them as non-palindromes",
          },
        ],
      },
    },
    {
      id: "expt10",
      title: "Regular Expression Matching",
      description: "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where: '.' Matches any single character. '*' Matches zero or more of the preceding element.",
      locked: false,
      completed: false,
      noStudentsCompleted: 0,
      problem: {
        testCases: [
          {
            input: "aa a",
            expectedOutput: "false",
          },
          {
            input: "aa a*",
            expectedOutput: "true",
          },
          {
            input: "ab .*",
            expectedOutput: "true",
          },
          {
            input: "aab c*a*b",
            expectedOutput: "true",
          },
          {
            input: "mississippi mis*is*p*.",
            expectedOutput: "false",
          },
        ],
        constraints: [
          "1 <= s.length <= 20",
          "1 <= p.length <= 30",
          "s contains only lowercase English letters.",
          "p contains only lowercase English letters, '.', and '*'.",
        ],
      },

      quiz: {
        totalQuestions: 4,
        questions: [
          {
            id: "q01",
            question: "What does the '*' character represent in regular expressions?",
            options: ["One or more of the preceding element", "Zero or one of the preceding element", "Zero or more of the preceding element", "None of the above"],
            correctAnswer: "Zero or more of the preceding element",
          },
          {
            id: "q02",
            question: "How does the '.' character function in regular expressions?",
            options: ["Matches a specific character", "Matches zero or more characters", "Matches any single character", "Matches a group of characters"],
            correctAnswer: "Matches any single character",
          },
          {
            id: "q03",
            question: "What is the maximum length for the input string 's' according to the constraints?",
            options: ["10", "20", "30", "40"],
            correctAnswer: "20",
          },
          {
            id: "q04",
            question: "What is the maximum length for the pattern 'p' according to the constraints?",
            options: ["10", "20", "30", "40"],
            correctAnswer: "30",
          },
        ],
      },
    },
  ],
}