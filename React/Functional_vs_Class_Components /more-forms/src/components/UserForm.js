import React, { useState } from  'react';


const UserForm = (props) => {
    //create a state variable for each input in the form
    console.log(props)
    let [firstname, setFirstname] = useState("");
    let [lastname, setLastname] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirms, setConfirms] = useState("");

    return(
        <>
            <form>
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={ e => setFirstname(e.target.value) } value={ firstname } />

                    {
                        firstname.length<2 && firstname.length >0?
                            <>
                                <p className= "text-danger">Field must be at least 2 character</p>
                                <p>Hi</p>
                            </>
                            : <p>  </p>
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (e) => setLastname(e.target.value) } value={ lastname } />
                    {
                        lastname.length<2 && lastname.length >0?
                            <p className= "text-danger">Field must be at least 2 character</p>
                            : <p>  </p>
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email }  />
                    {
                        email.length<5 && email.length >0?
                            <p className= "text-danger">Field must be at least 5 character</p>
                            : <p>  </p>
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } value={ password } />
                    {
                        password.length<8 && password.length >0?
                            <p className= "text-danger">The passwords must match and be at least 8 characters.</p>
                            : <p>  </p>
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setConfirms(e.target.value) } value={ confirms } />
                    {
                        password == confirms ?
                            <p> </p>
                            : <p className= "text-danger">The passwords must match</p>
                    }
                </div>
            </form>

            <div>
                {/* step 3- display the state variable at the bottom of page */}
                <p>First Name: {firstname} </p>
                <p>Last Name: {lastname} </p>
                <p>Email Address: {email} </p>
                <p>Password: {password} </p>
                <p>Confirm Password: {confirms} </p>
            </div>
        </>
    );
};

export default UserForm;
