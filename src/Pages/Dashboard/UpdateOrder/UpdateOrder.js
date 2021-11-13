import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Alert, Form } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../../Sheard/Footer/Footer';
import Header from '../../Sheard/Header/Header';

const UpdateOrder = () => {
    const {id} = useParams()
    const [success, setSuccess] = useState(false)
    const [order, setOrder] = useState({})
    const initialInfo = { customerName: order.customerName, price: order.price, status: order.status}
    const [orderInfo, setOrderInfo] = useState(initialInfo);


    useEffect(()=>{
        fetch(`https://sleepy-headland-88881.herokuapp.com/customers/${id}`)
        .then(res => res.json())
        .then(data => setOrder(data))
    },[id])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
    }

    const handleCustomerSubmit = e => {
        // collect data
        const updateDoc = {
            ...orderInfo,
        }
        //send to the server
        fetch(`https://sleepy-headland-88881.herokuapp.com/updateorder/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDoc)
        })
            .then(res => res.json())
            .then(data => {
                if(data.modifiedCount> 0){
                    setOrderInfo('')
                    setSuccess(true)
                }
            });

        e.preventDefault();
    }


    return (
        <div>
            <Header></Header>
            <form onSubmit={handleCustomerSubmit}>
                <input
                    style={{ width: '90%', margin: '10px' }}
                    id="outlined-size-small"
                    name="customerName"
                    onBlur={handleOnBlur}
                    placeholder={order.customerName}
                    size="small"
                />
                <br/>
                <input
                    style={{ width: '90%', margin:' 10px '}}
                    id="outlined-size-small"
                    name="price"
                    onBlur={handleOnBlur}
                    placeholder={order.price}
                    size="small"
                />
                <br/>
                <Form.Select aria-label="Default select example" onBlur={handleOnBlur} name="status">
                    <option placeholder={order.status}>{order.status}</option>
                    <option placeholder="Shipped">Shipped</option>
                </Form.Select>
                <br/>
                <Button type="submit" variant="contained">Submit</Button>
            </form>
            {
                success && <Alert variant='success'>Update Successfully</Alert>
            }
            <Footer></Footer>
        </div>
    );
};

export default UpdateOrder;