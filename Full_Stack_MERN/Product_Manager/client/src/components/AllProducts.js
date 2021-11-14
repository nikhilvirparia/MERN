import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllProducts = (props) => {
    
    //keep track of what is being typed via useState hook
    const [allProducts, setAllProducts] = useState([]); 

    //handler when the form is submitted
    useEffect(() => { 
        axios.get('http://localhost:8000/api/product')
        .then(res=>{
            setAllProducts(res.data)
            console.log("Response getting all products --> ", res.data)
        })
        .catch(err=>console.log(err))

    },[props.formSubmit]);

    //onChange to update firstName and lastName
    return (
        <div>
            <h1> All Products </h1>
            {
                allProducts.map(element => 
                    <>
                        <p>
                            <Link to={`/api/product/${element._id}`}>{element.title}</Link>
                        </p>
                        <p>
                            <Link to={`/api/productedit/${element._id}`}>Edit</Link>
                        </p>
                    </>
                )}
        </div>
    )
}

export default AllProducts