import React, { Component } from 'react';

const url = 'http://localhost:3000/contacts';

class CreateContact extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            name: "",
            phone_number: "",
            city: "",
            // image: ""
        }
    }

    onFormChange = event => {
        const { name, value } = event.target;
        // name = event.target.value
        this.setState( {
            [ name ]: value
        } )
    }

    onFormSubmit = event => {
        event.preventDefault();
        let data = {
            name: this.state.name,
            phone_number: this.state.phone_number,
            city: this.state.city,
            // image: this.state.image
        }
        fetch( url, {
            method: 'POST',
            body: JSON.stringify( data ),
            headers: {
                'Content-Type': 'application/json'
            }
        } ).then( response => {
            return response.json();
        } )
        this.setState( {
            name: "",
            phone_number: "",
            city: "",
            // image: ""
        } )

    }

    render() {
        return (
            <div className="createContactPage">
                <h2 className="title">Create New Contact</h2>
                <form onSubmit={ this.onFormSubmit } id="bldgForm">
                    <div className="field">
                        <label htmlFor="name">Contact Name: </label>
                        <input
                            onChange={ this.onFormChange }
                            type="text"
                            id="newContactName"
                            name="name"
                            placeholder="Contact Name"
                            value={ this.state.name }
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="name">Contact Year: </label>
                        <input
                            onChange={ this.onFormChange }
                            type="text"
                            name="phone_number"
                            placeholder="Phone Number"
                            value={ this.state.phone_number }
                        />
                    </div>
                    <div className="field">
                        <label htmlFor="name">city: </label>
                        <input
                            onChange={ this.onFormChange }
                            type="text"
                            name="city"
                            placeholder="City of contact"
                            value={ this.state.city }
                        />
                    </div>
                    {/* <div className="field">
                        <label htmlFor="name">Contact Image: </label>
                        <input
                            onChange={ this.onFormChange }
                            type="text"
                            name="image"
                            placeholder="Contact Image"
                            value={ this.state.image }
                        />
                    </div> */}
                    <div className="control">
                        <button type="submit" className="button">Adding Contact</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CreateContact;