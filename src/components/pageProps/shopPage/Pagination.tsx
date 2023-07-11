import React, { useEffect, useState } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import Product from "../../home/Products/Product";
import { paginationItems } from "../../../constants";
import { useTranslation } from 'react-i18next';
import i18n from "../../../i18next"; 
import axios from "axios";
import { useParams } from "react-router-dom";

const items = paginationItems;

interface ItemsProps {
  currentItems: {
    id: any;
    img: any;
    title: any;
    price: any;
    item:any;

  }[];
}

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

interface PaginationProps {
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage }) => {

  
  const [itemOffset, setItemOffset] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  // const pageCount = Math.ceil(items.length / itemsPerPage);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0)
  const limit = 4;

  const params = useParams();
console.log(params);


  

  const handlePageClick: ReactPaginateProps["onPageChange"] = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
   setCurrentPage(event.selected + 1);
    

    setItemOffset(newOffset);
    setItemStart(newOffset);
  };

  async function Total() {
          try {
            const resp = await axios.get(`http://localhost:3001/products?${params.value !== '(value)' && `category=${params.value}` }`)
            setTotal(resp.data.length);
            setPageCount(Math.ceil(total/limit));
            
          } catch (error) {
            
          }
  }



  async function getItems() {
    try {
      const resp = await axios.get(`http://localhost:3001/products?skip=${(currentPage - 1) * limit}&take=${limit}&${params.value !== '(value)' && `category=${params.value}` }` )

      setProducts(resp.data)
     
    
      
    } catch (error) {
      
    }
  }

  useEffect(() => {
    Total()
    getItems()
    
  }, [currentPage, total, params.value])

  const { t } = useTranslation();
  function handleClick(lang:any) {  
    i18n.changeLanguage(lang);
  }

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items currentItems={products} />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center ">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        
        />
          
  
      </div>
    </div>
  );
};

export default Pagination;
