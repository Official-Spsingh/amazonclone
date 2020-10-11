import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
function SubtotalComponent() {
    const [{ basket }, dispatch] = useStateValue()
    const getCartValue = () => {
        let sum = 0
        basket.map(b => {
            sum = sum + b.price
        })
        return sum
    }
    return (
        <div className='subtotal'>
            <CurrencyFormat

                renderText={
                    (value) => (
                        <>
                            <p>
                                Subtotal ({basket.length} items) :
                                <strong> ₹ {getCartValue()}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" />This order contains a gift
                            </small>
                        </>
                    )
                }
                decimalScale={2}
                value={1899}
                displayType="text"
                thousandSeperator={true}
                prefix={"₹"}

            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default SubtotalComponent
