
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "./Cart.css"

const Cart = () => {
    const {cart, clearCart, removeItem, totalQuantity, total } = useContext(CartContext)

    if (totalQuantity === 0) {
        return (
            <div className=" d-flex align-items-center">
                <h1 className="fs-1 text-uppercase ">El carrito esta vacio</h1>
                <div className="row">
                <Link to="/" className="option fst-italic ">Regresar a Productos</Link>
                </div>
            </div>
        )
    }


    return (
        <div >
            {cart.map(p => <CartItem key={p.id} {...p} removeItem={removeItem} />)}
            <h3 className="d-flex justify-content-end" >Total ${total}</h3>
            <div className="buttonCard" >
                <button onClick={() => clearCart()} className="btn btn-danger">Limpiar Carrito</button>
                <Link to="/checkout" className="btn btn-secondary">Checkout / Finalizar compra</Link>
            </div>
        </div>
    )
}

export default Cart;


