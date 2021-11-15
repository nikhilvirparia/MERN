import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllProducts = (props) => {
    
    //keep track of what is being typed via useState hook
    const [ allProducts, setAllProducts ] = useState([]); 
    const [ deleteProductManger, setdeleteProductManger ] = useState(false)

    //handler when the form is submitted
    useEffect(() => { 
        axios.get('http://localhost:8000/api/product')
        .then(res=>{
            setAllProducts(res.data)
            console.log("Response getting all products --> ", res.data)
        })
        .catch(err=>console.log(err))

    },[props.formSubmit, deleteProductManger]);

    // Delete Product
    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res) 
                setdeleteProductManger(!deleteProductManger)
            })
            .catch(err => console.error(err));
    }

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
                            <button onClick={(e)=>{deleteProduct(element._id)}}>Delete</button>
                    </>
                )}
        </div>
    )
}

export default AllProducts