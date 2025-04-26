import { useState } from "react";
import { useAuthStore } from "../Store/useAuthStore.js";
import NavBarComp from "../components/Navbar";
import FooterComp from "../components/Footer";
import { Link } from "react-router-dom";
import { Loader } from "lucide-react";

const SignUpPage = () => {
  const { register, loading } = useAuthStore();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    type: "customer",
    password: "",
    password_confirmation: "",
  });


  const submitForm = async (e) => {
    e.preventDefault();
    await register(formData);
  };

  return (
    <div className="bg-[#1c1c1c] w-full text-white">
      <NavBarComp />
      <div className="md:w-[510px] m-auto my-10 text-[#fff] text-center py-6">
        <h2 className="mb-4 font-[400] font-chango text-[26px]">Sign Up</h2>
        <form
          className="text-left m-auto mt-6 my-10 bg-[#0A0A0A] w-full p-[15px] rounded-[20px]"
          onSubmit={submitForm}
        >
          <div className="flex gap-2">
            <div>
              <label className="block" htmlFor="first_name">
                First Name
              </label>
              <input
                className="border-2 bg-[#2B2B2B] rounded-[12px] w-full py-3 placeholder:text-[#D9D9D9] border-[#000] mb-6 px-10"
                type="text"
                id="first_name"
                name="first_name"
                placeholder="Enter First Name"
                value={formData.first_name}
                required
                onChange={(e) =>
                  setFormData((formData) => ({
                    ...formData,
                    first_name: e.target.value,
                  }))
                }
                autoComplete="given-name"
              />
            </div>
            <div>
              <label className="block" htmlFor="last_name">
                Last Name
              </label>
              <input
                className="border-2 bg-[#2B2B2B] rounded-[12px] w-full py-3 text-[#D9D9D9] border-[#000] mb-6 px-10"
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Enter Last Name"
                value={formData.last_name}
                required
                onChange={(e) =>
                  setFormData((formData) => ({
                    ...formData,
                    last_name: e.target.value,
                  }))
                }
                autoComplete="family-name"
              />
            </div>
          </div>
          <div>
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              className="border-2 bg-[#2B2B2B] rounded-[12px] w-full py-3 placeholder:text-[#D9D9D9] border-[#000] mb-6 px-10"
              type="text"
              id="email"
              name="email"
              placeholder="Enter Your Mail"
              value={formData.email}
              required
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              autoComplete="email"
            />
          </div>
          <div>
            <label className="block" htmlFor="phone_number">
              Phone Number
            </label>
            <input
              className="border-2 bg-[#2B2B2B] rounded-[12px] w-full py-3 placeholder:text-[#D9D9D9] border-[#000] mb-6 px-10"
              type="text"
              id="phone_number"
              name="phone_number"
              placeholder="Enter Your Phone Number"
              value={formData.phone_number}
              required
              onChange={(e) =>
                setFormData({ ...formData, phone_number: e.target.value })
              }
              autoComplete="tel"
            />
          </div>
          <div>
            <label className="block" htmlFor="phone_number">
              Password
            </label>
            <input
              className="border-2 bg-[#2B2B2B] rounded-[12px] w-full py-3 placeholder:text-[#D9D9D9] border-[#000] mb-6 px-10"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              required
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block" htmlFor="confirm-Password">
              Confirm Password
            </label>
            <input
              className="border-2 bg-[#2B2B2B] rounded-[12px] w-full py-3 placeholder:text-[#D9D9D9] border-[#000] mb-6 px-10"
              type="password"
              id="confirm-Password"
              name="confirm-Password"
              placeholder="Confirm Your Password"
              value={formData.password_confirmation}
              required
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password_confirmation: e.target.value,
                })
              }
            />
          </div>
          <Link className="underline text-[#CDFFAD] text-right">
            Forgot Password?
          </Link>

          <button
            className="bg-[#CDFFAD] w-full rounded-[12px] text-black px-6 py-2 my-4 flex items-center justify-center"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader className="animate-spin" />
              </>
            ) : (
              "Sign Up"
            )}
          </button>
          <p className="text-[#D9D9D9] text-center">
            Already Have An Account?{" "}
            <Link to="/login" className="underline font-bold">
              Signin
            </Link>
          </p>
        </form>
      </div>
      <FooterComp />
    </div>
  );
};

export default SignUpPage;
