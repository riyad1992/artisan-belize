import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const {user} = useAuth()
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReview(data))
    } ,[])
    return (
        <div>
            <h1>What Our Customers Says</h1>
            <div>
                <ul>
                    {
                        review.map(rv => <li>
                            <div>
                                <img src={user.photoURL} alt=''/><span>Rating: {rv.status}</span>
                                <h6>{rv.customerName}</h6>
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