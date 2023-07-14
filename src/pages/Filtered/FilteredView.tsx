import axios from 'axios';
import { t } from 'i18next';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../../components/pageProps/Breadcrumbs';
import Pagination from '../../components/pageProps/shopPage/Pagination';
import ProductBanner from '../../components/pageProps/shopPage/ProductBanner';
import ShopSideNav from '../../components/pageProps/shopPage/ShopSideNav';
import Product from '../../components/home/Products/Product';
interface ItemsProps {
    currentItems: {
      id: any;
      img: any;
      title: any;
      price: any;
      item:any;
  
    }[];
  }
interface Props {}

function FilteredView(props: Props) {




    function Items({ currentItems }: ItemsProps) {
  
  
      return (
        <>
          {currentItems &&
            currentItems.map((item) => (
              <div key={item.id} className="w-full">
                <Product
                  id={item.id}
                  // img={item.img}
                  title={item.title}
                  price={item.price}
                  item={item}
                  // des={item.des}
                />
              </div>
            ))}
        </>
      );
    }

    const [prevLocation, setPrevLocation] = useState("");
const param:any = useParams();
const [productData, setProductData] = useState([]);

const [currentPage, setCurrentPage] = useState(1);
const pageSize = 4;
const startIndex = (currentPage - 1) * pageSize;
   const endIndex = startIndex + pageSize;
   const currentProducts = productData.slice(startIndex, endIndex);

// const [total, setTotal] = useState(0);
const total = productData.length;
const pages: any = [];
  for (let i = 1; i <= Math.ceil(total / 4); i++) {
    pages.push(i);
  }
// setTotal(productData.length)
useEffect(() => {
    try {
      (async function () {
        try {
            const resp = await axios.get(`http://localhost:3001/products`);
            ;
            setProductData(
              resp.data.filter(
                (product: any) =>
                  product.price > param.value1 && product.price < param.value2
              )
            );
            // setTotal(productData.length)
            
        } catch (error) {
        }
      })();
    } catch (error) {
      console.log(error);
    }
  }, [param.value1, param.value2]);
    return (
        <>
        <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title={t("Product.1")} prevLocation={prevLocation}/>
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
      <Items currentItems={currentProducts} />

      </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 m-5">
        {pages.map((index: number) => (
          <div
            key={index}
            onClick={() => setCurrentPage(index)}
            className="w-[50px] h-[50px] bg-gray-600 text-white flex justify-center items-center max-lg:w-[35px] max-lg:h-[35px]"
          >
            {index}
          </div>
        ))}
      </div>

    </div>
        </>
    )
}

export default FilteredView
