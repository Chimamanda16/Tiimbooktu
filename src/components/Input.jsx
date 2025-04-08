import React from "react";

export const Input = (props) => {
    return (
        <div className="flex flex-col w-full gap-[5px]">
        <label className="text-sm text-white font-bold font-[Cinzel] uppercase" htmlFor={props.id}>{props.label}</label>
        {props.type !== 'textarea' ? 
             <input type={props.type} placeholder={props.placeholder} name={props.name} id={props.id} value={props.value} /> :
             <textarea rows={4} name={props.name} id={props.id} value={props.value} placeholder={props.placeholder}></textarea>
    }
   
    </div>
    )
}