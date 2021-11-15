import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom";

const AuthorEdit = (props) => {
    
    const { id } = useParams();
    const history = useHistory()

    //keep track of what is being typed via useState hook
    const [formInfo, setFormInfo] = useState({
        name: ""
    })

    // Validation 
    const [formErrors, setFormErrors] = useState({
        name: ""
    })

    // Change Handler
    const changeHandler = (e) => {
        console.log("Information is changing")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    // Get the information 
   useEffect (() => {
    axios.get(`http://localhost:8000/api/author/${id}`)
        .then(res => { 
            console.log("response from get one: ", res);
            setFormInfo(res.data)
            })
            .catch(err => console.log(err))
        },[id]);


    //handler when the form is submitted
    const onSubmitHandler = e => {
        e.preventDefault();

        //make a post request to create a new author
        axios.put(`http://localhost:8000/api/authors/${id}`, formInfo) 
            
            .then(res=> {
                console.log(res)

                if(res.data.errors) { // if the form is not field properly 
                    setFormErrors(res.data.errors)
                } else {
                    props.setFormSubmit(!props.formSubmit)
                    setFormInfo({
                        name:""
                    })
                    setFormErrors({
                        name:""
                    })

                    //redirect to "/" after creating a ninja
                    history.push("/")
                }
        })
        .catch(err=>console.log(err))
    }

    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={changeHandler} name="name" value={formInfo.name}/>
                <p> {formErrors.name?.message}</p>
            </p> 
            <input onChange={changeHandler} type="submit" value="Edit"/>
        </form>
    )
}

export default AuthorEdit