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
            input: "8 -8 4 7",
            expectedOutput: "-8 8",
            hide: false
          },
          {
            input: "3 7 8 4",
            expectedOutput: "-1",
            hide: true
          },
          {
            input: "-4 4 10 11",
            expectedOutput: "-4 4",
            hide: false
          },
          {
            input: "5 -3 6 9",
            expectedOutput: "-1",
            hide: true
          },
          {
            input: "14 16 -8 2",
            expectedOutput: "-1",
            hide: true
          },
          {
            input: "4 5 -5 10",
            expectedOutput: "-5 5",
            hide: false
          },
          {
            input: "2 7 -7 15",
            expectedOutput: "-7 7",
            hide: false
          },
          {
            input: "6 10 -3 9",
            expectedOutput: "-1",
            hide: true
          },
          {
            input: "-3 1 2 3",
            expectedOutput: "-3 3",
            hide: false
          },
          {
            input: "1 6 7 11",
            expectedOutput: "-1",
            hide: true
          },
          {
            input: "12 -12 3 7",
            expectedOutput: "-12 12",
            hide: false
          },
          {
            input: "1 1 2 2",
            expectedOutput: "-1",
            hide: true
          },
          {
            input: "-9 12 15 -4",
            expectedOutput: "-1",
            hide: true
          },
          {
            input: "0 4 5 6",
            expectedOutput: "-1",
            hide: true
          },
          {
            input: "13 6 0 -13",
            expectedOutput: "-13 13",
            hide: false
          },
          {
            input: "1 5 -1 6",
            expectedOutput: "-1 1",
            hide: false
          },
          {
            input: "10 15 20 25",
            expectedOutput: "-1",
            hide: true
          },
          {
            input: "-2 2 0 9",
            expectedOutput: "-2 2",
            hide: false
          },
          {
            input: "7 3 4 6",
            expectedOutput: "-1",
            hide: true
          },
          {
            input: "6 -6 9 8",
            expectedOutput: "-6 6",
            hide: false
          }
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
            input: "2 -> 4 -> 3, 5 -> 6 -> 4",
            expectedOutput: "7 -> 0 -> 8",
            hide: false
          },
          {
            input: "0, 0",
            expectedOutput: "0",
            hide: false
          },
          {
            input: "9 -> 9 -> 9, 1",
            expectedOutput: "0 -> 0 -> 0 -> 1",
            hide: false
          },
          {
            input: "2 -> 4 -> 3, 8 -> 6 -> 4",
            expectedOutput: "0 -> 1 -> 8",
            hide: true
          },
          {
            input: "7 -> 2 -> 6, 5 -> 9 -> 3",
            expectedOutput: "2 -> 2 -> 0 -> 1",
            hide: false
          },
          {
            input: "5 -> 6 -> 4, 2 -> 9 -> 6",
            expectedOutput: "7 -> 5 -> 1 -> 1",
            hide: false
          },
          {
            input: "1 -> 2 -> 3, 9 -> 8 -> 7",
            expectedOutput: "0 -> 1 -> 1 -> 1",
            hide: true
          },
          {
            input: "5 -> 2, 6 -> 3",
            expectedOutput: "1 -> 6 -> 1",
            hide: false
          },
          {
            input: "4 -> 9 -> 5, 6 -> 0 -> 5",
            expectedOutput: "0 -> 0 -> 1 -> 1",
            hide: true
          },
          {
            input: "9 -> 9, 1",
            expectedOutput: "0 -> 0 -> 1",
            hide: false
          },
          {
            input: "1 -> 8, 0",
            expectedOutput: "1 -> 8",
            hide: false
          },
          {
            input: "0, 1 -> 2 -> 3",
            expectedOutput: "1 -> 2 -> 3",
            hide: false
          },
          {
            input: "7 -> 8 -> 9, 5 -> 6 -> 4",
            expectedOutput: "2 -> 5 -> 4 -> 1",
            hide: false
          },
          {
            input: "1 -> 9, 9",
            expectedOutput: "0 -> 0 -> 1",
            hide: false
          },
          {
            input: "5, 5",
            expectedOutput: "0 -> 1",
            hide: true
          },
          {
            input: "1 -> 0 -> 0, 0 -> 0 -> 9",
            expectedOutput: "1 -> 0 -> 9",
            hide: true
          },
          {
            input: "9 -> 8 -> 7, 1 -> 1 -> 1",
            expectedOutput: "0 -> 0 -> 9",
            hide: false
          },
          {
            input: "6 -> 4 -> 5, 4 -> 6 -> 5",
            expectedOutput: "0 -> 1 -> 1 -> 1",
            hide: false
          },
          {
            input: "3 -> 3 -> 3, 7 -> 7 -> 7",
            expectedOutput: "0 -> 1 -> 1 -> 1",
            hide: false
          },
          {
            input: "1, 9 -> 9 -> 9",
            expectedOutput: "0 -> 0 -> 0 -> 1",
            hide: false
          }
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
            hide: false
          },
          {
            input: "bbbbb",
            expectedOutput: "1",
            hide: false
          },
          {
            input: "pwwkew",
            expectedOutput: "3",
            hide: false
          },
          {
            input: "",
            expectedOutput: "0",
            hide: true
          },
          {
            input: "abcdef",
            expectedOutput: "6",
            hide: false
          },
          {
            input: "aab",
            expectedOutput: "2",
            hide: false
          },
          {
            input: "dvdf",
            expectedOutput: "3",
            hide: true
          },
          {
            input: "anviaj",
            expectedOutput: "5",
            hide: false
          },
          {
            input: "tmmzuxt",
            expectedOutput: "5",
            hide: true
          },
          {
            input: "au",
            expectedOutput: "2",
            hide: false
          },
          {
            input: "a",
            expectedOutput: "1",
            hide: false
          },
          {
            input: "abcdeafgh",
            expectedOutput: "7",
            hide: false
          },
          {
            input: "bbbbbbbc",
            expectedOutput: "2",
            hide: true
          },
          {
            input: "xyzzyabc",
            expectedOutput: "4",
            hide: true
          },
          {
            input: "aabbcc",
            expectedOutput: "2",
            hide: false
          },
          {
            input: "ghijklmn",
            expectedOutput: "8",
            hide: false
          },
          {
            input: "cdd",
            expectedOutput: "2",
            hide: true
          },
          {
            input: "longestsubstring",
            expectedOutput: "8",
            hide: false
          },
          {
            input: "abbabcdbba",
            expectedOutput: "4",
            hide: true
          },
          {
            input: "abcdefghijklmnopqrstuvwxyz",
            expectedOutput: "26",
            hide: false
          }
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
            input: "[1, 3], [2]",
            expectedOutput: "2.0",
            hide: false
          },
          {
            input: "[1, 2], [3, 4]",
            expectedOutput: "2.5",
            hide: true
          },
          {
            input: "[0, 0], [0, 0]",
            expectedOutput: "0.0",
            hide: false
          },
          {
            input: "[], [1]",
            expectedOutput: "1.0",
            hide: true
          },
          {
            input: "[2], []",
            expectedOutput: "2.0",
            hide: false
          },
          {
            input: "[1, 3, 5], [2, 4, 6]",
            expectedOutput: "3.5",
            hide: true
          },
          {
            input: "[7, 8, 9], [1, 2, 3]",
            expectedOutput: "5.0",
            hide: false
          },
          {
            input: "[1], [1]",
            expectedOutput: "1.0",
            hide: true
          },
          {
            input: "[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]",
            expectedOutput: "6.5",
            hide: true
          },
          {
            input: "[100, 101], [1, 2, 3]",
            expectedOutput: "3.0",
            hide: false
          },
          {
            input: "[1, 3], [2, 7, 8, 9]",
            expectedOutput: "5.0",
            hide: true
          },
          {
            input: "[4], [1, 2, 3, 5, 6]",
            expectedOutput: "3.5",
            hide: false
          },
          {
            input: "[1, 2], [1, 2, 3]",
            expectedOutput: "2.0",
            hide: true
          },
          {
            input: "[10, 20, 30], [5, 15, 25, 35]",
            expectedOutput: "20.0",
            hide: false
          },
          {
            input: "[1, 2, 6, 8], [3, 4, 5, 7]",
            expectedOutput: "4.5",
            hide: false
          },
          {
            input: "[2, 3, 5, 8], [4, 7]",
            expectedOutput: "4.5",
            hide: true
          },
          {
            input: "[1, 5, 8], [3, 6, 9]",
            expectedOutput: "5.5",
            hide: false
          },
          {
            input: "[12, 15, 20], [10, 17]",
            expectedOutput: "15.0",
            hide: true
          },
          {
            input: "[1], [2, 3, 4]",
            expectedOutput: "2.5",
            hide: true
          },
          {
            input: "[1, 3], [2, 4, 5, 6]",
            expectedOutput: "3.5",
            hide: false
          }
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
            expectedOutput: "bab", // or "aba"
            hide: false
          },
          {
            input: "cbbd",
            expectedOutput: "bb",
            hide: true
          },
          {
            input: "a",
            expectedOutput: "a",
            hide: false
          },
          {
            input: "ac",
            expectedOutput: "a", // or "c"
            hide: true
          },
          {
            input: "racecar",
            expectedOutput: "racecar",
            hide: false
          },
          {
            input: "abba",
            expectedOutput: "abba",
            hide: true
          },
          {
            input: "abccba",
            expectedOutput: "bccb",
            hide: false
          },
          {
            input: "madamimadam",
            expectedOutput: "madamimadam",
            hide: false
          },
          {
            input: "hellolleh",
            expectedOutput: "hellolleh",
            hide: true
          },
          {
            input: "abcdefg",
            expectedOutput: "a", // or any single character
            hide: false
          },
          {
            input: "aabbaa",
            expectedOutput: "aabbaa",
            hide: true
          },
          {
            input: "aabb",
            expectedOutput: "aa", // or "bb"
            hide: false
          },
          {
            input: "xxyx",
            expectedOutput: "xxyx",
            hide: true
          },
          {
            input: "noon",
            expectedOutput: "noon",
            hide: false
          },
          {
            input: "xyzzyx",
            expectedOutput: "xyzzyx",
            hide: false
          },
          {
            input: "1234321",
            expectedOutput: "1234321",
            hide: true
          },
          {
            input: "wasitacaroracatisaw",
            expectedOutput: "wasitacaroracatisaw",
            hide: false
          },
          {
            input: "abcba",
            expectedOutput: "abcba",
            hide: true
          },
          {
            input: "aabbccddeeff",
            expectedOutput: "bb", // or "cc", "dd", "ee", "ff"
            hide: false
          },
          {
            input: "sorewasitacaroracatisores",
            expectedOutput: "sorewasitacaroracatisores",
            hide: true
          }
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
            input: "PAYPALISHIRING, 3",
            expectedOutput: "PAHNAPLSIIGY", // Zigzag pattern:
                                            // P   A   H   N
                                            // A P L S I I G
                                            // Y
            hide: false
          },
          {
            input: "PAYPALISHIRING, 4",
            expectedOutput: "PINALSIGYAHRPI", // Zigzag pattern:
                                            // P     I   N
                                            // A   L S I G
                                            // Y   H
                                            // R
            hide: true
          },
          {
            input: "A, 1",
            expectedOutput: "A",
            hide: false
          },
          {
            input: "A, 2",
            expectedOutput: "A",
            hide: true
          },
          {
            input: "ABCDEF, 3",
            expectedOutput: "AEBDFC",
            hide: false
          },
          {
            input: "HELLOZIGZAG, 5",
            expectedOutput: "HZIGAEOLG", // Zigzag pattern:
                                            // H       Z
                                            // E     I G
                                            // L   A
                                            // L
                                            // O
            hide: true
          },
          {
            input: "PYTHON, 2",
            expectedOutput: "PHOYTNA",
            hide: false
          },
          {
            input: "ZIGZAGCONVERSION, 3",
            expectedOutput: "ZCONNIEIIGR", // Zigzag pattern:
                                            // Z   C   O   N
                                            // I G R S O
                                            // V A
            hide: true
          },
          {
            input: "RACECAR, 3",
            expectedOutput: "RACEAR", // Zigzag pattern:
                                            // R   C
                                            // A E
                                            // A
            hide: false
          },
          {
            input: "LONGZIGZAGEXAMPLE, 4",
            expectedOutput: "LXEAGEOZPMILN", // Zigzag pattern:
                                            // L   E   Z
                                            // O I G A
                                            // N M
                                            // X P
            hide: true
          },
          {
            input: "TESTCASE, 5",
            expectedOutput: "TSAECTE",
            hide: false
          },
          {
            input: "ZIGZAG, 1",
            expectedOutput: "ZIGZAG",
            hide: true
          },
          {
            input: "SIMPLE, 2",
            expectedOutput: "SIEPLM",
            hide: false
          },
          {
            input: "EXTRAORDINARY, 6",
            expectedOutput: "EOTRANRIYDXA", // Zigzag pattern:
                                            // E       R
                                            // X     T   O
                                            // R   A
                                            // D
                                            // I
                                            // N
            hide: true
          },
          {
            input: "COMPLETE, 4",
            expectedOutput: "COLEMTPE",
            hide: false
          },
          {
            input: "EXCEPTIONAL, 3",
            expectedOutput: "ECAITOLSN", // Zigzag pattern:
                                            // E     A
                                            // X C T O
                                            // P   I
                                            // O   L
            hide: true
          },
          {
            input: "VARIABLE, 5",
            expectedOutput: "VAEILBR",
            hide: false
          }
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
            hide: false
          },
          {
            input: "-123",
            expectedOutput: "-321",
            hide: true
          },
          {
            input: "120",
            expectedOutput: "21",
            hide: false
          },
          {
            input: "0",
            expectedOutput: "0",
            hide: true
          },
          {
            input: "1534236469",
            expectedOutput: "0", // Reversed integer exceeds 32-bit signed integer range
            hide: false
          },
          {
            input: "-2147483648",
            expectedOutput: "0", // Reversed integer exceeds 32-bit signed integer range
            hide: true
          },
          {
            input: "10",
            expectedOutput: "1",
            hide: false
          },
          {
            input: "-10",
            expectedOutput: "-1",
            hide: true
          },
          {
            input: "2147483647",
            expectedOutput: "0", // Reversed integer exceeds 32-bit signed integer range
            hide: false
          },
          {
            input: "1000000003",
            expectedOutput: "0", // Reversed integer exceeds 32-bit signed integer range
            hide: true
          },
          {
            input: "500",
            expectedOutput: "5",
            hide: false
          },
          {
            input: "1000",
            expectedOutput: "1",
            hide: true
          },
          {
            input: "-200",
            expectedOutput: "-2",
            hide: false
          },
          {
            input: "-123456789",
            expectedOutput: "-987654321",
            hide: true
          },
          {
            input: "0",
            expectedOutput: "0",
            hide: false
          },
          {
            input: "999999999",
            expectedOutput: "0", // Reversed integer exceeds 32-bit signed integer range
            hide: true
          },
          {
            input: "1234567890",
            expectedOutput: "987654321",
            hide: false
          }
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
            hide: false
          },
          {
            input: "   -42",
            expectedOutput: "-42",
            hide: true
          },
          {
            input: "4193 with words",
            expectedOutput: "4193",
            hide: false
          },
          {
            input: "words and 987",
            expectedOutput: "0", // No valid conversion could be performed
            hide: true
          },
          {
            input: "-91283472332",
            expectedOutput: "-2147483648", // Exceeds 32-bit signed integer range
            hide: false
          },
          {
            input: "2147483648",
            expectedOutput: "2147483647", // Exceeds 32-bit signed integer range
            hide: true
          },
          {
            input: "   +0 123",
            expectedOutput: "0",
            hide: false
          },
          {
            input: "-5-",
            expectedOutput: "-5",
            hide: true
          },
          {
            input: "3.14",
            expectedOutput: "3",
            hide: false
          },
          {
            input: "   0000123",
            expectedOutput: "123",
            hide: true
          },
          {
            input: "+-12",
            expectedOutput: "0", // No valid conversion could be performed
            hide: false
          },
          {
            input: "  -0012a42",
            expectedOutput: "-12",
            hide: true
          },
          {
            input: "0.1",
            expectedOutput: "0", // No valid conversion could be performed
            hide: false
          },
          {
            input: "12abc34",
            expectedOutput: "12",
            hide: true
          },
          {
            input: "-+5",
            expectedOutput: "0", // No valid conversion could be performed
            hide: false
          },
          {
            input: "99999999999",
            expectedOutput: "2147483647", // Exceeds 32-bit signed integer range
            hide: true
          },
          {
            input: "10 20",
            expectedOutput: "10",
            hide: false
          }
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
            hide: false
          },
          {
            input: "-121",
            expectedOutput: "false",
            hide: true
          },
          {
            input: "10",
            expectedOutput: "false",
            hide: false
          },
          {
            input: "0",
            expectedOutput: "true",
            hide: true
          },
          {
            input: "12321",
            expectedOutput: "true",
            hide: false
          },
          {
            input: "12345",
            expectedOutput: "false",
            hide: true
          },
          {
            input: "1001",
            expectedOutput: "true",
            hide: false
          },
          {
            input: "11111",
            expectedOutput: "true",
            hide: true
          },
          {
            input: "22222",
            expectedOutput: "true",
            hide: false
          },
          {
            input: "45654",
            expectedOutput: "true",
            hide: true
          },
          {
            input: "98789",
            expectedOutput: "true",
            hide: false
          },
          {
            input: "100001",
            expectedOutput: "true",
            hide: true
          },
          {
            input: "99899",
            expectedOutput: "true",
            hide: false
          },
          {
            input: "123456",
            expectedOutput: "false",
            hide: true
          },
          {
            input: "55555",
            expectedOutput: "true",
            hide: false
          },
          {
            input: "7007",
            expectedOutput: "true",
            hide: true
          }
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
            input: "aa, a",
            expectedOutput: "false", // 'a' does not match 'aa'
            hide: false
          },
          {
            input: "aa, a*",
            expectedOutput: "true", // 'a*' matches 'aa'
            hide: true
          },
          {
            input: "ab, .*",
            expectedOutput: "true", // '.*' matches 'ab'
            hide: false
          },
          {
            input: "aab, c*a*b",
            expectedOutput: "true", // 'c*a*b' matches 'aab'
            hide: true
          },
          {
            input: "mississippi, mis*is*p*.",
            expectedOutput: "false", // 'mis*is*p*.' does not match 'mississippi'
            hide: false
          },
          {
            input: "mississippi, mis*is*ip*.",
            expectedOutput: "true", // 'mis*is*ip*.' matches 'mississippi'
            hide: true
          },
          {
            input: "abcd, ab.*",
            expectedOutput: "true", // 'ab.*' matches 'abcd'
            hide: false
          },
          {
            input: "aaa, a*a",
            expectedOutput: "true", // 'a*a' matches 'aaa'
            hide: true
          },
          {
            input: "ab, .*c",
            expectedOutput: "false", // '.*c' does not match 'ab'
            hide: false
          },
          {
            input: "ab, a.",
            expectedOutput: "true", // 'a.' matches 'ab'
            hide: true
          },
          {
            input: "ab, a*.",
            expectedOutput: "true", // 'a*.' matches 'ab'
            hide: false
          },
          {
            input: "abcd, a.*c",
            expectedOutput: "false", // 'a.*c' does not match 'abcd'
            hide: true
          },
          {
            input: "xyz, x.*",
            expectedOutput: "true", // 'x.*' matches 'xyz'
            hide: false
          },
          {
            input: "x, .",
            expectedOutput: "true", // '.' matches any single character
            hide: true
          },
          {
            input: "abc, a.c",
            expectedOutput: "true", // 'a.c' matches 'abc'
            hide: false
          },
          {
            input: "ab, a*b*",
            expectedOutput: "true", // 'a*b*' matches 'ab'
            hide: true
          },
          {
            input: "testcase, test.*",
            expectedOutput: "true", // 'test.*' matches 'testcase'
            hide: false
          }
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