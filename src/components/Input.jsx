import React, { useState } from "react";

export const Input = ({
    type = "text",
    placeholder = "",
    label = "",
    name = "",
    id = "",
    value = "",
    required = false,
    options = [],
    onChange = () => { }
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleChange = (e) => {
        onChange(e)
    }
    const handleSelect = (value) => {
        setIsOpen(false);
        onChange({ target: { name, value: value } });
    }
    return (
        <div className="flex flex-col w-full gap-[5px]">
            <label className="text-sm text-white font-bold capitalize" htmlFor={id}>{label}</label>
            {type === 'textarea' ?
                <textarea rows={4} onChange={(e) => handleChange(e)} name={name} id={id} value={value} placeholder={placeholder}></textarea> :
                type === 'number' ?
                    <div className="flex py-3 px-5 bg-[#2B2B2B] border border-[#595959] rounded-[12px]">
                        <div className="border-r pr-[10px] border-r-[#595959]">
                            +234
                        </div>
                        <input className="border-none bg-[#2B2B2B] px-6 outline-none w-full" required={required} onChange={(e) => handleChange(e)} type={type} placeholder={placeholder} name={name} id={id} value={value} />
                    </div> : type === 'select' ?
                        <>
                            <div className="relative">
                                <input value={value}
                                    placeholder={placeholder}
                                    id={id}
                                    onChange={handleChange}
                                    name={name}
                                    required={required}
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="input cursor-pointer relative text-white flex items-center w-full justify-between outline-none"
                                />
                                <img className="absolute right-4 top-3" height={24} width={24} src="/assets/icons/dropdown-icon-white.svg" alt="select" />
                                {isOpen &&
                                    <div className="absolute top-14 left-0 border border-[#595959] bg-[#2b2b2b] rounded-lg w-full">
                                        <div className="cursor-pointer hover:bg-[#535353] px-4 py-2" onClick={() => handleSelect('')}>--Select--</div>
                                        {options.map((option, index) => {
                                            return <div className="cursor-pointer hover:bg-[#535353] px-4 py-2" onClick={() => handleSelect(option)} key={index}>{option}</div>
                                        })}
                                    </div>
                                }
                            </div></> :
                        <input className="input" required={required} onChange={(e) => handleChange(e)} type={type} placeholder={placeholder} name={name} id={id} value={value} />
            }

        </div>
    )
}