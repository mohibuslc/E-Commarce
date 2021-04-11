    import React from 'react';
    import logo from '../../images/logo.png';
    import './Header.css';
    const head = () => {
        return (
            <div className ="head">
                <img src={logo} alt=""/>
                <nav style={{textAlign:"left"}}>

                    <a href="/SHOP">SHOP</a>
                    <a href="/MANAGING">Order_Reviews</a>
                    <a href="/Contract">Manage_Inventory</a>
                    
            
                

        
                </nav>

            </div>
        );
    };

    export default head;