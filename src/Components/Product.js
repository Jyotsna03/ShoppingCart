import React from 'react';
import { items } from './Data';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

export const Product = () => {
    return (
        <div className='container'>
            <div className='row'>
                {items.map((product) => (
                    <div key={product.ID} className="col-lg-4 col-md-6 my-3 text-center mx">
                        <div className="card" style={{ width: '18rem' }}>
                            <Link to={`/product/${product.ID}`}>
                                <img src={product.Image} className="card-img-top" alt={product.Name} />
                            </Link>
                            <div className="card-body">
                                <h5 className="card-title">{product.Name}</h5>

                                <button className='btn btn-primary mx-3'>{product.Price} ₹ </button>
                                <button className='btn btn-warning'>Add to cart </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
