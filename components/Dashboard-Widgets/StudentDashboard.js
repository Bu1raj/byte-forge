"use client";
import React, { useEffect, useState } from "react";
import { Experiment, experimentsList } from "../../app/constants";
import { IoMdArrowDropright } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function StudentDashboard() {
  const router = useRouter();
  const [completedCount, setCompletedCount] = useState("--");
  const [remainingCount, setRemainingCount] = useState("--");

  useEffect(() => {
    // Calculate the number of completed and remaining experiments
    const numberOfExperiments = experimentsList.length;
    const completedExperiments = experimentsList.filter(
      (experiment) => experiment.completed
    ).length;
    setCompletedCount(completedExperiments.toString());
    setRemainingCount((numberOfExperiments - completedExperiments).toString());
  }, []);

  // When user clicks on "Solve problem" button
  function handleSolveProblem(experiment) {
    // Navigate to the coding page with the questionId passed as a query parameter
    router.push(`/solve-problem?questionId=${experiment.id}`);
  }

  function handleVivaVoceClick() {
    router.push("/viva-voce");
  }
  return (
    <>
      <div className="w-[calc(100vw-15rem)] h-48 border border-[#83B4FF] rounded-2xl mt-8 mb-8 p-8 flex flex-col justify-between bg-300% animate-gradient bg-gradient-to-r from-[#1A2130] to-[#2F3A55]">
        <h1 className="text-5xl font-bold">Programming in C</h1>
        <div className="flex gap-8 ml-auto text-xl">
          <p>Completed {completedCount}</p>
          <p>Remaining {remainingCount}</p>
        </div>
      </div>
      <div className="h-full w-[calc(100vw-15rem)] grid grid-cols-5 gap-8">
        {experimentsList.map((experiment, index) => (
          <div key={index} className="card-wrapper">
            <div className="card-content h-44 p-6 flex flex-col justify-between text-black">
              <h1 className="text-xl text-white font-semibold truncate">
                {experiment.title}
              </h1>
              <div className="flex flex-col gap-2 text-sm font-medium items-start">
                <button
                  onClick={() => handleSolveProblem(experiment)}
                  className="bg-[#FDFFE2] px-2 py-1 rounded shadow-lg flex items-center gap-2 hover:bg-[#FDFFE2E6]"
                >
                  Solve problem
                  <IoMdArrowDropright fill="black" />
                </button>
                <button
                  onClick={handleVivaVoceClick}
                  className="bg-[#FDFFE2] px-2 py-1 rounded shadow-lg flex items-center gap-2 hover:bg-[#FDFFE2E6]"
                >
                  Viva Voce
                  <IoMdArrowDropright fill="black" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
