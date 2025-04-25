import {useState} from 'react'
import { useAuthStore } from "../Store/useAuthStore";
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const ResetPassword = () => {
    
    const { resetPassword} = useAuthStore();
    const query = useQuery();
    const token = query.get("token");
    const email = query.get("email");
    const [formData, setFormData] = useState({
        email: email,
        token: token,
        password: "",
        password_confirmation: ""
});

    const submitForm = async(e) => {
        e.preventDefault();
        try {
            console.log("FormData:",formData);
            console.log(formData);
            const res = await resetPassword(formData);
            console.log(res);
        } catch (error) {
            console.error("Error submitting form:", error);
            console.log(error.message);
        }
    }

  return (
    <div>
        <div className="md:w-[510px] m-auto my-10 text-[#fff] text-center py-6">
                <h2 className="mb-4 font-[400] font-chango text-[26px]">Reset Password</h2>
                <p>Enter A New Password To Secure Your Account</p>
                <form className="text-left m-auto mt-6 my-10 bg-[#0A0A0A] w-[90%] p-[15px] rounded-[20px]" onSubmit={submitForm}>
                    <div>
                        <label htmlFor="password" className="block text-left">Password</label>
                        <input className="border-2 placeholder:text-white border-[#000] rounded-[12px] mb-2 px-4 py-2 bg-[#595959] w-full" type="password" id="password" name="password" placeholder="Enter New Password" value={formData.password} required onChange={(e) =>(setFormData({...formData, password: e.target.value}))}/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-left">Password</label>
                        <input className="border-2 placeholder:text-white border-[#000] rounded-[12px] mb-2 px-4 py-2 bg-[#595959] w-full" type="password" id="password_confirmation" name="password_confirmation" placeholder="Confirm New Password" value={formData.password_confirmation} required onChange={(e) =>(setFormData({...formData, password_confirmation: e.target.value}))}/>
                    </div>
                    <button className="bg-[#CDFFAD] w-full rounded-[12px] text-black px-6 py-2 my-4" type="submit">Confirm</button>
                </form>
            </div>
    </div>
  )
}

export default ResetPassword