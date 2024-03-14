import React from 'react'
import { items } from './Data'


export const Product = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {
                        items.map((Product) => {
                            return (
                                <>
                                    <div className='col-lg-4'>

                                        <div className="card" style={{ width: '18rem' }}>
                                            <img src={Product.Image} ></img><div className="card-img-top" ></div>

                                            <div className="card-body">
                                                <h5 className="card-title">{Product.Name}</h5>
                                                <p className="card-text">{Product.Desc}</p>
                                                <button className='btn btn-primary mx-3'>{Product.Price} ₹ </button>
                                                <button className='btn btn-warning'>Add to cart </button>

                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
            </div>

        </>
    )
}
