import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllAuthors = (props) => {
    
    //keep track of what is being typed via useState hook
    const [ allAuthors, setAllAuthors ] = useState([]); 
    const [ deleteAuthors, setdeleteAuthors ] = useState(false)

    //handler when the form is submitted
    useEffect(() => { 
        axios.get('http://localhost:8000/api/authors')
        .then(res=>{
            console.log("Response getting all authors --> ", res.data)
            setAllAuthors(res.data)
        })
        .catch(err=>console.log(err))

    },[props.formSubmit, deleteAuthors]);

    // Delete Author
    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then(res => {
                console.log(res) 
                setdeleteAuthors(!deleteAuthors)
            })
            .catch(err => console.error(err));
    }

    //onChange to update firstName and lastName
    return (
        <div>
            <h1> Favorite Authors </h1>
            <Link to={`/authors/new`} className="btn btn-success">Add New</Link>

            <p> Author </p>
            <p> Action available </p>
            {
                allAuthors.map(element => {
                    return(
                    <>

                    <div key={`${element._id}`}>
                        <p>
                            <h3>{element.name}</h3>
                            <Link to={`/authors/edit/${element._id}`}>Edit</Link>
                        </p>
                            <button onClick={(e)=>{deleteAuthor(element._id)}}>Delete</button>
                    </div> 

                    </>
                    )
                }

                
                    
                    
                )}
        </div>
    )
}

export default AllAuthors