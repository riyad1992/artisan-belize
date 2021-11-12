import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const {user} = useAuth()
    const initInfo = {customerName: user.displayName,feedback: 'no comments', rating: '5', img: user.photoURL}
    const [reviewInfo, setReviewInfo] = useState(initInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...reviewInfo };
        newInfo[field] = value;
        setReviewInfo(newInfo);
    }

    const handleReviewSubmit = e => {
        // collect data
        const addReview = {
            ...reviewInfo,
        }
        //send to the server
        fetch(`http://localhost:5000/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            });

        e.preventDefault();
    }


    return (
        <div>
            <h1>Add a review please</h1>
            <form onSubmit={handleReviewSubmit}>
                <input
                    style={{ width: '90%', margin: '10px' }}
                    id="outlined-size-small"
                    name="customerName"
                    onBlur={handleOnBlur}
                    placeholder='Your Name'
                    size="small"
                />
                <br/>
                <input
                    style={{ width: '90%', margin:' 10px '}}
                    id="outlined-size-small"
                    name="feedback"
                    onBlur={handleOnBlur}
                    placeholder='Your Feedback'
                    size="small"
                />
                <br/>
                <Form.Select aria-label="Default select example" onBlur={handleOnBlur} name="rating">
                    <option placeholder='5'>5</option>
                    <option placeholder="4">4</option>
                    <option placeholder="3">3</option>
                    <option placeholder="2">2</option>
                    <option placeholder="1">1</option>
                </Form.Select>
                <br/>
                <Button type="submit" variant="contained">Submit</Button>
            </form>
        </div>
    );
};

export default AddReview;