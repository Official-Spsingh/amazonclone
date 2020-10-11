import React from 'react'
import CartList from './CartList'
import SubtotalComponent from './SubtotalComponent'
function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/jupiter20/unrecPC/Main_header_PC_T2.jpg" />
                <div>
                    <h2 className='checkout__title'>Your Shopping Cart</h2>
                    <CartList />
                </div>
            </div>
            <div className='checkout__right'>
                <SubtotalComponent />
            </div>
        </div>
    )
}

export default Checkout
