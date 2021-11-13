import React from 'react';

const Order = ({order, setIsDelete}) => {
    const {productName, price, status, _id} = order

    const handleDeleteOrder = (id) => {

      const proceed = window.confirm('Are you sure, you want to delete?');
    
        if(proceed){
          fetch(`https://sleepy-headland-88881.herokuapp.com/deleteorder/${id}`, {
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
            <td>{productName}</td>
            <td>${price}</td>
            <td>{status}</td>
            <td><button onClick={() => handleDeleteOrder(_id)}>Delete</button></td>
        </tr>
    );
};

export default Order;