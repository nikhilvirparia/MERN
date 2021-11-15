import React, {useState} from 'react';
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AuthorNew = (props) => {

    const history = useHistory() 
    
    //keep track of what is being typed via useState hook
    const [formInfo, setFormInfo] = useState({
        name: ""
    })

    // Validation 
    const [formErrors, setFormErrors] = useState({
        name:""
    })

    // Change Handler
    const changeHandler = (e) =>{
        console.log("changing the form")
        setFormInfo({
            ...formInfo,
            [e.target.name] : e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        
        axios.post("http://localhost:8000/api/authors/make", formInfo)
            .then(res=>{
                console.log(res)
                
                if(res.data.errors){ //if the form is not filled out properly
                    setFormErrors(res.data.errors)
                }else{
                    props.setFormSubmitted(!props.formSubmitted)
    
                    setFormInfo({
                        name:""
                    })

                   //redirect to "/" after creating a ninja
                history.push("/")
            }
            })
            .catch(err=>console.log(err))

    }

    return (
        <div>
            <h3>Add a new author</h3>
            <form onSubmit= {submitHandler}>
                <div>

                    <label>Name:</label>
                    <input onChange={changeHandler} type="text" name="name" id="" />

                    <p>{formErrors.name?.message}</p>

                </div>

                <input onChange={changeHandler} type="submit" value="Add New Author" />

            </form>
        </div>
    );
};

export default AuthorNew;