import { useState, useEffect } from "react";
import { useAuthStore } from "../Store/useAuthStore.js";
import NavBarComp from "../components/Navbar.jsx";
import FooterComp from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { login } = useAuthStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await login(formData);
      console.log("Login Successful", response);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      console.error("Login Error:", error);
      alert(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="bg-[#1c1c1c] w-full">
      <NavBarComp />
      <div className="md:w-[510px] m-auto text-[#fff] text-center py-6">
        <h2 className="mb-4 font-[400] font-chango text-[26px]">Login</h2>
        <form
          className="text-left m-auto my-10 bg-[#0A0A0A] w-[90%] p-[15px] rounded-[20px]"
          onSubmit={submitForm}
        >
          <div>
            <label htmlFor="email" className="block text-left">
              Email
            </label>
            <input
              className="border-2 bg-[#2B2B2B] rounded-[12px] w-full py-3 placeholder:text-white border-[#000] mb-2 px-4"
              type="email"
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
            <label htmlFor="password" className="block text-left">
              Password
            </label>
            <input
              className="border-2 bg-[#2B2B2B] rounded-[12px] w-full py-3 placeholder:text-white border-[#000] mb-2 px-4"
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              value={formData.password}
              required
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <Link to="/forgot-password" className="underline text-[#CDFFAD] text-right">
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
              "Sign In"
            )}
          </button>
          <p className="text-[#D9D9D9] text-center">
            Don't Have An Account?{" "}
            <Link to="/sign-up" className="underline font-bold">
              Signup
            </Link>
          </p>
        </form>
      </div>
      <FooterComp />
    </div>
  );
};

export default LoginPage;
