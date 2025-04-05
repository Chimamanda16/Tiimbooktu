import { useState } from "react";
import { useAuthStore } from "../Store/useAuthStore.js"
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
    <div className="text-[#000] text-center min-h-screen py-6">
        <h2 className="mb-4 font-bold">Login</h2>
        <form className="w-[80%] m-auto text-[#000]" onSubmit={submitForm}>
            <div>
                <input className="border-2 placeholder:text-[#000] border-[#000] mb-6 px-10 py-2 w-[40%]" type="email" id="email" name="email" placeholder="Email" value={formData.email} required onChange={(e) =>(setFormData({...formData, email: e.target.value}))} autoComplete="email"/>
            </div>
            <div>
                <select className="border-2 placeholder:text-[#000] border-[#000] mb-6 px-10 py-2 w-[40%]" name="type" placeholder="Type" id="type" value={formData.type} required onChange={(e) => (setFormData({ ...formData, type: e.target.value }))}>
                    <option value="" disabled>Select a role</option>
                    <option value="customer">customer</option>
                    <option value="admin">admin</option>
                </select>
            </div>
            <div>
                <input className="border-2 placeholder:text-[#000] border-[#000] mb-6 px-10 py-2 w-[40%]" type="password" id="password" name="password" placeholder="Password" value={formData.password} required onChange={(e) =>(setFormData({...formData, password: e.target.value}))}/>
            </div>
            <button className="bg-[#000] text-[#fff] px-6 py-2 mt-4" type="submit">Login</button>
        </form>
    </div>
  )
}

export default LoginPage;