    import React from 'react';
    import logo from '../../images/logo.png';
    import './Header.css';
    const head = () => {
        return (
            <div className ="head">
                <img src={logo} alt=""/>
                <nav>

                    <a href="/SHOP">Shop</a>
                    <a href="/MANAGING">MANAGIN ORDER</a>
                    <a href="/Contract">Contract</a>
                    
                    

                </nav>

            </div>
        );
    };

    export default head;