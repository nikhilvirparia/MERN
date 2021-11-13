import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductsInfo = (props) => {

    const [productInfo, setProductInfo] = useState({});
    const { id } = useParams();
    const history = useHistory();

   useEffect (() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => { 
            console.log("response from get one: ", res);
            setProductInfo(res.data)
            })
            .catch(err => console.log(err))
        },[]);


    return (
        <div> 
            <h2> Products Information </h2>
            <p>Title: {productInfo.title}</p>
            <p>Price: {productInfo.price}</p>
            <p>Description: {productInfo.description}</p>
        </div>
    );
};

export default ProductsInfo;