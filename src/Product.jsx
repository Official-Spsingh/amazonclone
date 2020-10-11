import React from 'react'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {
    const [state, dispatch] = useStateValue()
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        })
    }
    return (
        <div className='product'>
            <div className='product__info'>
                <p className="title">{title}</p>
                <p className='product__price'>
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    {
                        Array(rating).fill().map((_, i) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
            </div>
            <img src={image} />
            <button onClick={addToCart}>Add to cart</button>
        </div>
    )
}

export default Product
