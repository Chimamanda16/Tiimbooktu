import React, { useState } from "react";
import { Input } from "../components/Input";

export const Comment = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
    return (
        <form id="comment" className="bg-[#0A0A0A] mt-[20px] py-5 px-[14px] lg:py-[30px] lg:px-[33px] lg:w-[70%] rounded-xl flex flex-col gap-5">
            <h4 className="text-[26px] font-chango text-white text-center">COMMENT?</h4>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-[30px] items-center">
                    <Input onChange={handleInputChange} label="First name" id="firstName" name="firstName" type="text" value={form.firstName} placeholder="Enter first name" />
                    <Input onChange={handleInputChange} label="Last name" id="lastName" name="lastName" value={form.lastName} type="text" placeholder="Enter last name" />
                </div>
                <Input onChange={handleInputChange} label="Email" id="email" name="email" type="email" value={form.email} placeholder="Enter your Email" />
                <Input onChange={handleInputChange} label="Your message" type="textarea" name="message" value={form.message} id="message" placeholder="Enter your message" />
            </div>
            <button type="submit" className="bg-[#CDFFAD] rounded-xl p-[10px] w-full text-[#1C1C1C] text-center uppercase font-bold">Send</button>
        </form>
    )
}