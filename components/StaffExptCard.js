"use client";
import React, { useState } from "react";
import { HiLockClosed } from "react-icons/hi2";
import { HiLockOpen } from "react-icons/hi2";
import { VscEye } from "react-icons/vsc";
import { PiSpinnerGapThin } from "react-icons/pi";

export default function StaffExptCard(props) {
  const { exptTitle, id, isLocked, handleLockClick } = props;
  const [inProgress, setInProgress] = useState(false);
  return (
    <div className="w-[75%] shadow-inner2 p-6 mb-8 border rounded-2xl border-secondary flex items-center justify-between duration-300 hover:shadow-innerOnHover">
      <p className="text-2xl truncate">{exptTitle}</p>
      <div className="flex w-fit gap-6 items-center justify-center">
        <button className="text-tertiary flex gap-2 transform hover:scale-105 transition-transform duration-200">
          <VscEye size={30} fill="currentColor" /> problem
        </button>

        <button className="text-tertiary flex gap-2 hover:scale-105 transition-transform duration-200">
          <VscEye size={30} fill="currentColor" /> viva-voce
        </button>

        <button
          onClick={async () => {
            setInProgress(true);
            await handleLockClick(id, !isLocked);
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
