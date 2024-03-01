import React from "react";
import ProdInfo from "./prodinfo";

const Product = () => {
    return(
        <>
        <div className="container">
            {
                ProductData.map((curElm)=>
                {
                    return(
                        <>
                        <div className="Box">
                            <div className="Constant">
                                <div className="img-box">
                                    <img src={curElm.img} alt ={curElm.Title}></img>
                                </div>
                                <div className="detail">
                                    <div className="info">
                                        <h3>{curElm.Title}</h3>
                                         <p>{curElm.Price}</p>   
                                    </div>
                                    <button> View </button>
                                </div>
                            </div>
                            
                        </div>
                        </>
                    )
                })
            }
        </div>
        
        </>
    )
}

export default Product;
