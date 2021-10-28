import React, { useState } from  'react';


const UserForm = (props) => {
    //create a state variable for each input in the form
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
                    <input type="text" onChange={ (e) => setFirstname(e.target.value) } value={ firstname } />
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={ (e) => setLastname(e.target.value) } value={ lastname } />
                </div>
                <div>
                    <label>Email Address: </label>
                    <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email }  />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ (e) => setPassword(e.target.value) } value={ password } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={ (e) => setConfirms(e.target.value) } value={ confirms } />
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
