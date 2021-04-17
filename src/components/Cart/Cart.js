
   
    import React from 'react';

        const Cart = (props) =>{ 
            const cart = props.cart; // connect  to the Cart page:
            //console.log(cart);

           // const total = cart.reduce((total, pdf) => total+pdf.price, 0);
            
           
           let total = 0;
            for (let i=0;  i<cart.length; i++ ){

                const kl = cart[i];
                total = total+kl.price;

            }

            let shipping =0;

            if (total>35){
                shipping = 0;

            }
            else if (total > 15){
                shipping = 4.99;

            }
            else if ( total > 0){

                shipping = 12.99;
            }
            

            
            return (

                <div>
                    <h4>Order_Summary</h4>
                    <p>Item_Order: {cart.length}</p>
                    <p>Product_Price:{total}</p>
                    <p>Shipping cost : {shipping}</p>
                    <p>Total-Price: {total+shipping}</p>
                </div>
            );
        
        };
        export default Cart;