import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AllOrders from './AllOrders/AllOrders';

const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([])
    const [isDelete, setIsDelete] = useState(null);
    
    useEffect(()=>{
        fetch('http://localhost:5000/manageOrder')
        .then(res => res.json())
        .then(data => setAllOrders(data))
    },[isDelete])
    return (
        <div>
            <h1>Total of Orders = {allOrders.length}</h1>
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
                        allOrders.map(order => <AllOrders setIsDelete={setIsDelete} key={order._id} order={order}></AllOrders>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageAllOrder;