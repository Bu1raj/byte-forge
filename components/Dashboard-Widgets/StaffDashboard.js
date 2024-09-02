"use client"
import React from 'react'
import StaffExptCard from '../StaffExptCard'
import { useLDC } from '@/contexts/LabDataContext';

export default function StaffDashboard() {
  const {labData, lockUnlockExperiment} = useLDC();
  const {experimentsList} = labData;

  async function handleLockClick(id, lockOrUnclock) {
    console.log('Lock/Unlock experiment with id:', id);
    await lockUnlockExperiment(lockOrUnclock, id);
  }

  return (
    <div className='h-full w-full flex flex-1 flex-col items-center pt-16 overflow-auto'>
      <div className='w-[75%]'>
        <p className='text-5xl mb-16'>Programming in C</p>
        <p className='text-2xl mb-6 ml-2'>Experiments</p>
      </div>
      {
        experimentsList.map((experiment, index) => (
          <StaffExptCard exptTitle={experiment.title} id={experiment.id} key={index} isLocked={experiment.locked} handleLockClick={handleLockClick} />
        ))
      }
    </div>
  )
}
