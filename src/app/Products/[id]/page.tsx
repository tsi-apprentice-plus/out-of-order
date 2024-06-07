import React, { useState, useEffect } from 'react';
import getProduct from './getProductsApi';
import Image from 'C:/React/out-of-order/public/JM.PNG';
import styled

interface ProductPageProps{

    params: {id: string}
} 

async function App({ params }: ProductPageProps) {

    // API gets fetched 

    const id = params.id
    console.log(id)
 
    const product = await getProduct(params.id)
    console.log(product)


    {/* Product card */ }


    return (

        <div className="product-card-container">

            <div className="card">
                <span>{product.productName}</span>
                <br />
                <span>Price: £{product.price}</span>
                <hr />

            

            {/* Display product information in a dropdown */}

            <details style = {{color: 'white'}}>
                <summary>Product Info</summary>
                <table>
                    <tbody>
                        <tr>
                            <td>Item</td>
                            <td>{product.Item}</td>
                        </tr>
                        <tr>
                            <td>Release Date:</td>
                            <td>{product.releaseDate}</td>
                        </tr>
                        <tr>
                            <td>Availability:</td>
                            <td>{product.Available}</td>
                        </tr>
                    </tbody>
                </table>
            </details>
            </div>
        </div>
    )
}

export default App;