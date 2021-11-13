import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Footer from '../Sheard/Footer/Footer';
import Header from '../Sheard/Header/Header';


const Placeorder = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [show, setShow] = useState(false);
    const { user } = useAuth();
    const initialInfo = { customerName: user.displayName, email: user.email, phone: '' }
    const [customerInfo, setCustomerInfo] = useState(initialInfo);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    useEffect(() => {
        fetch(`https://sleepy-headland-88881.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[id])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...customerInfo };
        newInfo[field] = value;
        setCustomerInfo(newInfo);
    }

    const handleCustomerSubmit = e => {
        // collect data
        const customer = {
            ...customerInfo,
            productName: product.name,
            price: product.price,
            status: 'pending'
        }
        //send to the server
        fetch('https://sleepy-headland-88881.herokuapp.com/customers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if (data.insertedId) {
                //     
                //     handleClose()
                // }
            });

        e.preventDefault();
    }


    return (
        <div>
            <Header></Header>
            <div className='row container'>
                <div className='col-12 col-md-6 p-5'>
                    <img src={product?.img} alt='Product' style={{width:'100%', borderRadius:'20px'}}/>
                </div>
                <div className='col-12 col-md-6 p-5 text-start'>
                    <h2>{product?.name}</h2>
                    <h3 className='text-warning'>Price: ${product?.price} USD</h3>
                    <h4>Description: <br/><span style={{fontSize:'14px'}}>{product?.details}</span></h4>
                    <button  onClick={handleShow}>Buy Now</button>
                </div>
            </div>
            <>
                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>{product.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleCustomerSubmit}>
                            <input
                                style={{ width: '90%', margin: '10px' }}
                                id="outlined-size-small"
                                name="patientName"
                                onBlur={handleOnBlur}
                                placeholder={user.displayName}
                                size="small"
                            />
                            <br/>
                            <input
                                style={{ width: '90%', margin:' 10px '}}
                                id="outlined-size-small"
                                name="email"
                                onBlur={handleOnBlur}
                                placeholder={user.email}
                                size="small"
                            />
                            <br/>
                            <input
                                style={{ width: '90%', margin:' 10px '}}
                                id="outlined-size-small"
                                name="address"
                                onBlur={handleOnBlur}
                                placeholder='Your Address'
                                size="small"
                            />
                            <br/>
                            <input
                                style={{ width: '90%', margin: '10px' }}
                                id="outlined-size-small"
                                name="phone"
                                onBlur={handleOnBlur}
                                placeholder="Phone Number"
                                size="small"
                            />
                            <br/>
                            <Button show={show} type="submit" variant="contained">Submit</Button>
                        </form>
                    </Modal.Body>
                </Modal>
            </>
            <Footer></Footer>
        </div>
    );
};

export default Placeorder;