import React from 'react'
import './header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <nav className="header">

        {/* Loho on the left->img_logo */}
        <Link to='/'>
        <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
        </Link>

        {/*Search Box */}
        <div className="header_search">
        <input type='text' className="header_searchInput"/>
        <SearchIcon className="header_searchIcon"/>
        </div>

        {/* Three Links */}
        <div className="header_nav">
        {/* First Link */}
        <Link to='/login' className="header_link">
        <div className="header_option">
        <span className="header_optionLineOne">Hello Haider</span>
        <span className="header_optionLineTwo">Sign In</span>
        </div>
        </Link>

        {/* Second link */}
        <Link to='/' className="header_link">
        <div className="header_option">
        <span className="header_optionLineOne">Returns</span>
        <span className="header_optionLineTwo">& Orders</span>
        </div>
        </Link>

        {/* Third Link */}
        <Link to='/' className="header_link">
        <div className="header_option">
        <span className="header_optionLineOne">Your</span>
        <span className="header_optionLineTwo">Prime</span>
        </div>
        </Link>

        {/* Shopping Baskets */}
        <Link to="/checkout" className="header_link">
        <div className="header_optionBasket">
        <ShoppingBasket className="header_shoppingBasket"/>
        <span className="header_basketCount">0</span>
        </div>
        </Link>
        </div>
        
        </nav>
    )
}

export default Header
