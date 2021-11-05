import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'

// Search
const Search = () => {
    const [categories, setCategories] = useState([])
    const history = useHistory();

    // formInfo
    const [formInfo, setFormInfo] = useState({
        id:"",
        category: "people"
    })

    // UseEffect
    useEffect(()=>{
        axios.get("https://swapi.dev/api/")
            .then(response=>{
                console.log("logging response-->", response.data)
                let result = Object.keys(response.data)
                console.log("result is this--->",result)
                setCategories(result)
            })
            .catch(err=>console.log(err))
    },[])

    // SubmitHandler
    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("submit with this form info", formInfo )
        history.push(`/${formInfo.category}/${formInfo.id}`) //redirect to a new route
    }

    // ChangeHandler
    const changeHandler = (e)=>{
        console.log("changing inputs")
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit= {submitHandler}>
                <div>
                    <label htmlFor="">Search For: </label>
                    <select onChange = {changeHandler} name="category" id="">
                        {
                            categories.map((item, i)=>{
                                return(
                                    <option key = {i} value={item}>{item}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <div>
                    <label htmlFor="id">Id: </label>
                    <input onChange= {changeHandler} type="number" name="id" />
                </div>
                <input type="submit" value="Search" />
            </form>
        </div>
    );
};

export default Search;