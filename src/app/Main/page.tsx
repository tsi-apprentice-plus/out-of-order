"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import getProduct from '../Products/[id]/getProductsApi';
import { ProductData } from '../Products/[id]/getProductsApi';
import getAllProducts from './getAllProductsApi';
import Link from 'next/link';


function App(): JSX.Element {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');



  // API gets fetched 

  useEffect(() => {
    getAllProducts()
      .then(( data ) => setProducts(data));
  }, []);


  //Checks each character inputed

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    `${product.productName}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>

      {/* Search Bar Section */}
      <center>
        <div className="SearchBarSection">
          <h2 className="SectionTitle" style={{ color: "white" }}>Search for your desired item</h2>

          <p className="SectionDescription" style={{ color: "white" }}>
            OutOfOrder
            {/* <Image src="/JM.PNG" alt="OutOfOrder logo" width={200} height={150} /> */}
          </p>
        </div>
      </center>

      <div data-testid='mock-search-list' className='searchProducts'>
        <input
          type="text"
          className="Product_Search"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      {/* Product card */}

      <div className="product-card-container">
        {filteredProducts.map((product, index) => (
          <Link href={`/Products/${product.productId}`}>
            <div key={index} className="card">
              <span>{product.image}</span>
              <br/>
              <span style={{ textDecoration: "none!important" }}>{product.productName}</span>
              <br />
              <span>£{product.price}</span>
              <br />

            </div>
          </Link>
        ))}
      </div>

    </>
  );
}

export default App;
