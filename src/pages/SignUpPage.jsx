import { useState } from "react";
import { useAuthStore } from "../Store/useAuthStore.js"
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";

const SignUpPage = () => {

    const { register } = useAuthStore();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type:'',
        password: '',
        password_confirmation: ''
    });

    const submitForm = async(e) => {
        e.preventDefault();
        try {
            console.log("formData",formData);
            const response = await register(formData);
           console.log("Registration Successful", response);
        } catch (error) {
            console.error("Error submitting form:", error);
            console.log(error.message);
        }
        
    }

  return (
    <div className="bg-[#1c1c1c] w-full text-white">
        <NavBarComp />
        <div className="md:w-[510px] m-auto my-10 text-[#fff] text-center py-6">
        <h2 className="mb-4 font-[400] font-chango text-[26px]">Sign Up</h2>
        <form className="text-left m-auto mt-6 my-10 bg-[#0A0A0A] w-[90%] p-[15px] rounded-[20px]" onSubmit={submitForm}>
            <div className="flex gap-2">
                <div>
                    <label className="block" htmlFor="first name">First Name</label>
                    <input className="border-2 placeholder:text-[#D9D9D9] border-[#000] mb-6 px-10 py-2" type="text" id="username" name="first name" placeholder="Name" value={formData.name} required onChange={(e) =>(setFormData((formData) =>({ ...formData, name: e.target.value })))} autoComplete="name"/>
                </div>
                <div>
                    <label className="block" htmlFor="name">Last Name</label>
                    <input className="border-2 text-[#D9D9D9] border-[#000] mb-6 px-10 py-2" type="text" id="username" name="name" placeholder="Name" value={formData.name} required onChange={(e) =>(setFormData((formData) =>({ ...formData, name: e.target.value })))} autoComplete="name"/>
                </div>
            </div>
            <div>
                <input className="border-2 placeholder:text-[#D9D9D9] border-[#000] mb-6 px-10 py-2" type="email" id="email" name="email" placeholder="Email" value={formData.email} required onChange={(e) =>(setFormData({...formData, email: e.target.value}))} autoComplete="email"/>
            </div>
            <div>
                <input className="border-2 placeholder:text-[#D9D9D9] border-[#000] mb-6 px-10 py-2" type="password" id="password" name="password" placeholder="Password" value={formData.password} required onChange={(e) =>(setFormData({...formData, password: e.target.value}))}/>
            </div>
            <div>
                <input className="border-2 placeholder:text-[#D9D9D9] border-[#000] mb-6 px-10 py-2" type="password" id="password_confirmation" name="password_confirmation" placeholder="Confirm Password" value={formData.password_confirmation} required onChange={(e) =>(setFormData({...formData, password_confirmation: e.target.value}))}/>
            </div>
            <button className="bg-[#CDFFAD] w-full rounded-[12px] text-black px-6 py-2 my-4" type="submit">Send</button>
            <p className="text-[#D9D9D9] text-center">Already Have An Account? <span className="underline font-bold">Signin</span></p>

        </form>
    </div>
    <FooterComp />
    </div>  
  )
}

export default SignUpPage;