import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';

const AddProduct = () => {

    const initInfo = {}
    const [productInfo, setProductInfo] = useState(initInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...productInfo };
        newInfo[field] = value;
        setProductInfo(newInfo);
    }

    const handleAddProduct = e => {

        const addProduct = {
            ...productInfo,
        }

        fetch('https://sleepy-headland-88881.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully added the Service.')
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    
    return (
        <div>
            <form onSubmit={handleAddProduct}>
                <input
                    style={{ width: '90%', margin: '10px' }}
                    id="outlined-size-small"
                    name="name"
                    onBlur={handleOnBlur}
                    placeholder='Product Name'
                    size="small"
                />
                <br/>
                <input
                    style={{ width: '90%', margin:' 10px '}}
                    id="outlined-size-small"
                    name="details"
                    onBlur={handleOnBlur}
                    placeholder='Product Details'
                    size="small"
                />
                <input
                    style={{ width: '90%', margin:' 10px '}}
                    id="outlined-size-small"
                    name="price"
                    onBlur={handleOnBlur}
                    placeholder='Product Price'
                    size="small"
                />
                <input
                    style={{ width: '90%', margin:' 10px '}}
                    id="outlined-size-small"
                    name="img"
                    onBlur={handleOnBlur}
                    placeholder='Product Image url'
                    size="small"
                />
                <br/>
                {/* <Form.Select aria-label="Default select example" onBlur={handleOnBlur} name="rating">
                    <option defaultValue='5'>5</option>
                    <option defaultValue="4">4</option>
                    <option defaultValue="3">3</option>
                    <option defaultValue="2">2</option>
                    <option defaultValue="1">1</option>
                </Form.Select> */}
                <br/>
                <Button type="submit" variant="contained">Submit</Button>
            </form>
        </div>
    );
};

export default AddProduct;