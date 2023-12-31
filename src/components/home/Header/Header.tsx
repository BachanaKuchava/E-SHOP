import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import { logo, logoLight } from "../../../assets/images";
import Image from "../../designLayouts/Image";
import { navBarList } from "../../../constants";
import Flex from "../../designLayouts/Flex";
import { useTranslation } from 'react-i18next';
import i18n from "../../../i18next"; 
import { AuthContext } from "../../../auth/context/AuthContext";
import { TAuthorizationStage } from "../../../auth/type/auth.types";
import { CurrentUserContext } from "../../../auth/provider/CurrentUserProvider/CurrentUserProvider";


const Header = (): JSX.Element => {
  const [showMenu, setShowMenu] = useState(true);
  const [clicked, setClicked] = useState(false)
  const navigate = useNavigate();
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const location = useLocation();
  const {setStatus, status} = useContext(AuthContext)
  const {currentUser} = useContext(CurrentUserContext)
  const { t } = useTranslation();
  function handleClick(lang:any) {  
    i18n.changeLanguage(lang);
  }



  useEffect(() => {
    const ResponsiveMenu = (): void => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };

    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);

    return () => {
      window.removeEventListener("resize", ResponsiveMenu);
    };
  }, []);

function handleLogout() {
        localStorage.removeItem("ACCESSTOKEN");
        setStatus(TAuthorizationStage.UNAUTHORIZED);
}

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            <div>
           
              <h1 className="text-3xl">E-SHOP</h1>
            </div>
          </Link>
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                <>
                  

                  <NavLink to='/' className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  {t("Home.1")}
                  </NavLink>
                  <NavLink to='/shop/(value)' className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  {t("Shop.1")}
                  </NavLink>
                  <NavLink to='/about' className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  {t("About.1")}
                  </NavLink>
                  <NavLink to='/contact' className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  {t("Contact.1")}
                  </NavLink>
                  <NavLink to='/journal' className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  {t("Journal.1")}
                  </NavLink>
                {
                  status === "authorized" && (
                    <NavLink to='/' onClick={() => handleLogout()} 
                    className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[red] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                    {t("Logout.1")}
                    </NavLink>
                  )
                }
                  {
                    currentUser.user_role === "ADMIN" && status === "authorized" && (
                      <NavLink to='/panel' className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  {t("Panel.1")}
                  </NavLink>
                    )
                  }

                </>
              </motion.ul>
            )}
            <HiMenuAlt2
              onClick={() => {setSidenav(!sidenav) 
              setClicked(true)}}
              className="inline-block  md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  { clicked && (
                  <div className="w-full h-full bg-primeColor p-6">
                  
                    <ul className="text-gray-200 flex flex-col gap-2" onClick={() => {setClicked(false)
                    setSidenav(false)}}>
                        <NavLink to='/' className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  {t("Home.1")}
                  </NavLink>
                  <NavLink to='/shop/(value)' className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  {t("Shop.1")}
                  </NavLink>
                  <NavLink to='/about' className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  {t("About.1")}
                  </NavLink>
                  <NavLink to='/contact' className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  {t("Contact.1")}
                  </NavLink>
                  <NavLink to='/journal' className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  {t("Journal.1")}
                  </NavLink>
                  {
                  status === "authorized" && (
                    <NavLink to='/' onClick={() => handleLogout()} 
                    className="font-normal hover:font-bold items-center text-lg text-[red]  hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                    {t("Logout.1")}
                    </NavLink>
                  )
                }
                  {
                    currentUser.user_role === "ADMIN" && status === "authorized" && (
                      <NavLink to='/panel' className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0">
                  {t("Panel.1")}
                  </NavLink>
                    )
                  }
                    </ul>
                    <div className="mt-4">
                      <h1
                        onClick={() => setCategory(!category)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        {t("Shop by Category.1")}{" "}
                        <span className="text-lg">{category ? "-" : "+"}</span>
                      </h1>
                      {category && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li onClick={() => {navigate('/shop/Accessories')
                        setClicked(false)
                        setSidenav(false)  
                        } }
                className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                {t("Accessories.1")}
                </li>               
                <li  onClick={() => {navigate('/shop/Electronics')
               setClicked(false)
               setSidenav(false)   
              } }
                className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                {t("Electronics.1")}
                </li>            
                <li onClick={() => {navigate('/shop/Homeappliances')
               setClicked(false)
               setSidenav(false)   
              } } 
                className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                {t("Home appliances.1")}
                </li>
                        </motion.ul>
                      )}
                    </div>
                    <div className="mt-4">
                      <h1
                        onClick={() => setBrand(!brand)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        {t("Shop by Brand.1")}
                        <span className="text-lg">{brand ? "-" : "+"}</span>
                      </h1>
                      {brand && (
                        <motion.ul
                          initial={{ y: 15, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-sm flex flex-col gap-1"
                        >
                          <li className="headerSedenavLi">New Arrivals</li>
                          <li className="headerSedenavLi">Gudgets</li>
                          <li className="headerSedenavLi">Accessories</li>
                          <li className="headerSedenavLi">Electronics</li>
                          <li className="headerSedenavLi">Others</li>
                        </motion.ul>
                      )}
                    </div>
                  </div> )}
                  <span
                    onClick={() => {setSidenav(false) 
                    setClicked(false)}}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
