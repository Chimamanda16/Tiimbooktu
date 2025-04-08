import React from "react";

export const Input = (props) => {
    const handleChange = (e) => {
        props.onChange(e)
    }
    return (
        <div className="flex flex-col w-full gap-[5px]">
        <label className="text-sm text-white font-bold font-[satoshi] lg:font-cinzel lg:uppercase" htmlFor={props.id}>{props.label}</label>
        {props.type !== 'textarea' ? 
             <input onChange={(e) => handleChange(e)} type={props.type} placeholder={props.placeholder} name={props.name} id={props.id} value={props.value} /> :
             <textarea rows={4} onChange={(e) => handleChange(e)} name={props.name} id={props.id} value={props.value} placeholder={props.placeholder}></textarea>
    }
   
    </div>
    )
}