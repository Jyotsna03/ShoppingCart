import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import 'bootstrap/dist/css/bootstrap.css';


function Productdetail() {
    const { id } = useParams();
    const [Product, setProduct] = useState({});

    useEffect(() => {

        const filterProduct = items.find((Product) => Product.ID === parseInt(id));
        if (filterProduct) {
            setProduct(filterProduct);
        } else {
            setProduct(null);
        }
    }, [id]);

    if (!Product) {
        return <div>Product not found</div>; // Render a message if product is not found
    }

    return (
        <div className="container con">
            <div className="img">
                <img src={Product.Image} alt={Product.Name} />
            </div>
            <div className="text-center">
                <div className="card-body">
                    <h1 className="card-title">{Product.Name}</h1>
                    <p className="card-text">{Product.Desc}</p>

                    <p className="card-text"></p>
                    <button className="btn btn-primary mx-3">{Product.Price} ₹</button>
                    <button className="btn btn-warning">Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Productdetail;
