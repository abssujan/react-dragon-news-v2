import { Link, NavLink } from "react-router-dom";
import userPic from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const NavBar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
    .then(result => {
      
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div>
      <div className=" py-6 text-black relative">
        <nav>
          <div className="container px-4 mx-auto">
            <div className="">
              <div
                className="flex flex-col lg:flex-row justify-center lg:justify-around  items-center text-3xl gap-6 lg:text-base lg:gap-2 absolute h-screen w-screen top-0 left-full lg:left-0 lg:relative lg:h-auto lg:w-auto bg-white text-black lg:bg-transparent grow"
                id="navbar"
              >
                <ul className="flex">
                  <li>
                    <NavLink
                      to="/"
                      className="px-4 opacity-50 hover:opacity-100"
                      href="#"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="px-4 opacity-50 hover:opacity-100"
                      href="#"
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className="px-4 opacity-50 hover:opacity-100"
                      href="#"
                    >
                      Breaking News
                    </NavLink>
                    <NavLink
                      to="/register"
                      className="px-4 opacity-50 hover:opacity-100"
                      href="#"
                    >
                      Register
                    </NavLink>
                  </li>
                </ul>
                <ul className="mb-2 lg:mb-0 flex items-center space-x-4">
                  <li>
                    <img
                      className="w-10 h-10 rounded-full"
                      src={userPic}
                      alt="Rounded avatar"
                    />
                  </li>
                  <li>
                    {
                      user ?
                      <button onClick={handleSignOut} className=" bg-gray-500 text-white  hover:bg-gray-700 hover:text-white    rounded-sm px-4 py-1">
                        Sign Out
                      </button>
                      :
                      <Link to="/login">
                      <button className=" bg-gray-500 text-white  hover:bg-gray-700 hover:text-white    rounded-sm px-4 py-1">
                        Login
                      </button>
                    </Link>
                    }
                    
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
