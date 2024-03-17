import React from 'react'
import { Product } from './Product';
import { Link } from 'react-router-dom';


const Cart = ({ cart, setCart }) => {
    return (
        <>
            <div className='container m-5' style={{ width: "54%" }}>
                {
                    cart.length === 0 ? (
                        <>
                            <div className='text-center'>
                                <div className="row">

                                    <h1 className="text-center">Cart is empty</h1>

                                </div>
                                <Link to={"/product"} className='btn btn-warning '> Continue Shopping </Link>
                            </div>
                        </>

                    ) :
                        cart.map((product) => {
                            return (
                                <>
                                    <div className="card mb-3 my-5" style={{ width: '700px' }}>
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src={product.Image} className="img-fluid rounded-start" />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body text-center">
                                                    <h5 className="card-title">{product.Name}</h5>
                                                    <p className="card-text">{product.desc}</p>
                                                    <button className='btn btn-primary mx-3'>{product.Price} ₹ </button>
                                                    <button
                                                        className='btn btn-warning'>Buy Now </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}


            </div>
            {
                cart.length != 0 && (
                    <div className='container text-center my-5' style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <button className='btn btn-warning mx-5'> Checkout </button>
                        <button onClick={() => setCart("")} className='btn btn-danger'> Clear Cart </button>
                    </div>

                )
            }

        </>
    )
}

export default Cart;