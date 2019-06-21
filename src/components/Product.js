import React from 'react';

function Product(props) {
    return(
        <div>
            <h1>{props.key} - {props.name} | £{props.price}</h1>
            <p>{props.description}</p>
            <hr/>
        </div>
    )
}


export default Product;