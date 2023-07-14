import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ProductInfo from "../../components/pageProps/productDetails/ProductInfo";
import ProductsOnSale from "../../components/pageProps/productDetails/ProductsOnSale";
import axios from "axios";

interface Product {
  title: string;
  price: number;
  description: string;
  category: string;
}

const ProductDetails = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState<Product>();
console.log(productInfo);

  // useEffect(() => {
  //   setProductInfo(location.state.item);
  //   setPrevLocation(location.pathname);
  // }, [location]);

  const params = useParams();
  // console.log(params);
  
  async function getSingleProdut() {
    const resp = await axios.get(`http://localhost:3001/products/${params.id}`)
    setProductInfo(resp.data)
  }

  useEffect(() => {
    getSingleProdut();
  }, [])
  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div className="xl:-mt-10 -mt-7">
          <Breadcrumbs title="" prevLocation={prevLocation} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div className="h-full">
            <ProductsOnSale category={productInfo?.category} />
          </div>
          <div className="h-full xl:col-span-2">
            {productInfo && (
              <img
                className="w-full h-full object-cover"
                src='https://1.bp.blogspot.com/-CY6Dp8YzhYU/UUtV35dxZeI/AAAAAAAAAGg/rhdO471T3kw/s1600/bestin-product-range.jpg'
                
                
              />
              
            )}
            
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
            {/* {productInfo && <productInfo productInfo={productInfo} />} */}
            <ProductInfo productInfo={{
              title: productInfo?.title,
              price: productInfo?.price,
              des: productInfo?.description
            }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
