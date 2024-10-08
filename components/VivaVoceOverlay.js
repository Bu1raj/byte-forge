import React from "react";
import { IoMdClose } from "react-icons/io";

export default function VivaVoceOverlay(props) {
  const { questions, setIsModalOpen } = props;
  return (
    <div className="w-full h-full fixed inset-0 z-50 flex-col flex items-center justify-center bg-opacity-80 bg-background">
      <div className="w-[60%] h-[80%] bg-overlay flex flex-col gap-1 justify-center p-5 rounded-xl">
        <div className="w-full h-fit flex justify-end">
          <button onClick={() => setIsModalOpen(false)}>
            <IoMdClose size={30} />
          </button>
        </div>
        <div className="w-full h-full bg-overlay p-5 flex flex-col gap-2 overflow-auto hide-scrollbar">
          <p className="text-3xl mb-4">Quiz Questions</p>
          {questions.map((q, index) => (
            <div
              key={index}
              className="bg-subtleBackground p-4 rounded flex flex-col gap-4"
            >
              <p>
                Q{index + 1}. {q.question}
              </p>
              <div className="flex flex-col gap-3 ml-4">
                {q.options.map((option, index) => (
                  <div key={index}>
                    <p className="font-light">
                      {index + 1}. {option}
                    </p>
                  </div>
                ))}
              </div>

              <p className="pt-4">
                <span className="font-semibold">Correct Answer: </span>
                {q.correctAnswer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
