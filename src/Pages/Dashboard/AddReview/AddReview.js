import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const {user} = useAuth()
    const [success, setSuccess] = useState(false)
    const initInfo = {customerName: user.displayName, feedback: 'no comments', rating: '5', img: user.photoURL}
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
        fetch(`https://sleepy-headland-88881.herokuapp.com/reviews`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true)
                }
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
                <Form.Select aria-label="Default select example" onBlur={handleOnBlur} style={{width:'90%', margin:'0 auto'}} name="rating">
                    <option placeholder='5'>5</option>
                    <option placeholder="4">4</option>
                    <option placeholder="3">3</option>
                    <option placeholder="2">2</option>
                    <option placeholder="1">1</option>
                </Form.Select>
                <br/>
                <Button type="submit" variant="contained">Submit</Button>
            </form>
            {
                success && <Alert variant='success'>Thank you for Your Feedback</Alert>
            }
        </div>
    );
};

export default AddReview;