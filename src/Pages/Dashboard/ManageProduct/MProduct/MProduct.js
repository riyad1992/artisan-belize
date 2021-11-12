import React from 'react';
import { Link } from 'react-router-dom';

const MProduct = ({product, setIsDelete}) => {
    const {name, price, details, _id} = product

    const handleDeleteProduct = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
    
        if(proceed) {
            fetch(`https://sleepy-headland-88881.herokuapp.com/deleteproduct/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
            })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount) {
                    setIsDelete(true);
                } else {
                    setIsDelete(false);
                }
            });
        }
      };

    return (
        <tr>
            <td>{name}</td>
            <td>${price}</td>
            <td>{details?.slice(0, 30)}</td>
            <td><button onClick={()=>handleDeleteProduct(_id)}>Delete</button> <Link to={`/updateproduct/${_id}`}><button>Update</button></Link></td>
        </tr>
    );
};

export default MProduct;