import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

// this the component which appears at the top left corner of the submissions tab
// it shows the success rate of the code written by the user
function PassedTestCasesIndicator({ passedCount, testCasesCount }) {
  const percentage = (passedCount / testCasesCount) * 100;
  return (
    <>
      {passedCount === testCasesCount ? (
        <p className="font-semibold text-2xl text-green-500">Success</p>
      ) : (
        <p className="font-semibold text-2xl text-red-400">Failure</p>
      )}

      <div className="w-full flex items-center justify-center mt-2">
        <div style={{ width: "70px", height: "70px" }}>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              textColor: "white",
              pathColor: "#83B4FF",
              trailColor: "#374151",
            })}
          />
        </div>
      </div>

      <p className="text-4xl font-bold mt-2 ml-1 text-center">
        {passedCount}{" "}
        <span className="text-lg font-normal text-gray-300">out of</span>{" "}
        {testCasesCount}
      </p>
      <p className="text-lg text-gray-300 ml-1 text-center">
        test cases passed
      </p>
    </>
  );
}

// this is the component which appears at the top right corner of the submissions tab
// it shows the input expected output and the actual output of the first failed test case
function FirstFailedTestCaseDetails({ firstFailedIndex, testCases, outputs }) {
  const firstFailedTestCase = testCases[firstFailedIndex];
  const firstFailedOutput = outputs[firstFailedIndex];
  return (
    <>
      <p className="text-lg mb-4">Test case {firstFailedIndex + 1} failed</p>
      <div className="flex flex-col flex-grow justify-evenly gap-4">
        <div>
          <p>Input</p>
          <pre className="p-2 bg-gray-800 text-white rounded">
            {firstFailedTestCase.input}
          </pre>
        </div>
        <div>
          <p>Expected output</p>
          <pre className="p-2 bg-gray-800 text-white rounded">
            {firstFailedOutput.expectedOutput}
          </pre>
        </div>
        <div>
          <p>Your output</p>
          <pre className="p-2 max-h-[100px]  overflow-auto bg-gray-800 text-white rounded">
            {firstFailedOutput.actualOutput
              ? firstFailedOutput.actualOutput
              : firstFailedOutput.error}
          </pre>
        </div>
      </div>
    </>
  );
}

// this is the component which shows the test cases in a grid format
function TestCasesGrid({ outputs }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
      {outputs.map((ele, index) => {
        return (
          <div key={index} className="bg-gray-800 p-2 rounded ">
            <p
              className={
                "text-center " +
                (ele.passed ? "text-green-500" : "text-red-500")
              }
            >
              Test case {index + 1}
            </p>
          </div>
        );
      })}
    </div>
  );
}

// this is the component which shows the last submitted code
function LastSubmittedCodePreview({ code }) {
  return (
    <pre className="ml-4">
      <span className="text-gray-600 -ml-4">//Last submitted code</span>
      <br />
      {code}
    </pre>
  );
}

export default function SubmissionTab({ testCases, outputs, code }) {
  if (!outputs || outputs.length != 20 || code === "") {
    return (
      <div className="w-full h-full flex items-center justify-center text-2xl">
        No submissions yet
      </div>
    );
  }
  const testCasesCount = testCases.length;
  const passedCount = outputs.filter((item) => item && item.passed).length;
  const firstFailedIndex = outputs.findIndex((item) => item && !item.passed);

  const [activeTab, setActiveTab] = useState("TestCases");

  return (
    <div className="w-full h-full px-4 pb-12 hide-scrollbar overflow-y-auto">
      <div className="flex gap-4">
        <div className="w-[35%] flex flex-col gap-4">
          <div className="w-full p-4 rounded bg-subtleBackground">
            <PassedTestCasesIndicator
              passedCount={passedCount}
              testCasesCount={testCasesCount}
            />
          </div>

          <div className="flex h-full gap-4 w-full">
            <button
              className={
                "w-[50%] p-2 rounded " +
                (activeTab === "TestCases"
                  ? "bg-secondary text-background font-semibold"
                  : "bg-subtleBackground text-gray-400")
              }
              onClick={() => setActiveTab("TestCases")}
            >
              Test cases
            </button>
            <button
              className={
                "w-[50%] p-2 rounded " +
                (activeTab === "Code"
                  ? "bg-secondary text-background font-semibold"
                  : "bg-subtleBackground text-gray-400")
              }
              onClick={() => setActiveTab("Code")}
            >
              Code
            </button>
          </div>
        </div>

        <div className="w-[65%] p-4 flex flex-col bg-subtleBackground rounded">
          <FirstFailedTestCaseDetails
            firstFailedIndex={firstFailedIndex}
            testCases={testCases}
            outputs={outputs}
          />
        </div>
      </div>

      <div className="w-full mt-4 bg-subtleBackground rounded p-4 max-h-[600px] overflow-auto">
        {activeTab === "TestCases" ? (
          <TestCasesGrid outputs={outputs} />
        ) : (
          <LastSubmittedCodePreview code={code} />
        )}
      </div>
    </div>
  );
}
