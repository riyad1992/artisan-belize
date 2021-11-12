import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import MProduct from './MProduct/MProduct';

const ManageProduct = () => {

    const [allProducts, setAllProducts] = useState([])
    const [isDelete, setIsDelete] = useState(null);
    
    useEffect(()=>{
        fetch('https://sleepy-headland-88881.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setAllProducts(data))
    },[isDelete])


    return (
        <div>
            <h1>Total of Products = {allProducts.length}</h1>
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
                        allProducts.map(product => <MProduct setIsDelete={setIsDelete} key={product._id} product={product}></MProduct>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProduct;