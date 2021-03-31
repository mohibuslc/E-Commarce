    import React from 'react';
    import logo from '../../images/logo.png';
    import './Header.css';
    const head = () => {
        return (
            <div className ="head">
                <img src={logo} alt=""/>
                <nav>

                    <a href="/SHOP">SHOP</a>
                    <a href="/MANAGING">MANAGING ORDER</a>
                    <a href="/Contract">CONTRACT</a>
                    
                    

                </nav>

            </div>
        );
    };

    export default head;