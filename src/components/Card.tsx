import React from "react";
import { Card } from 'primereact/card';

interface CardProps {
    title: string
    text : string
    icon? : any
    reference? : any
};
function CardComponent({title, text, icon, reference}: CardProps) {
  return (
    <div className="p-4 rounded-lg bg-amber-900 md:p-6  hover:scale-110 transform transition-all duration-300">
        <span className="inline-block p-3 text-white rounded-lg  ">
            <i className={icon} style={{fontSize: "2rem"}}></i>
        </span>
        <h2 className="mt-4 text-base font-medium text-yellow-50">{title}</h2>
        <p className="mt-2 text-sm text-yellow-50 ">{text}</p>
        <p className="mt-2 text-sm text-white ">{reference}</p>
    </div>
  );
}
export default CardComponent;
        