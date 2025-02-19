"use client";
import AiAssistantModal from "@/components/Coding-Page-Widgets/AiAssistantModal";
import Navbar from "@/components/Navbars/CodingPageNavbar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { getConfig } from "../constants";
import { labData } from "../consts";
import Cache from "./CacheDefinition";
import CodeEditor from "./CodeEditor";
import OutputBox from "./OutputBox";
import QuestionPage from "./QuestionBox";
import SubmissionTab from "./SubmissionTab";

export default function CodingPage() {
  const { noStudentsInLab, experimentsList } = labData;
  const searchParams = useSearchParams();
  const questionId = searchParams?.get("questionId");

  const [question, setQuestion] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState(null);
  const [userCode, setUserCode] = useState("");

  // AiAssistantModal state
  const [aiModalOpen, setAiModalOpen] = useState(false);
  // this useState is for AiAssistantModal
  const [testCaseAndError, setTestCaseAndError] = useState(null);
  // this cache is for AiAssistantModal
  const aiResponseCache = useRef(new Cache(4));

  useEffect(() => {
    if (questionId) {
      const question = experimentsList.find(
        (experiment) => experiment.id === questionId
      );
      setQuestion(question);
    }
  }, [questionId]);

  const onSubmission = (result) => {
    aiResponseCache.current.clear();
    setOutput(result);
  };

  if (!question) {
    return <div>Loading...</div>;
  }

  function getInputToAi() {
    if (testCaseAndError.error){
      return {
        qDescription: question.description,
        code: userCode,
        testCase: question.problem.testCases[testCaseAndError.index],
        error: testCaseAndError.error,
        isLogicalError: false
      }
    }else if (testCaseAndError.actualOutput){
      return {
        qDescription: question.description,
        code: userCode,
        testCase: question.problem.testCases[testCaseAndError.index],
        actualOutput: testCaseAndError.actualOutput,
        isLogicalError: true
      }
    }else{
      return { error: "Something went wrong" };
    }
  }

  return (
    <div className="w-[100vw] h-[100vh] overflow-hidden">
      <Navbar />
      <div className="overflow-hidden h-[calc(100vh-3.5rem)]">
        <ResizablePanelGroup
          direction="horizontal"
          className="border relative h-full"
        >
          <ResizablePanel defaultSize={42}>
            <Tabs defaultValue="Questions" className="w-full mt-1">
              <TabsList className="grid w-full grid-cols-2 bg-background gap-2 px-3">
                <TabsTrigger
                  id="questionsTab"
                  value="Questions"
                  className="border-2 border-border data-[state=active]:bg-border rounded"
                >
                  Questions
                </TabsTrigger>
                <TabsTrigger
                  id="submissionsTab"
                  value="Submissions"
                  className="border-2 border-border data-[state=active]:bg-border rounded"
                >
                  Submissions
                </TabsTrigger>
              </TabsList>

              <TabsContent value="Questions" className="w-[100%] h-[90vh] ">
                <QuestionPage question={question} />
              </TabsContent>
              <TabsContent value="Submissions" className="w-[100%] h-[90vh] ">
                <SubmissionTab
                  testCases={question?.problem.testCases}
                  outputs={output}
                  code={userCode}
                />
              </TabsContent>
            </Tabs>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={58}>
            <ResizablePanelGroup direction="vertical" className="mt-2">
              <ResizablePanel defaultSize={55}>
                <CodeEditor
                  onSubmit={onSubmission}
                  config={getConfig()}
                  questionId={questionId}
                  setMessage={setMessage}
                  setLoading={setLoading}
                  loading={loading}
                  setUserCode={setUserCode}
                  examples={question?.problem.testCases}
                />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={45}>
                <OutputBox
                  examples={question?.problem.testCases.slice(0, 4)}
                  outputs={output?.slice(0, 4)}
                  openAiModal={() => setAiModalOpen(true)}
                  setTestCaseIndexAndError={setTestCaseAndError}
                />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>

        {aiModalOpen && (
          <AiAssistantModal
            closeAiModal={() => setAiModalOpen(false)}
            inputToAi={getInputToAi()}
            responseCache={aiResponseCache.current}
          />
        )}
      </div>
    </div>
  );
}
