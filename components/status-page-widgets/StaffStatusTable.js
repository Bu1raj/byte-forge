import React, { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";

export default function StaffStatusTable({ studentData }) {
  const numberOfStudents = studentData.length;
  const [expandedRows, setExpandedRows] = useState(
    Array.from({ length: numberOfStudents }).fill(false)
  );

  function toggleModal(index) {
    setExpandedRows((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  }

  return (
    <div className="border rounded mx-20 p-8">
      <p className="font-normal text-xl mb-4">Student Progress</p>
      <div className="w-full min-h-[335px] max-h-[370px] overflow-y-auto pr-4">
        <table className="w-full table-auto">
          <thead className="text-left sticky top-0 z-10 bg-background">
            <tr>
              <th className="w-[20%]">Name</th>
              <th className="w-[14%]">USN</th>
              <th className="w-[15%]">Execution Score</th>
              <th className="w-[15%]">Viva Score</th>
              <th className="w-[14%]">Total</th>
              <th className="w-[11%]">Progress</th>
              <th className="w-[11%]">Details</th>
            </tr>
          </thead>

          <tbody>
            {studentData.map((student, index) => (
              <>
                <tr
                  key={student.usn}
                  className={expandedRows[index] ? "border-none" : ""}
                >
                  <td>{student.name}</td>
                  <td className="">{student.usn}</td>
                  <td className="">0</td>
                  <td className="">0</td>
                  <td className="">0</td>
                  <td className="">--</td>
                  <td>
                    <button
                      className="flex items-center justify-center w-8 ml-2"
                      onClick={() => toggleModal(index)}
                    >
                      {expandedRows[index] ? (
                        <VscEyeClosed size={25} />
                      ) : (
                        <VscEye size={25} />
                      )}
                    </button>
                  </td>
                </tr>
                {expandedRows[index] && (
                  <DetailsModal
                    key={student.usn}
                    experimentStatus={student.enrolledLabs[0]}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function DetailsModal({ experimentStatus }) {
  const exptStatus = experimentStatus.status;
  const numberOfExpriments = exptStatus.length;
  return (
    <tr>
      <td colSpan={7} className="pt-1">
        <div className="pt-2 pb-6 px-8 mb-4 bg-slate-900 bg-opacity-80 rounded">
          <table className="w-full">
            <thead className="text-left">
              <tr className="text-center">
                <th className="w-[12%]" />
                {Array.from({ length: numberOfExpriments }).map((_, index) => (
                  <th key={index}>expt {index + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <th>Execution Score</th>
                {exptStatus.map((e, index) => (
                  <td key={index}>{e.experimentMarks}</td>
                ))}
              </tr>
              <tr className="text-center">
                <th>Viva Score</th>
                {exptStatus.map((e, index) => (
                  <td key={index}>{e.vivaMarks}</td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  );
}
