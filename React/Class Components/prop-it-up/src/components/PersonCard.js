import React, { Component } from 'react';


class PersonCard extends Component {
    render() {
        return (
            <div>
                <h1> {this.props.lName}, {this.props.fName} </h1>
                <p>Age: {this.props.Age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <hr/>
            </div>

        );
    }
}

export default PersonCard;
