import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [prodcuts, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='my-5' id='products'>
            <h1 className='mb-0'>Our Products</h1>
            <hr className='w-25 mx-auto bg-danger mb-4 mt-0'/>
            <div className='container'>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        prodcuts.slice(0,6).map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Row>
            </div>
            <Link to='/products'><button className='mt-4'>More Products</button></Link>
        </div>
    );
};

export default Products;