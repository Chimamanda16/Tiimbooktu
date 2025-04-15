import { useState } from "react";
import { useAuthStore } from "../Store/useAuthStore.js"
import NavBarComp from "../components/Navbar.jsx";
import FooterComp from "../components/Footer.jsx";
const LoginPage = () => {

    const { login } = useAuthStore();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        type:''
    });

    const submitForm = async(e) => {
        e.preventDefault();
        try {
            console.log("formData",formData);
            const response = await login(formData);
           console.log("Login Successful", response);
        } catch (error) {
            console.error("Error submitting form:", error);
            console.log(error.message);
        }
    }

  return (
    <div className="bg-[#1c1c1c] w-full">
        <NavBarComp />
        <div className="md:w-[510px] m-auto text-[#fff] text-center py-6">
            <h2 className="mb-4 font-[400] font-chango text-[26px]">Login</h2>
            <form className="text-left m-auto my-10 bg-[#0A0A0A] w-[90%] p-[15px] rounded-[20px]" onSubmit={submitForm}>
                <div>
                    <label htmlFor="email" className="block text-left">Email</label>
                    <input className="border-2 placeholder:text-white border-[#000] rounded-[12px] mb-2 px-4 py-2" type="email" id="email" name="email" placeholder="Enter Your Mail" value={formData.email} required onChange={(e) =>(setFormData({...formData, email: e.target.value}))} autoComplete="email"/>
                </div>
                <div>
                    <label htmlFor="password" className="block text-left">Password</label>
                    <input className="border-2 placeholder:text-white rounded-[12px] border-[#000] mb-2 px-4 py-2" type="password" id="password" name="password" placeholder="Enter Password" value={formData.password} required onChange={(e) =>(setFormData({...formData, password: e.target.value}))}/>
                </div>
                <p className="underline text-[#CDFFAD] text-right">Forgot Password?</p>
                <button className="bg-[#CDFFAD] w-full rounded-[12px] text-black px-6 py-2 my-4" type="submit">Send</button>
                <p className="text-[#D9D9D9] text-center">Don't Have An Account? <span className="underline font-bold">Signup</span></p>
            </form>
        </div>
        <FooterComp />
    </div>
    
  )
}

export default LoginPage;