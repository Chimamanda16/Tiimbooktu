import React, { useState } from "react";
import { Input } from "../components/Input";
import axiosInstance from "../lib/axios";
import { toast } from "react-toastify";

export const Comment = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit =  async (e) => {
        e.preventDefault();
        try {
            const res = await axiosInstance.post('feedback', form);
            setForm({
                name: '',
                email: '',
                message: '',
            })
            toast.success(res.data.message)
        } catch (error) {
            console.error(error)
            toast.error(error?.response?.data?.message)
        }
    }
    return (
        <form onSubmit={(e) => handleSubmit(e)} id="comment" className="bg-[#0A0A0A] mt-[20px] py-5 px-[14px] mx-auto mb-10 lg:py-[30px] lg:px-[33px] lg:w-[70%] w-[100%] rounded-xl flex flex-col gap-5">
            <h4 className="text-[26px] font-chango text-white text-center">COMMENT?</h4>
            <div className="flex flex-col gap-4 font-sans">
                <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-[30px] items-center">
                    <Input onChange={handleInputChange} label="Name" id="name" required name="name" type="text" value={form.name} placeholder="Enter name" />
                </div>
                <Input onChange={handleInputChange} label="Email" id="email" name="email" required type="email" value={form.email} placeholder="Enter your Email" />
                <Input onChange={handleInputChange} label="Your message" type="textarea" required name="message" value={form.message} id="message" placeholder="Enter your message" />
            </div>
            <button type="submit" className="bg-[#CDFFAD] rounded-xl p-[10px] w-full text-[#1C1C1C] text-center uppercase font-bold">Send</button>
        </form>
    )
}