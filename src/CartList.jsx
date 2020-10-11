import React from 'react'
import { useStateValue } from './StateProvider'
function CartList() {
    const [{ basket }, dispatch] = useStateValue()
    const removeFromCart = (id) => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: {
                id: id,
            }
        })
    }
    return (
        <>
            {
                basket.length ? basket.map(b =>
                    <div className='cartlist'>
                        <div className="cartlist__image">
                            <img src={b.image} />
                        </div>
                        <div className='cartlist__info'>
                            <p className="cartlist__title">{b.title}</p>
                            <p className='cartlist__price'>
                                <small>₹</small>
                                <strong>{b.price}</strong>
                            </p>
                            <div className='cartlist__rating'>
                                {
                                    Array(b.rating).fill().map((_, i) => (
                                        <p>⭐</p>
                                    ))
                                }
                            </div>
                            <button onClick={() => removeFromCart(b.id)}>Remove from cart</button>
                        </div>
                    </div>
                ) :
                    <div className='emptycart'>
                        No Items in cart
                </div>
            }
        </>
    )
}

export default CartList
