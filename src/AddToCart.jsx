import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const AddToCart = () => {

    const cartSelector = useSelector((state) => state.cart.items|| [] );
    // console.log("cart item:" ,cartSelector);

    return (
        <div className="cart">
            <Link to="/cart">
            <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" className="cart-icon" alt="logo" />
            <span className="cart-count">{cartSelector.length}</span></Link>
        </div>
    )
}

export default AddToCart