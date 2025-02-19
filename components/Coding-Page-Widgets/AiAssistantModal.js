import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import WaveLoader from "../WaveLoader";
import { getAiAssistanceForCode } from "@/utils/geminiAPIservices";

export default function AiAssistantModal({
  closeAiModal,
  inputToAi,
  responseCache,
}) {
  const [gettingAiResponse, setGettingAiResponse] = useState(true);
  const [aiResponse, setAiResponse] = useState("");

  useEffect(() => {
    const fetchAiResponse = async () => {
      const cacheKey = JSON.stringify({
        error: inputToAi.error.trim(),
        testCaseInput: inputToAi.testCase.input.trim(),
        testCaseOutput: inputToAi.testCase.expectedOutput.trim(),
      });

      const foundInCache = responseCache.get(cacheKey);
      if (foundInCache){
        setAiResponse(foundInCache);
        setGettingAiResponse(false);
        return;
      }

      try {
        const response = await getAiAssistanceForCode(
          inputToAi.error,
          inputToAi.qDescription,
          inputToAi.code,
          inputToAi.testCase,
          inputToAi.isLogicalError
        );

        responseCache.add(cacheKey, response);
        setAiResponse(response);

      } catch (error) {
        console.error("Error fetching AI response", error);
        setAiResponse("Failed to fetch AI response");
      } finally {
        setGettingAiResponse(false);
      }
    };

    fetchAiResponse();
  }, [inputToAi]);

  return (
    <div className="absolute right-0 top-0 z-50 h-full w-[500px] p-4 flex flex-col bg-background rounded-xl border shadow-xl">
      <div className="block w-full justify-start items-center mb-2">
        <IoMdClose
          size={20}
          className="cursor-pointer"
          onClick={closeAiModal}
        />
      </div>

      <div className="flex flex-col w-full overflow-auto">
        <div className="bg-subtleBackground p-4 w-full rounded text-white mb-4">
          <p className="font-semibold">Input:</p>
          <p className="bg-gray-800 p-2 rounded">{inputToAi.testCase.input}</p>
          <p className="mt-4 font-semibold">Expected Output:</p>
          <p className="bg-gray-800 p-2 rounded">
            {inputToAi.testCase.expectedOutput}
          </p>
        </div>
        <div className="bg-subtleBackground p-4 w-full rounded text-red-500 ">
          <p className="font-semibold">Error</p>
          <pre className="bg-gray-800  p-2 rounded">{inputToAi.error}</pre>
        </div>
        <div className="bg-subtleBackground p-4 w-full rounded text-white mt-4">
          <p className="font-semibold mb-2">AI Response</p>

          {gettingAiResponse ? (
            <WaveLoader backgroundColor="gray-800" foregroundColor="white" />
          ) : (
            <pre className="bg-gray-800 p-2 rounded text-wrap">
              {aiResponse}
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
