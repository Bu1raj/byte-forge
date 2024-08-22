import SelectMenu from "@/components/SelectMenu";
import React, { useState, useEffect, useRef } from "react";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { Skeleton } from "@/components/ui/skeleton";

export default function CodeEditor({
  config,
  questionId,
  setMessage,
  setLoading,
  loading,
  onSubmit,
}) {
  const [language, setLanguage] = useState("c");
  const [theme, setTheme] = useState("vs-dark");
  const [code, setCode] = useState("");

  const editorRef = useRef();
  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const RunCode = async () => {
    const requestBody = {
      code: code,
      language: language,
    };
    console.log(requestBody);

    fetch("http://localhost:8080/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Response from server:", data);
        onSubmit(data.output);
      })
      .catch((error) => {
        console.error("Error sending request:", error);
      });
    console.log(code);
  };

  return (
    <div className="flex gap-2 pl-3 h-full w-full flex-col">
      <div className="flex justify-between mr-5">
        <SelectMenu
          topic="language"
          options={["c", "cpp", "javascript", "python"]}
          setState={setLanguage}
          width="w-[150px]"
        />
        <div className="flex gap-2 items-center">
          <button className="border border-[#83B4FF] font-semibold rounded w-24 h-9 transition duration-300 ease-in-out hover:bg-[#83B4FF] hover:text-background">
            Run
          </button>
          <button
            onClick={RunCode}
            className="border border-[#83B4FF] font-semibold rounded w-24 h-9 transition duration-300 ease-in-out hover:bg-[#83B4FF] hover:text-background"
          >
            Submit
          </button>
        </div>
      </div>
      {config && (
        <Editor
          language="c"
          value={config[language].value}
          onChange={(value) => setCode(value || "")}
          theme={theme}
          onMount={onMount}
        />
      )}
      {!config && <Skeleton className="h-[90%] w-full p-2" />}
    </div>
  );
}
