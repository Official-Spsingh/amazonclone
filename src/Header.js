import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider'

function Header() {
    const [state, dispatch] = useStateValue()
    return (
        <>
            <div className='header'>
                <Link to="/">
                    <img className='header__logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
                </Link>
                <div className='header__search'>
                    <input className='header__searchInput' type='text' />
                    <SearchIcon className='header__SearchIcon' />
                </div>
                <div className='header__nav'>

                    <div className='header__option'>
                        <span className='header__optL1'>
                            Hello Guest
                    </span>
                        <span className='header__optL2'>
                            Sign In
                   </span>
                    </div>
                    <div className='header__option'>
                        <span className='header__optL1'>
                            Returns &amp;
                    </span>
                        <span className='header__optL2'>
                            Orders
                   </span>
                    </div>
                    <div className='header__option'>
                        <span className='header__optL1'>
                            Your
                    </span>
                        <span className='header__optL2'>
                            Prime
                   </span>
                    </div>
                    <Link to="/checkout">
                        <div className='header__optionBasket'>
                            <ShoppingCartOutlinedIcon />
                            <span className='header__optL2 header__optL2BasketCount'>{state.basket.length}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header
