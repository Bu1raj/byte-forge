import React from 'react'
import StaffExptCard from '../StaffExptCard'
import { labData } from '@/app/consts';

export default function StaffDashboard() {
  const {experimentsList} = labData;
  function handleLockClick(id) {
    console.log('Lock clicked for experiment with id ' + id);
  }

  return (
    <div className='h-full w-full flex flex-1 flex-col items-center pt-16 overflow-auto'>
      <div className='w-[75%]'>
        <p className='text-5xl mb-16'>Programming in C</p>
        <p className='text-2xl mb-6 ml-2'>Experiments</p>
      </div>
      {
        experimentsList.map((experiment, index) => (
          <StaffExptCard exptTitle={experiment.title} id={experiment.id} key={index} isLocked={true} handleLockClick={handleLockClick} />
        ))
      }
    </div>
  )
}
