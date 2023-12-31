import axios from 'axios';
import { t } from 'i18next';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrumbs from '../pageProps/Breadcrumbs';
import Pagination from '../pageProps/shopPage/Pagination';
import ProductBanner from '../pageProps/shopPage/ProductBanner';
import ShopSideNav from '../pageProps/shopPage/ShopSideNav';
import Product from '../home/Products/Product';
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

function SearchView(props: Props) {
    const [products, setProducts] = useState([]);


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
const param = useParams();
const [products2, setProductss] = useState([]);
useEffect(() => {
    try {
        (
         async function getItems() {
            const resp = await axios.get(`http://localhost:3001/products?search=${param.value}`)
            setProducts(resp.data);
         }   
        )()
    } catch (error) {
        console.log(error);
        
    }
}, [param])
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
      <Items currentItems={products} />

      </div>
        </div>
      </div>

    </div>
        </>
    )
}

export default SearchView
