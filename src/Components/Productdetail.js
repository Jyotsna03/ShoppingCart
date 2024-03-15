import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'

function Productdetail() {
    const { id } = useParams()
    const [Product, setProduct] = useState({})
    useEffect(() => {
        const filterProduct = items.filter((Product) => Product.ID == id)
        setProduct(filterProduct[0])
        //console.log(filterProduct)
    }, [id])

    return (
        <>
            <div className="container con">
                <div className="img">
                    <img src={Product.img} />
                </div>
                <div className='text-center'>

                    <div className="card-body">
                        <h1 className="card-title">{Product.Name}</h1>
                        <p className="card-text"></p>
                        <button className='btn btn-primary mx-3'>{Product.Price} ₹ </button>
                        <button className='btn btn-warning'>Add to cart </button>
                    </div></div>
            </div>
        </>

    )
}

export default Productdetail;
