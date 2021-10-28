import React, { Component } from 'react';


class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Age : this.props.Age
        };
    }

    render() {

        let changeAge = ()=> {
            this.setState({Age: this.state.Age + 1})
        }

        return (
            <>
                <div>
                    <h1> {this.props.lName}, {this.props.fName} </h1>
                    <p>Age: {this.state.Age}</p>
                    <p>Hair Color: {this.props.hairColor}</p>
                    <button onClick = {changeAge}>
                        Birthday Button for {this.props.fName} {this.props.lName}</button>
                    <hr/>
                </div>
            </>
        );
    }
}

export default PersonCard;