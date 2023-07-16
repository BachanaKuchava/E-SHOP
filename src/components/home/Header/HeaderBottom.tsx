import React, { useState, useRef, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart, FaGlobe } from "react-icons/fa";
import Flex from "../../designLayouts/Flex";
import { Link, useNavigate } from "react-router-dom";
import { paginationItems } from "../../../constants";
import { useTranslation } from 'react-i18next';
import i18n from "../../../i18next"; 
import "flag-icon-css/css/flag-icons.min.css";
import axios from "axios";
import { useCart } from "react-use-cart";
import { AuthContext } from "../../../auth/context/AuthContext";



const HeaderBottom = () => {
 
  const { status } = useContext(AuthContext);

 
  const [show, setShow] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('')
  const [clicked, setClicked] = useState(false);
  const navigate = useNavigate();
  const ref:any = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    
  }, [show, ref]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);



  const handleSearch = (e:any) => {
    setSearchQuery(e.target.value);
    
  };

  useEffect(() => {
    const filtered:any = paginationItems.filter((item) =>
      item.productName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    setFilteredProducts(filtered);
  }, [searchQuery]);


  useEffect(() => {
    if(localStorage.getItem("i18nextLng") === "en") {
      setCurrentLanguage("gb")
    } else {
      setCurrentLanguage("ge")
    }
  }, [clicked])

  const { t } = useTranslation();
  function handleLanguage(lang:any) {  
    i18n.changeLanguage(lang);
  }

  const [searchValue, setSearchValue] = useState('')

    const [products, setProducts] = useState([])
    

   
   
    
    async function searchProducts() {

        
        try {
            if (searchValue!== "") {
              console.log("gaeshva");
              const resp = await axios.get(`http://localhost:3001/products?search=${searchValue}`)
            setProducts(resp.data)
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        searchProducts()

    }, [searchValue])


    function NavigateToProduct() {
      setSearchValue('');
     
      if(searchValue !== "") {
            navigate(`/searchView/${searchValue}`)
      }
     
    }

    function navigateToSingleProtuct(id:any) {
      setSearchValue('');
      navigate(`/product/${id}`)
    
    }

    const {totalItems} = useCart();

  return (
    <div className="w-full bg-[#F5F5F3] relative">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
          <div
            onClick={() => setShow(!show)}
            ref={ref}
            className="flex h-14 cursor-pointer items-center gap-2 text-primeColor"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5" />
            <p className="text-[14px] font-normal">{t("Shop by Category.1")}</p>

            {show && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-36 z-50 bg-primeColor w-auto text-[#767676] h-auto p-4 pb-6"
              >
                <li onClick={() => navigate('/shop/Accessories') }
                className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                {t("Accessories.1")}
                </li>               
                <li  onClick={() => navigate('/shop/Electronics') }
                className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                {t("Electronics.1")}
                </li>            
                <li onClick={() => navigate('/shop/Homeappliances') } 
                className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                {t("Home appliances.1")}
                </li>
              </motion.ul>
            )}
          </div>
          <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
            <input
              className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              onChange={(e) => {handleSearch(e) 
              setSearchValue(e.target.value)}}
              value={searchValue}
              placeholder={t("Search your products here.1")}
            />
            <FaSearch className="w-5 h-5" onClick={() => NavigateToProduct()}/>
            {searchValue && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchValue &&  
                  products.map((item:any) => (
                    
                 
                    <div key={item.id}
                    onClick={() => navigateToSingleProtuct(item.id)
                       }
                      
                      
                      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                    >
                      <img className="w-24" src='https://1.bp.blogspot.com/-CY6Dp8YzhYU/UUtV35dxZeI/AAAAAAAAAGg/rhdO471T3kw/s1600/bestin-product-range.jpg' alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">
                          {item.title}
                        </p>
                        <p className="font-semibold text-lg">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <div onClick={() => setShowUser(!showUser)} className="flex">
              <FaUser />
              <FaCaretDown />
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-6 left-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
              >
                <Link to="/signin">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  {t("Login.1")}
                  </li>
                </Link>
                <Link onClick={() => setShowUser(false)} to="/signup">
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  {t("Sign Up.1")}
                  </li>
                </Link>
                <Link to={status === "authorized" ? "/profile" : "/signin"}>
                
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                {t("Profile.1")}
                </li>
                </Link>
               
              </motion.ul>
            )}
            <Link to="/cart">
              <div className="relative">
                <FaShoppingCart />
                <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                  {totalItems}
                </span>
              </div>
            </Link>
          </div>
          <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
            <div onClick={() => setShowLanguage(!showLanguage)} className="flex">
              <span className={`flag-icon flag-icon-${currentLanguage}`}></span>
              <FaCaretDown />
            </div>
            {showLanguage && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute top-6 left-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
              >
                
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] flex justify-around border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer"
                  onClick={() => {handleLanguage('en') 
                  setClicked(!clicked)
                  }}>
                    <span className="flag-icon flag-icon-gb"></span>
                    
                    <span >ENG</span>
                  </li>
                
                
                  <li className="text-gray-400 px-4 py-1 border-b-[1px] flex justify-around border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer"
                  onClick={() => {handleLanguage('ge') 
                  setClicked(!clicked)
                  }}>
                   <span className="flag-icon flag-icon-ge"></span>
                    
                    <span >GEO</span>
                  </li>
              
              </motion.ul>
            )}
            </div>
          
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
