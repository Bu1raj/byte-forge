"use client"
import React, { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function OutputBox({ examples, outputs }) {
    const initialStyles = examples.map((index) => "");
    const [errorStyles, setErrorStyles] = useState(initialStyles);

    useEffect(() => {
        if(!outputs) return;
        const newErrorStyles = outputs.map((output, index) => {
            return output.passed ? "text-green-500" : "text-red-500";
        });
        setErrorStyles(newErrorStyles);
    }, [outputs]);

    return (
      <Tabs defaultValue="test-case-1" className="h-full w-full flex flex-col p-3">
        <TabsList className="font-semibold flex text-center w-fit gap-4 ">
          {examples.map((example, index) => (
            <TabsTrigger
              value={`test-case-${index + 1}`}
              key={index}
              className={"text-center font-semibold rounded " + errorStyles[index] + " data-[state=active]:" + errorStyles[index]}
            >
              Test Case {index + 1}
            </TabsTrigger>
          ))}
        </TabsList>

        {examples.map((example, index) => (
          <TabsContent
            value={`test-case-${index + 1}`}
            key={index}
            className="font-mono h-full bg-subtleBackground rounded p-4"
          >
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Input:</p>
                <p className="ml-2">{example.input}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Expected Output:</p>
                <p className="ml-2">{example.expectedOutput}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Your Output:</p>
                {outputs ? (<p className={`ml-2 ${outputs[index].passed ? "text-green-500" : "text-red-500"}`}>{outputs[index].actualOutput ? outputs[index].actualOutput : outputs[index].error}</p>) : <p className="ml-2"></p>}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
  );
}
