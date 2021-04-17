        import React from 'react';
        import fakeData from '../../fakeData';
        import {useState} from 'react';
        import '../Shop/Shop.css';
        import Product from '../../components/Product/Product.js';
        import Cart from '../Cart/Cart.js';




        const Shop = () => {

            const first10 = fakeData.slice(0,10);
            const [products, setProducts] = useState(first10);



            const [cart , setCart]= useState([]);

            const handle = (product)=>{             // declare event handler : 

                    const newCart = [...cart,product];
                setCart (newCart);

            }
            

            return (
                
                <div className="shop-container">
        
        <div className="product-container">

    
                {

                    products.map(kl => <Product
                        handle = {handle}           // event handle Option : 
                        
                        product={kl}></Product>)
                }
        

        </div>
                <div className="cart-container">

            

            
                    <Cart cart ={cart}></Cart>    
                </div>
            </div>
            );
        };

        export default Shop;