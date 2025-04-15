import { useState } from "react";
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";

const ResetComp = () =>{
    const [email, setEmail] = useState('');
    const submitForm = async(e) => {
        e.preventDefault();
        try {
            console.log("formData",email);
            // const response = await login(formData);
        //    console.log("Login Successful", response);
        } catch (error) {
            console.error("Error submitting form:", error);
            console.log(error.message);
        }
    }

    return(
        <div className="bg-[#1c1c1c] w-full text-white">
            <NavBarComp />
            <div className="md:w-[510px] m-auto my-10 text-[#fff] text-center py-6">
                <h2 className="mb-4 font-[400] font-chango text-[26px]">Reset Password</h2>
                <p>We Will Send You an Email To Reset Your Password</p>
                <form className="text-left m-auto mt-6 my-10 bg-[#0A0A0A] w-[90%] p-[15px] rounded-[20px]" onSubmit={submitForm}>
                    <div>
                        <label htmlFor="email" className="block text-left">Email</label>
                        <input className="border-2 placeholder:text-white border-[#000] rounded-[12px] mb-2 px-4 py-2" type="email" id="email" name="email" placeholder="Enter Your Mail" value={email} required onChange={(e) =>(setEmail(e.target.value))} autoComplete="email"/>
                    </div>
                <button className="bg-[#CDFFAD] w-full rounded-[12px] text-black px-6 py-2 my-4" type="submit">Send</button>
                <p className="text-[#D9D9D9] text-center">Remember Password? <span className="underline font-bold">Signin</span></p>
                </form>
            </div>
            <FooterComp />
        </div>
    )
}

export default ResetComp;