"use client";
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import IconButton from "@/components/IconButton";
import { IoSparklesSharp } from "react-icons/io5";

export default function OutputBox({
  examples,
  outputs,
  openAiModal,
  setTestCaseIndexAndError,
}) {
  const initialStyles = examples.map((index) => "");
  const [errorStyles, setErrorStyles] = useState(initialStyles);
  const [currentSelectedTestCase, setCurrentSelectedTestCase] = useState(0);

  useEffect(() => {
    if (!outputs) return;
    const newErrorStyles = outputs.map((output, index) => {
      return output.passed ? "text-green-500" : "text-red-400";
    });
    setErrorStyles(newErrorStyles);
  }, [outputs]);

  function onClickAiAssistant() {
    let obj = {};
    if (outputs[currentSelectedTestCase].error) {
      obj = {
        index: currentSelectedTestCase,
        error: outputs[currentSelectedTestCase].error,
      };
    }else{
      obj = {
        index: currentSelectedTestCase,
        error: outputs[currentSelectedTestCase].actualOutput,
      }
    }

    setTestCaseIndexAndError(obj);
    openAiModal();
  }

  return (
    <Tabs
      defaultValue="test-case-1"
      className="h-full w-full flex flex-col p-3"
      onValueChange={(value) => {
        const index = parseInt(value.split("-")[2], 10) - 1; // the value is in the format test-case-1
        setCurrentSelectedTestCase(index);
      }}
    >
      <div className="flex justify-between items-center">
        <TabsList className="font-semibold flex text-center w-fit gap-4 ">
          {examples.map((example, index) => (
            <TabsTrigger
              value={`test-case-${index + 1}`}
              key={index}
              className={
                "text-center font-semibold rounded " +
                errorStyles[index] +
                " data-[state=active]:" +
                errorStyles[index]
              }
            >
              Test Case {index + 1}
            </TabsTrigger>
          ))}
        </TabsList>

        {outputs && !outputs[currentSelectedTestCase].passed && (
          <IconButton
            Icon={IoSparklesSharp}
            onClickFunction={onClickAiAssistant}
            color={"secondary"}
            text={"Explain with AI"}
          />
        )}
      </div>

      {examples.map((example, index) => (
        <TabsContent
          value={`test-case-${index + 1}`}
          key={index}
          className="font-mono h-full bg-subtleBackground rounded p-4 overflow-auto"
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Input:</p>
              <p className="bg-slate-800 p-2 rounded">{example.input}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Expected Output:</p>
              <p className="bg-slate-800 p-2 rounded">
                {example.expectedOutput}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Your Output:</p>
              {outputs ? (
                <pre
                  className={`${
                    outputs[index].passed ? "text-green-500" : "text-red-400"
                  } bg-slate-800 p-2 rounded`}
                >
                  {outputs[index].actualOutput
                    ? outputs[index].actualOutput
                    : outputs[index].error}
                </pre>
              ) : (
                <p className="ml-2"></p>
              )}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
