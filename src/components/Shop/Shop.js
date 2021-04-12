    import React from 'react';
    import fakeData from '../../fakeData';
    import {useState} from 'react';
    import '../Shop/Shop.css';
    import Product from '../../components/Product/Product.js';




    const Shop = () => {

        const first10 = fakeData.slice(0,10);
        const [products, setProducts] = useState(first10);
    

        
        return (
            
            <div className="shop-container">
    
    <div className="product-container">

   
            {

                products.map(kl => <Product product={kl}></Product>)
            }
       

    </div>
            <div className="cart-container">

            <h3> This Is Cart</h3>

            </div>
                

    
            </div>
        );
    };

    export default Shop;