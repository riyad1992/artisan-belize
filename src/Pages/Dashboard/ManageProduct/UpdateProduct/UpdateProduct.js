import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const initialInfo = { name: product.name, price: product.price, details: product.details}
    const [productInfo, setProductInfo] = useState(initialInfo);


    useEffect(()=>{
        fetch(`https://sleepy-headland-88881.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[id])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...productInfo };
        newInfo[field] = value;
        setProductInfo(newInfo);
    }

    const handleCustomerSubmit = e => {
        // collect data
        const updateDoc = {
            ...productInfo,
        }
        //send to the server
        fetch(`https://sleepy-headland-88881.herokuapp.com/updateproduct/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateDoc)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            });

        e.preventDefault();
    }


    return (
        <div>
            <form onSubmit={handleCustomerSubmit}>
                <input
                    style={{ width: '90%', margin: '10px' }}
                    id="outlined-size-small"
                    name="name"
                    onBlur={handleOnBlur}
                    placeholder={product.name}
                    size="small"
                />
                <br/>
                <input
                    style={{ width: '90%', margin:' 10px '}}
                    id="outlined-size-small"
                    name="price"
                    onBlur={handleOnBlur}
                    placeholder={product.price}
                    size="small"
                />
                <br/>
                <input
                    style={{ width: '90%', margin:' 10px '}}
                    id="outlined-size-small"
                    name="details"
                    onBlur={handleOnBlur}
                    placeholder={product?.details}
                    size="small"
                />
                <br/>
                {/* <input
                    style={{ width: '90%', margin: '10px' }}
                    id="outlined-size-small"
                    name="status"
                    onBlur={handleOnBlur}
                    defaultValue={order.status}
                    size="small"
                /> */}
                <br/>
                <Button type="submit" variant="contained">Submit</Button>
            </form>
        </div>
    );
};

export default UpdateProduct;