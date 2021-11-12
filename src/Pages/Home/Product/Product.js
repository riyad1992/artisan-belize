import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css'

const Product = ({product}) => {
    const {name, img, details, price, _id} = product
    return (
        <Col>
            <Card className='product border border-0 text-center box shadow bg-white rounded'>
                <Card.Img variant="top" src={img} style={{height:'200px'}} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{details.slice(0,130)}</Card.Text>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Link to= {`/placeorder/${_id}`}><button>Add to Cart</button></Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Product;