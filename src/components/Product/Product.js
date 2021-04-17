import React from 'react';
import '../Product/Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
console.log(props);
const {img , name, seller,price, stock}= props.product;
    return (
        <div className="product">
            
            <div>
                <img  src={img} alt=""/>
            </div>
            <div>
                    <h3 className="product-name">{name}</h3>
                    <br/>
                    <p><small>by : {seller}</small></p>
                    <br/>
                    <p><small>Price:${price}</small></p>
                    <br/>
                <button className="main-button"
                
                onClick={() => props.handle(props.product)}
                > 
                               
                <FontAwesomeIcon icon={faShoppingCart}/> Add Item </button>
                    <p><small>Only {stock} left in stock - Order Soon</small></p>
                </div>
            </div>
    );
};

export default Product;