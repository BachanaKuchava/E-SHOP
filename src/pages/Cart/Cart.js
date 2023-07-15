import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { resetCart } from "../../redux/orebiSlice";
import { emptyCartImage } from "../../assets/images";
import ItemCard from "./ItemCard";
import { useTranslation } from 'react-i18next';
import i18n from "../../i18next";
import { useCart } from "react-use-cart";
import { AuthContext } from "../../auth/context/AuthContext";

const Cart = () => {
  const dispatch = useDispatch();
  const { status } = useContext(AuthContext);
  const products = useSelector((state) => state.orebiReducer.products);
  const [totalAmt, setTotalAmt] = useState("");
  const [shippingCharge, setShippingCharge] = useState("");
  useEffect(() => {
    let price = 0;
    products.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price);
  }, [products]);
  useEffect(() => {
    if (totalAmt <= 200) {
      setShippingCharge(30);
    } else if (totalAmt <= 400) {
      setShippingCharge(25);
    } else if (totalAmt > 401) {
      setShippingCharge(20);
    }
  }, [totalAmt]);
  const { t } = useTranslation();
  function handleClick(lang) {  
    i18n.changeLanguage(lang);
  }

  const {
    isEmpty,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  
  

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Cart" />
      { !isEmpty ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-[#F5F7F7] text-primeColor hidden lgl:grid grid-cols-5 place-content-center px-6 text-lg font-titleFont font-semibold">
            <h2 className="col-span-2">{t("Product.1")}</h2>
            <h2>{t("Price.1")}</h2>
            <h2>{t("Quantity.1")}</h2>
            <h2>{t("Sub Total.1")}</h2>
          </div>
          <div className="mt-5">
            {items.map((item) => (
              <div key={item._id}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>

          <button
            onClick={() => emptyCart()}
            className="py-2 px-10 bg-red-500 text-white font-semibold uppercase mb-4 hover:bg-red-700 duration-300"
          >
            {t("Reset Cart.1")}
          </button>

          <div className="flex flex-col mdl:flex-row justify-between border py-4 px-4 items-center gap-2 mdl:gap-0">
            <div className="flex items-center gap-4">
              <input
                className="w-44 mdl:w-52 h-8 px-4 border text-primeColor text-sm outline-none border-gray-400"
                type="text"
                placeholder="Coupon Number"
              />
              <p className="text-sm mdl:text-base font-semibold">
               {t("Apply Coupon.1")}
              </p>
            </div>
            <p className="text-lg font-semibold">{t("Update Cart.1")}</p>
          </div>
          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right">{t("Cart Total.1")}</h1>
              <div>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  {t("Sub Total.1")}
                  <span className="font-semibold tracking-wide font-titleFont">
                    ${cartTotal}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 text-lg px-4 font-medium">
                  {t("Shipping Charge.1")}
                  <span className="font-semibold tracking-wide font-titleFont">
                    ${shippingCharge}
                  </span>
                </p>
                <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                  {t("Total.1")}
                  <span className="font-bold tracking-wide text-lg font-titleFont">
                    ${cartTotal + shippingCharge}
                  </span>
                </p>
              </div>
              <div className="flex justify-end">

                {
                  status === 'authorized' ? (
                    <Link to="/paymentgateway">
                    <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                       {t("Proceed To Checkout.1")}
                    </button>
                  </Link>
                  ) : (
                    <Link to="/signin">
                    <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
                       {t("Proceed To Checkout.1")}
                    </button>
                  </Link>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCartImage}
              alt="emptyCart"
            />
          </div>
          <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold uppercase">
               {t("Your Cart Feels Lonely :).1")}
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
             {t("Your Shopping cart lives to serve. Give it purpose - fill it with books, electronics, videos, etc. and make it happy.1")}
              
            </p>
            <Link to="/shop">
              <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                 {t("Continue Shopping.1")}
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
