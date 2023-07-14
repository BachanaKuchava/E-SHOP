import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  Routes,
  ScrollRestoration,
  BrowserRouter,
} from "react-router-dom";
import Footer from "./components/home/Footer/Footer";
import FooterBottom from "./components/home/Footer/FooterBottom";
import Header from "./components/home/Header/Header";
import HeaderBottom from "./components/home/Header/HeaderBottom";
import SpecialCase from "./components/SpecialCase/SpecialCase";
import About from "./pages/About/About";
import SignIn from "./pages/Account/SignIn";
import SignUp from "./pages/Account/SignUp";
import Cart from "./pages/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Journal from "./pages/Journal/Journal";
import Offer from "./pages/Offer/Offer";
import Payment from "./pages/payment/Payment";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Shop from "./pages/Shop/Shop";
import MainPanel from "./components/adminPanel/MainPanel";
import { BsArrowRepeat } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "./auth/context/AuthContext";
import { CurrentUserContext } from "./auth/provider/CurrentUserProvider/CurrentUserProvider";
import Profile from "./pages/profile/Profile";
import SearchView from "./components/searchView/SearchView";
import FilteredView from "./pages/Filtered/FilteredView";

const Layout = () => {
  return (
    <div>
      <Header />
      <HeaderBottom />
      <SpecialCase />
      <Outlet />
      <Footer />
      <FooterBottom />
    </div>
  );
};
function App() {
  const { status } = useContext(AuthContext);
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <div className="font-bodyFont">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop/:value" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/offer" element={<Offer />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/paymentgateway" element={<Payment />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<Home />} />
            <Route path="/searchView/:value" element={<SearchView />} />
            <Route path="/filter/:value1/:value2" element={<FilteredView />} />
            {
              currentUser.user_role === "ADMIN" && (
                <><Route path="/panel" element={<MainPanel />} /></>
              )
            }

            {
              status === "authorized" && (
                <><Route path="/profile" element={<Profile />} /></>
              )
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
