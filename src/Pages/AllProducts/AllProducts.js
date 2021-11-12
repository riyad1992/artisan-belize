import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Home/Product/Product';
import Footer from '../Sheard/Footer/Footer';
import Header from '../Sheard/Header/Header';

const AllProducts = () => {
    const [prodcuts, setProducts] = useState([])
    useEffect(() => {
        fetch('https://sleepy-headland-88881.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <Header></Header>
            <div className='my-5' id='products'>
                <h1 className='mb-0'>Our Products</h1>
                <hr className='w-25 mx-auto bg-danger mb-4 mt-0'/>
                <div className='container'>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            prodcuts.map(product => <Product key={product._id} product={product}></Product>)
                        }
                    </Row>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;