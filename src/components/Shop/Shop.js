import React from 'react';
import fakeData from '../../fakeData';
import {useState} from 'react';



const Shop = () => {

    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);
   

    
    return (
        
        <div>
    <h1>This Is Shop</h1>
    <p>{products.length}</p>


    <u>
        {

            products.map(kl => <li>{kl.name}</li>)
        }
    </u>
        </div>
    );
};

export default Shop;