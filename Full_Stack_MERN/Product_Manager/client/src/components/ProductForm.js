import React, { useState } from 'react'
import axios from 'axios';

const ProductForm = (props) => {
    
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

    //handler when the form is submitted
    const onSubmitHandler = e => {
        e.preventDefault();

        //make a post request to create a new product
        axios.post('http://localhost:8000/api/product', formInfo) 
            .then(res=> {
                    console.log(res)
                    props.setFormSubmit(!props.formSubmit)
                    
                    setFormInfo({
                        title:"",
                        price:"",
                        description:""
                    })
                    
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
            <input onChange={changeHandler} type="submit" value="Create"/>
        </form>
    )
}

export default ProductForm