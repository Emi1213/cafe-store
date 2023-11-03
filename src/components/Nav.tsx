import React from 'react';

function Nav({options}) {
  return (
    <div className = 'bg-amber-950 '>
      <ul className='flex justify-end items-center text-white'>
        {options.map((opcion, index) => (
          <li key={index} className='m-5'>
            <a href={opcion.href}>{opcion.label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nav