"use client"
import React, { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import QuestionPage from "./QuestionBox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeEditor from "./CodeEditor";
import OutputBox from "./OutputBox";
import Navbar from "@/components/Navbars/CodingPageNavbar";
import { useSearchParams } from "next/navigation";
import { experimentsList } from "../constants";

export default function CodingPage() {
  const searchParams = useSearchParams();
  const questionId = searchParams?.get("questionId");

  const [question, setQuestion] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("Brother, I am empty");

  useEffect(() => {
    if (questionId) {
      const question = experimentsList.find(
        (experiment) => experiment.id === questionId
      );
      setQuestion(question);
    }
  }, [questionId]);

  const onSubmission = (result) => {
    setOutput(result);
  };

  if (!question) {
    return <div>Loading...</div>;
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
                <TabsTrigger value="Questions" className="border-2 border-border data-[state=active]:bg-border rounded">Questions</TabsTrigger>
                <TabsTrigger value="Submissions" className="border-2 border-border data-[state=active]:bg-border rounded">Submissions</TabsTrigger>
              </TabsList>

              <TabsContent value="Questions" className="w-[100%] h-[90vh]">
                <QuestionPage question={question} />
              </TabsContent>
            </Tabs>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={58}>
            <ResizablePanelGroup direction="vertical" className="mt-2">
              <ResizablePanel defaultSize={58}>
                <CodeEditor
                  onSubmit={onSubmission}
                  config={question?.config}
                  questionId={question?.id}
                  setMessage={setMessage}
                  setLoading={setLoading}
                  loading={loading}
                />
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={42}>
                <OutputBox
                  examples={question?.examples}
                  message={output}
                  loading={loading}
                />
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
}
