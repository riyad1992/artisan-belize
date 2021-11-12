import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Order from './Order/Order';

const Myorders = () => {
    const {user} = useAuth()
    const [orders, setOrders] = useState([])
    const [isDelete, setIsDelete] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [ isDelete, user.email])
    return (
        <div>
            <h1>Total of my Orders = {orders.length}</h1>
            <Table striped bordered hover size="sm" responsive>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <Order setIsDelete={setIsDelete} key={order._id} order={order}></Order>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Myorders;