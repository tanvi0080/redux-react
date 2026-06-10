import { useDispatch, useSelector } from "react-redux";
import AddToCart from "./AddToCart";
import { addItem, removeItem } from "./redux/slice";
import { useEffect } from "react";
import { fetchProducts } from './redux/productslice';

const Product = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())

    }, [dispatch]);
    const productSelector = useSelector((state) => state.product.items);
    // console.log("products:", productSelector);
    const cartSelector = useSelector((state) => state.cart.items);
    return (
        <div className="grid">

            {
                productSelector.length && productSelector.map((item) => (
                    <div className="card" key={item.id}>
                        <img src={item.thumbnail} />
                        <div className="content">
                            <div className="title">{item.title}</div>
                            <div className="brand">{item.brand}</div>
                            <div className="price">{item.price}</div>
                            <div className="rating">{item.rating}</div>
                            {
                                cartSelector.find(cartItem => cartItem?.id === item.id )?
                                <button  onClick={() => dispatch(removeItem(item))} className="clear-btn btn-disable">Remove from cart</button>
                                :
                                <button onClick={() => dispatch(addItem(item))} className="clear-btn">Add to cart</button>
                            
                            }
                            
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Product;