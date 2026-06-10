import { useSelector,useDispatch } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { clearallItem, removeItem } from "./redux/slice";

function CartList() {
    const cartSelector = useSelector((state) => state.cart.items)
    console.log("cart data:",cartSelector);

    const [cartItems, setcartItems] = useState(cartSelector)

    useEffect(()=>{
        setcartItems(cartSelector)
    },[cartSelector])

    const dispatch = useDispatch(); 
    const navigate=useNavigate()
    const manageQuantity = (id, q) => {

        let quantity = parseInt(q) > 1 ? parseInt(q) : 1

        const cartTempItems = cartSelector.map((item) => {
            if (!item) return item;

            return item.id == id ?
                { ...item, quantity } : item;
                
        })

        setcartItems(cartTempItems);
    }
    const total = cartItems
        .filter(item => item)
        .reduce((sum, item) => {
            const qty = item.quantity || 1;
            return sum + item.price * qty;
        }, 0);

    const handlePlaceOrder=()=>{
        localStorage.clear();
        dispatch(clearallItem())
        alert("Order placed")
        navigate("/")
    }
    return (
        <>
            <div className="cart-container">
                <div className="cart-header">
                    <h2>your cart items</h2>
                    <span>{cartItems.length}items</span>
                </div>
                {
                    cartItems
                        .filter(item => item !== null)
                        .map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="item-info">
                                    <img src={item.thumbnail} />
                                    <div>
                                        <div className="item-details">
                                            <h4>{item.title}</h4>
                                            <p>{item.brand}</p>
                                        </div>
                                    </div>
                                    <div className="item-action">
                                        <div style={{ display: 'flex' }}>
                                            <input onChange={(e) => manageQuantity(item.id, e.target.value)} value={item.quantity?item.quantity:1} style={{ margin: '15px' }} type="number" placeholder="enter quality" />
                                            <div>
                                                <span className="price">
                                                    $ {item.price * (item.quantity || 1).toFixed(2)}
                                                </span>
                                                <button onClick={() => dispatch(removeItem(item))} className="clear-btn">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))

                }

                <div className="cart-footer">
                    Total: $    {total}
                </div>
                <button onClick={handlePlaceOrder}className="clear-btn">Order Place</button>

            </div>
        </>
    )
}

export default CartList