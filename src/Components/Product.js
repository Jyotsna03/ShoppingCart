import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { items } from './Data';

export const Product = ({ cart, setCart }) => {
    const addToCart = (ID, Price, Name, memory, SSD, screen, color, Image) => {

        const memoryName = memory && memory.name;
        const SSDName = SSD && SSD.name;

        const obj = {
            ID, Price, Name, memory: memoryName, SSD: SSDName, screen, color, Image
        };
        setCart([...cart, obj]);
        console.log("Cart element =", cart);
        toast.success('Added to Cart', {
            position: "top-right",
            autoClose: 1233,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1233}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            <div className='container'>
                <div className='row'>
                    {cart.map((product) => (
                        <div key={product.ID} className="col-lg-4 col-md-6 my-3 text-center mx">
                            <div className="card" style={{ width: '18rem' }}>
                                <Link to={`/product/${product.ID}`}>
                                    <img src={product.Image} className="card-img-top" alt={product.Name} />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{product.Name}</h5>
                                    <button className='btn btn-primary mx-3'>{product.Price} ₹ </button>
                                    <button
                                        onClick={() => addToCart(product.ID, product.Price, product.Name, product.memory, product.SSD, product.screen, product.color, product.Image)}
                                        className='btn btn-warning'>Add to cart </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
