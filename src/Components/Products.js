import './Products.css';
import { AiFillStar } from 'react-icons/ai';


function Products() {
    return <>
    <section className='card-container'>
        <section className='card'>
            <img src='my-app\public\images\img1.jpg' alt = 'laptop' className='card-img'/>
            <div className='card-details'>
                <h3 className='card-title'>Laptop</h3>
                <section className='card-review'>
                    <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>
                    <span className='total-reviews'> 4 </span>
                </section>
                <section className='card-price'>
                    <div className='price'>
                        <p> ₹ 50,000 </p>
                    </div>
                </section>
            </div>
        </section>

        <section className='card'>
            <img src='my-app\public\images\img1.jpg' alt = 'laptop' className='card-img'/>
            <div className='card-details'>
                <h3 className='card-title'>Laptop</h3>
                <section className='card-review'>
                    <span className='total-reviews'></span>
                </section>
                <section className='card-price'>
                    <div className='price'>
                        <p> ₹ 50,000 </p>
                    </div>
                </section>
            </div>
        </section>

        <section className='card'>
            <img src='my-app\public\images\img1.jpg' alt = 'laptop' className='card-img'/>
            <div className='card-details'>
                <h3 className='card-title'>Laptop</h3>
                <section className='card-review'>
                    <span className='total-reviews'></span>
                </section>
                <section className='card-price'>
                    <div className='price'>
                        <p> ₹ 50,000 </p>
                    </div>
                </section>
            </div>
        </section>

        <section className='card'>
            <img src='my-app\public\images\img1.jpg' alt = 'laptop' className='card-img'/>
            <div className='card-details'>
                <h3 className='card-title'>Laptop</h3>
                <section className='card-review'>
                    <span className='total-reviews'></span>
                </section>
                <section className='card-price'>
                    <div className='price'>
                        <p> ₹ 50,000 </p>
                    </div>
                </section>
            </div>
        </section>

        <section className='card'>
            <img src='my-app\public\images\img1.jpg' alt = 'laptop' className='card-img'/>
            <div className='card-details'>
                <h3 className='card-title'>Laptop</h3>
                <section className='card-review'>
                    <span className='total-reviews'></span>
                </section>
                <section className='card-price'>
                    <div className='price'>
                        <p> ₹ 50,000 </p>
                    </div>
                </section>
            </div>
        </section>

        <section className='card'>
            <img src='my-app\public\images\img1.jpg' alt = 'laptop' className='card-img'/>
            <div className='card-details'>
                <h3 className='card-title'>Laptop</h3>
                <section className='card-review'>
                    <span className='total-reviews'></span>
                </section>
                <section className='card-price'>
                    <div className='price'>
                        <p> ₹ 50,000 </p>
                    </div>
                </section>
            </div>
        </section>

        <section className='card'>
            <img src='my-app\public\images\img1.jpg' alt = 'laptop' className='card-img'/>
            <div className='card-details'>
                <h3 className='card-title'>Laptop</h3>
                <section className='card-review'>
                    <span className='total-reviews'></span>
                </section>
                <section className='card-price'>
                    <div className='price'>
                        <p> ₹ 50,000 </p>
                    </div>
                </section>
            </div>
        </section>
    </section>
    </>
}

export default Products;
