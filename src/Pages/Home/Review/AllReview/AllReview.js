import React, { useEffect, useState } from 'react';
import profile from '../../../../images/user.png'
import Rating from 'react-rating';
import Header from '../../../Sheard/Header/Header';
import Footer from '../../../Sheard/Footer/Footer';


const AllReview = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://sleepy-headland-88881.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data))
    } ,[])
    return (
        <div>
            <Header></Header>
            <h1>What Our Customers Says</h1>
            <hr className='w-25 mx-auto bg-danger mb-4 mt-0'/>
            <h6>Total Review({review.length})</h6>
            <div>
                <ul className='row container'>
                    {
                        review.map(rv => <li className='col-12 col-md-6 col-lg-4'>
                            <div>
                                <img className='review-img' src={rv.img ? rv.img : profile} alt=''/>
                                <span>{rv.customerName}</span>
                                <p><Rating 
                                emptySymbol="far fa-star icon-star"
                                fullSymbol="fas fa-star icon-star"
                                initialRating={rv.rating}
                                readonly/></p>
                                <p>{rv.feedback}</p>
                            </div>
                        </li>)
                    }
                </ul>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllReview;