import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        const user = {email}
        fetch('https://sleepy-headland-88881.herokuapp.com/customers/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='email' onBlur={handleOnBlur}/>
                <button type='submit'>Make Admin</button>
            </form>
            {
                success && <Alert variant='success'></Alert>
            }
        </div>
    );
};

export default MakeAdmin;