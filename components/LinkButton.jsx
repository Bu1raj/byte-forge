import Link from 'next/link'
import React from 'react'

export default function LinkButton({href, text, color, Icon}) {
  return (
    <Link
        href={href}
        className={`bg-${color} border border-${color} rounded py-1 px-3 flex gap-4 justify-center items-center text-background font-medium transition duration-300 ease-in-out hover:text-${color} hover:bg-transparent`}
    >
        {Icon ? <Icon fill="currentColor" size={20} /> : null}
        {text}
    </Link>
  )
}
