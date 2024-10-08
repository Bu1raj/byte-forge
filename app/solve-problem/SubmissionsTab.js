"use client"
import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

const TestResults = ({passedCount}) => {
  return(
    <div className="">
      <div className={`text-lg font-semibold mb-2 ${passedCount === 20 ? 'text-green-500' : 'text-red-500'}`}>
          {passedCount === 20 ? 'Success!' : 'Failure'}
      </div>
      <div className="font-light mb-2">
          {passedCount}/20 test cases passed
      </div>
    </div>
  )}

const FailedTestCase = ({firstFailedIndex, failedCase, obtainedOutput}) => {
  return(
    <div className="mt-6">
      <div className="text-gray-300 text-lg mb-2">
          Test Case {firstFailedIndex + 1} failed:
      </div>
      <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1 ">
              <p className="text-gray-300 text-md">Input:</p>
              <p className="ml-2">{failedCase.input}</p>
          </div>
          {firstFailedIndex < 10 && (
            <div>
              <div className="flex flex-col gap-1">
                  <p className="text-gray-300 text-md">Expected Output:</p>
                  <p className="ml-2 text-green-500 opacity-80">{failedCase.expectedOutput}</p>
              </div>
              <div className="flex flex-col gap-1">
                  <p className="text-gray-300 text-md">Your Output:</p>
                  {<p className="ml-2 text-red-500 opacity-80">{obtainedOutput.actualOutput ? obtainedOutput.actualOutput : obtainedOutput.error}</p>}
              </div>
            </div>
          )}
      </div>
    </div>
  )}

const TestCaseResults = ({testCases, outputs}) => {
  return(
    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 mt-6 mb-8">
      {testCases.map((_, index) => (
        <div 
          key={index} 
          className="bg-subtleBackground rounded w-full text-center text-md shadow-md h-10 flex items-center justify-center"
        >
          <span className={!outputs || outputs[index]?.passed ? 'text-green-500 opacity-60' : 'text-red-500 opacity-60'}>
            Test Case {index + 1}
          </span>
        </div>
      ))}
    </div>
  )}

const LCbutton = ({handleLastCodeClick}) => {
  return(
    <div className="flex w-full">
      <button
        onClick={handleLastCodeClick}
        className="inline-flex items-center text-left text-lg font-semibold text-gray-300 opacity-90
                  hover:text-[#83B4FF] border border-gray-700 px-2 py-1 rounded"
      >
        Last Submitted Code &nbsp;&nbsp;
        <FaArrowRightLong className="ml-2" />
      </button>
    </div>
  )}

const LCpage = ({handleLastCodeClick}) => {
  const code = `
  function add(a, b) {
    return a + b;
  }

  console.log(add(2, 3));
  `;

  return(
    <div className="w-full relative p-4">
      <button
        onClick={handleLastCodeClick}
        className="absolute top-4 left-4 text-gray-300 hover:text-[#83B4FF]"
      >
        <FaArrowRightLong className="ml-2 text-xl rotate-180"/>
      </button>

      <h2 className="text-lg font-semibold mb-4 mt-4 text-center">Code:</h2>
      <pre className="bg-subtleBackground font-light p-4 rounded-md">
        {code}
      </pre>
    </div>
  )
}

export default function SubmissionsTab({ testCases, outputs }) {
  const passedCount = outputs ? outputs.filter(item => item && item.passed).length : 0;
  const firstFailedIndex = outputs ? outputs.findIndex(item => item && !item.passed) : -1;
  const [submitted, setSubmitted] = useState(false);
  const [showLCode, setshowLCode] = useState(false);

  useEffect(() => {
      if(!outputs || outputs.length != 20){
          setSubmitted(false);
          return;
      }
      setSubmitted(true);
  }, [outputs]);

  const handleLastCodeClick = () => {
    setshowLCode(!showLCode);
  };
    
  return (
    <div className="overflow-x-hidden overflow-scroll h-[80vh]">
      {!showLCode ? (
        <div className="w-full p-4 relative">
          {submitted && (
            <div className="">
              <TestResults passedCount={passedCount} />
              {firstFailedIndex !== -1 && 
                <FailedTestCase 
                  firstFailedIndex= {firstFailedIndex}
                  failedCase= {testCases[firstFailedIndex]}
                  obtainedOutput= {outputs[firstFailedIndex]}
                />
              }
              <TestCaseResults 
                testCases={testCases} 
                outputs={outputs} 
              />
            </div>
          )}
          <LCbutton handleLastCodeClick={handleLastCodeClick} />
        </div>
      ) : (
        <LCpage handleLastCodeClick={handleLastCodeClick} />
      )}
    </div>
  );
}
