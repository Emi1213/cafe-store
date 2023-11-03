import React from 'react';

function Nav({options}) {
  return (
    <div>
        <ul>
            {options.map((opcion, index) => (
                <li key={index}>
                <a href={opcion.href}>{opcion.label}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Nav