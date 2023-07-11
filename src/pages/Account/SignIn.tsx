import React from 'react'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { AuthContext, TAuthorizationStage } from '../../auth/context/AuthContext';
import axios from 'axios';
import { TLocalStorage } from '../../auth/types/LocalStorage';
import { CurrentUserContext } from '../../auth/provider/CurrentUserProvider/CurrentUserProvider';
import jwt_decode from "jwt-decode";
import { useTranslation } from 'react-i18next';
import i18n from "../../i18next";

interface Props {}


   type TLoginForm = {
        email: string,
        password: string,
      };




const SignIn = () => {
    const { t } = useTranslation();
    function handleClick(lang:any) {  
      i18n.changeLanguage(lang);
    }
    const navigate = useNavigate(); 
    const {setStatus} = useContext(AuthContext);
    const {setCurrentUser} = useContext(CurrentUserContext);
 
    const { 
        register,
         handleSubmit, 
         watch, 
         setError,
         formState: { errors } 
    } = useForm<TLoginForm>();
    
    async function onSubmit(data: TLoginForm) {
        try{
            const resp = await axios.post("http://localhost:3001/auth/signin", data);
            console.log(resp.data.accessToken);
            navigate('/')
            
            if(resp.data.accessToken) {
                const decodedToken = jwt_decode(resp.data.accessToken);
                localStorage.setItem("ACCESSTOKEN", resp.data.accessToken)
                setStatus(TAuthorizationStage.AUTHORIZED)
                setCurrentUser({
                    user_id: (decodedToken as { id: string; role: string }).id,
                    user_role: (decodedToken as { id: string; role: string }).role,
                  });
            }

            console.log(resp. data);
            
            
        }catch(error:any) {
            setError("root", {message: "something went wrong"})
        }
        
    }
    
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            {/* <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" /> */}
            E-SHOP    
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    {t("Sign in to your account.1")}
                </h1>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("Your email.1")}</label>
                        <input type="email"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="name@company.com"  {...register("email", {required: true})}/>
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("Password.1")}</label>
                        <input type="password"  placeholder="••••••••" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        {...register("password", {required: true})}/>
                    </div>
                    <div className="flex items-center justify-between">
                        {/* <div className="flex items-start">
                            <div className="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                            </div>
                          
                        </div> */}
                        
                    </div>
                    <button type="submit" className="w-full text-white  hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  );
};

export default SignIn;

