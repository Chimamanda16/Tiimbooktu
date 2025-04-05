import { useState } from "react";
import { useAuthStore } from "../Store/useAuthStore.js"
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
            // console.log("formData",formData);
            const response = await register(formData);
           console.log("Registration Successful", response);
        } catch (error) {
            console.error("Error submitting form:", error);
            console.log(error.message);
        }
        
    }

  return (
    <div className="text-white text-center min-h-screen py-6">
        <h2 className="mb-4 font-bold">Register</h2>
        <form className="w-[80%] m-auto text-[#000]" onSubmit={submitForm}>
            <div>
                <input className="border-2 placeholder:text-[#000] border-[#000] mb-6 px-10 py-2 w-[40%]" type="text" id="username" name="name" placeholder="Name" value={formData.name} required onChange={(e) =>(setFormData((formData) =>({ ...formData, name: e.target.value })))} autoComplete="name"/>
            </div>
            <div>
                <input className="border-2 placeholder:text-[#000] border-[#000] mb-6 px-10 py-2 w-[40%]" type="email" id="email" name="email" placeholder="Email" value={formData.email} required onChange={(e) =>(setFormData({...formData, email: e.target.value}))} autoComplete="email"/>
            </div>
            <div>
                <select className="border-2 placeholder:text-[#000] border-[#000] mb-6 px-10 py-2 w-[40%]" name="type" placeholder="Type" id="type" value={formData.type} required onChange={(e) => (setFormData({ ...formData, type: e.target.value }))}>
                    <option value="" disabled selected>Select a role</option>
                    <option value="customer">customer</option>
                    <option value="admin">admin</option>
                </select>
            </div>
            <div>
                <input className="border-2 placeholder:text-[#000] border-[#000] mb-6 px-10 py-2 w-[40%]" type="password" id="password" name="password" placeholder="Password" value={formData.password} required onChange={(e) =>(setFormData({...formData, password: e.target.value}))}/>
            </div>
            <div>
                <input className="border-2 placeholder:text-[#000] border-[#000] mb-6 px-10 py-2 w-[40%]" type="password" id="password_confirmation" name="password_confirmation" placeholder="Confirm Password" value={formData.password_confirmation} required onChange={(e) =>(setFormData({...formData, password_confirmation: e.target.value}))}/>
            </div>
            <button className="bg-[#000] text-[#fff] px-6 py-2 mt-4" type="submit">Register</button>
        </form>
    </div>
  )
}

export default SignUpPage;