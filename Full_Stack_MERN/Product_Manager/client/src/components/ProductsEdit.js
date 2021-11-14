import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom"

const ProductsEdit = (props) => {
    
    const { id } = useParams();
    const history = useHistory();

    //keep track of what is being typed via useState hook
    const [formInfo, setFormInfo] = useState({
        title: "",
        price: "",
        description: ""
    })

    const changeHandler = (e) => {
        console.log("Information is changing")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    // Get the information 
   useEffect (() => {
    axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => { 
            console.log("response from get one: ", res);
            setFormInfo(res.data)
            })
            .catch(err => console.log(err))
        },[id]);


    //handler when the form is submitted
    const onSubmitHandler = e => {
        e.preventDefault();

        //make a post request to create a new product
        axios.put(`http://localhost:8000/api/product/${id}`, formInfo) 
            
            .then(res=> {
                    console.log(res)
                    history.push(`/`)
                })
            .catch(err=>console.log(err))
    }

    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={changeHandler} name="title" value={formInfo.title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={changeHandler} name="price" value={formInfo.price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={changeHandler} name="description" value={formInfo.description}/>
            </p> 
            <input onChange={changeHandler} type="submit" value="Edit"/>
        </form>
    )
}

export default ProductsEdit