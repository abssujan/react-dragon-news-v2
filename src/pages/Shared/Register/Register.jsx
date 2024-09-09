import { FaUser, FaEnvelope, FaLock, FaArrowRight } from "react-icons/fa";
import Header from "../Header/Header";
import BreakingNews from "../../Home/BreakingNews/BreakingNews";
import loginLogo from '../../../assets/login.jpg'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import NavBar from "../NavBar/NavBar";

const Register = () => {

    const {createUser} = useContext(AuthContext);
    const handleRegister = e  => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password)
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }
  return (
    <div>
        <Header></Header>
        <BreakingNews></BreakingNews>
        <NavBar></NavBar>
      <section className="ezy__signup15 mt-10 light flex items-center justify-center py-14 md:py-24 bg-white dark:bg-[#0b1727] text-black text-opacity-90 dark:text-white">
        <div className="container px-4 mx-auto">
          <div className="flex justify-center">
            <div className="w-full md:w-2/3">
              <div className="bg-white dark:bg-slate-800 shadow-xl p-6 lg:p-12">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="w-full lg:w-1/2 lg:order-2">
                    <div className="flex flex-col items-center justify-center h-full mt-12 lg:mt-0">
                      <img
                        src={loginLogo}
                        alt=""
                      />
                      <div className="text-center mt-12">
                        <Link
                          to='/login'
                          className="underline hover:text-blue-600 duration-300"
                        >
                          I am already a member
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
                    <div className="flex flex-col h-full p-2 lg:p-6 xl:p-12">
                      <h2 className="text-3xl md:text-[45px] font-bold mb-2">
                        Sign Up
                      </h2>
                      <form onSubmit={handleRegister} className="mt-6">
                        <div className="w-full relative mb-6">
                          <input
                            type="text"
                            name="name"
                            className="bg-transparent border-b border-black dark:border-gray-200 focus:outline-none focus:border-blue-600 text-sm w-full py-2"
                            id="uname"
                            placeholder="Username"
                            required
                          />
                          <FaUser className="absolute top-1/2 -translate-y-1/2 right-2 opacity-80" />
                        </div>
                        <div className="w-full relative mb-6">
                          <input
                            type="email"
                            name="email"
                            className="bg-transparent border-b border-black dark:border-gray-200 focus:outline-none focus:border-blue-600 text-sm w-full py-2"
                            id="email"
                            placeholder="Email Address"
                            required
                          />
                          <FaEnvelope className="absolute top-1/2 -translate-y-1/2 right-2 opacity-80" />
                        </div>
                        <div className="w-full relative mb-6">
                          <input
                            type="password"
                            name="password"
                            className="bg-transparent border-b border-black dark:border-gray-200 focus:outline-none focus:border-blue-600 text-sm w-full py-2"
                            id="pass"
                            placeholder="Password"
                            required
                          />
                          <FaLock className="absolute top-1/2 -translate-y-1/2 right-2 opacity-80" />
                        </div>
                        {/* <div className="w-full relative mb-6">
                          <input
                            type="password"
                            className="bg-transparent border-b border-black dark:border-gray-200 focus:outline-none focus:border-blue-600 text-sm w-full py-2"
                            id="con-pass"
                            placeholder="Confirm Password"
                          />
                          <FaLock className="absolute top-1/2 -translate-y-1/2 right-2 opacity-80" />
                        </div> */}
                        <div className="form-group mb-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="remember-me"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="remember-me"
                            >
                              I agree all statements in
                              <a
                                href="#"
                                className="underline hover:text-blue-600"
                              >
                                {" "}
                                Terms & Conditions
                              </a>
                            </label>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="bg-blue-600 py-4 px-10 text-white hover:bg-opacity-95 duration-300 mt-4"
                        >
                          Register{" "}
                          <FaArrowRight className="inline-block ml-2" />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
