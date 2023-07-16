import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate } from 'react-router-dom'
import { t } from 'i18next'
import { FaSearch } from 'react-icons/fa'
import { paginationItems } from '../../../constants'
interface Props {}

function Search(props: Props) {
    const {} = props
    const [searchValue, setSearchValue] = useState('')
    const [products, setProducts] = useState([])

    const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showSearchBar, setShowSearchBar] = useState(false);
    console.log(products);
    
    async function searchProducts() {
        console.log(searchValue);
        
        try {
            const resp = await axios.get(`http://localhost:3001/products?search=${searchValue}`)
            setProducts(resp.data)
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        searchProducts()

    }, [searchValue])

  
    
      
    return (
        <>
        
        <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl my-[100px]">
        <input type='search' value={searchValue} onChange={(e) => setSearchValue(e.target.value) }
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5     " placeholder="Search Mockups, Logos, Design Templates...'/>
            <FaSearch className="w-5 h-5" />
            {searchValue && (
              <div
                className={`w-full mx-auto h-96 bg-white top-16 absolute left-0 z-50 overflow-y-scroll shadow-2xl scrollbar-hide cursor-pointer`}
              >
                {searchValue &&
                  products.map((item:any) => (
                    <div
                      
                      
                      className="max-w-[600px] h-28 bg-gray-100 mb-3 flex items-center gap-3"
                    >
                      <img className="w-24" src='https://1.bp.blogspot.com/-CY6Dp8YzhYU/UUtV35dxZeI/AAAAAAAAAGg/rhdO471T3kw/s1600/bestin-product-range.jpg' alt="productImg" />
                      <div className="flex flex-col gap-1">
                        <p className="font-semibold text-lg">
                          {item.title}
                        </p>
                        <p className="text-sm">
                          ID:{" "}
                          <span className="text-primeColor font-semibold">
                            {item.id}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </>
    )
}

export default Search

