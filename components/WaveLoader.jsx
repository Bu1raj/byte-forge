import React from 'react'

export default function WaveLoader({backgroundColor, foregroundColor}) {
  return (
    <div className={`flex items-center justify-center w-24 h-11 bg-${backgroundColor} rounded-full shadow-2xl`}>
      <div className="flex space-x-2">
        <div className={`w-[9px] h-[9px] rounded-full animate-bounce-up bg-white opacity-80`} style={{animationDelay: '0ms'}}></div>
        <div className={`w-[9px] h-[9px] rounded-full animate-bounce-up bg-white opacity-80`} style={{animationDelay: '120ms'}}></div>
        <div className={`w-[9px] h-[9px] rounded-full animate-bounce-up bg-white opacity-80`} style={{animationDelay: '230ms'}}></div>
        <div className={`w-[9px] h-[9px] rounded-full animate-bounce-up bg-white opacity-80`} style={{animationDelay: '340ms'}}></div>
      </div>
    </div>
  )
}
