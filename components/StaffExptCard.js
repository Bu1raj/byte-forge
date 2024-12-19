"use client";
import React, { useState } from "react";
import { HiLockClosed } from "react-icons/hi2";
import { HiLockOpen } from "react-icons/hi2";
import { VscEye } from "react-icons/vsc";
import { PiSpinnerGapThin } from "react-icons/pi";

export default function StaffExptCard(props) {
  const { experiment, isLocked, handleLockClick, handleViewProblemClick, handleVivaVoceClick } =
    props;
  const [inProgress, setInProgress] = useState(false);
  return (
    <div className="w-[75%] p-6 mb-8 rounded-xl border flex items-center justify-between duration-300 transition-transform transform hover:scale-[1.03]">
      <p className="text-2xl truncate">{experiment.title}</p>
      <div className="flex w-fit gap-6 items-center justify-center">
        <button
          onClick={() => handleViewProblemClick(experiment)}
          className="flex gap-2 transform hover:scale-105 transition-transform duration-200"
        >
          <VscEye size={30} fill="currentColor" /> problem
        </button>

        <button
          onClick={() => handleVivaVoceClick(experiment)} 
        className="flex gap-2 hover:scale-105 transition-transform duration-200">
          <VscEye size={30} fill="currentColor" /> viva-voce
        </button>

        <button
          onClick={async () => {
            setInProgress(true);
            await handleLockClick(experiment.id, !isLocked);
            setInProgress(false);
          }}
          className="text-tertiary flex gap-2 hover:scale-105 transition-transform duration-200"
        >
          {inProgress ? (
            <PiSpinnerGapThin
              size={30}
              fill="currentColor"
              className="animate-spin"
            />
          ) : isLocked ? (
            <HiLockClosed size={35} fill="currentColor" />
          ) : (
            <HiLockOpen size={35} fill="currentColor" />
          )}
        </button>
      </div>
    </div>
  );
}
