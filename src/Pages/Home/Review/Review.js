import React, { useEffect, useState } from 'react';
import './Review.css'
import profile from '../../../images/user.png'
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


const Review = () => {
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('https://sleepy-headland-88881.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReview(data))
    } ,[])
    return (
        <div className='container'>
            <h1>What Our Customers Says</h1>
            <hr className='w-25 mx-auto bg-danger mb-4 mt-0'/>
            <Link to='/allreviews'><p className='text-start'>Reviews ({review.length})</p></Link>
            <div>
                <ul className='row'>
                    {
                        review.slice(0, 3).map(rv => <li className='col-12 col-md-6 col-lg-4'>
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
        </div>
    );
};

export default Review;