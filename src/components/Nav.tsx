import React from 'react';

interface NavProps {
  options: Array<{
    href: string
    label: string
    icon?: string
  }>
}

function Nav({options}: NavProps) {
  return (
    <div className = 'bg-amber-950  '>
      <ul className='flex justify-end items-center text-white text-xl font-sans'>
        {options.map((opcion, index) => (
          <li key={index} className='m-5 flex items-center'>
            <div className='m-2'>
              <i className= {opcion.icon} ></i>
            </div>
            <a href={opcion.href}>{opcion.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav