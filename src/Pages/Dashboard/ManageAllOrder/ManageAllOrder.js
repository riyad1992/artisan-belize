import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import AllOrders from './AllOrders/AllOrders';

const ManageAllOrder = () => {
    const [allOrders, setAllOrders] = useState([])
    const [isDelete, setIsDelete] = useState(null);
    
    useEffect(()=>{
        fetch('https://sleepy-headland-88881.herokuapp.com/manageOrder')
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
                        <th>Action</th>
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