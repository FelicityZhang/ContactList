import React, { Component } from 'react';

const url = 'http://localhost:3000/contacts';

class UpdateContact extends Component {
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
        this.setState( {
            [ name ]: value
        } )
    }

    onFormSubmit = async event => {
        event.preventDefault();
        let data = {
            id: this.props.id,
            name: this.state.name || this.props.contact.name,
            year_built: this.state.year_built || this.props.contact.phone_number,
            city: this.state.city || this.props.contact.city,
            image: this.state.image || this.props.contact.image
        }

        await fetch( `${ url }${ this.props.id }`, {
            method: 'PUT',
            body: JSON.stringify( data ),
            headers: {
                'Content-Type': 'application/json'
            }
        } ).then( response => {
            return response.json();
        } )
    }

    render() {
        return (
            <div className="UpdateContactPage column is-half is-offset-one-quarter">
                <h2 className="title">Update Contact</h2>
                <form onSubmit={ async event => {
                    await this.onFormSubmit( event );
                    this.props.getContact();
                    this.setState( {
                        name: "",
                        phone_number: "",
                        city: "",
                        // image: ""
                    } )
                } }>
                    <div className="field">
                        <label className="label" htmlFor="name">Contact Name:
                </label>
                        <div className="control">
                            <input
                                onChange={ this.onFormChange }
                                className="input"
                                type="text"
                                name="name"
                                placeholder="Name of Contact"
                                value={ this.state.name }
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="name">Contact Year:
                </label>
                        <div className="control">
                            <input
                                onChange={ this.onFormChange }
                                className="input"
                                type="text"
                                name="year_built"
                                placeholder="Year Built"
                                value={ this.state.year_built }
                            />
                        </div>
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="name">Contact Location:
                </label>
                        <div className="control">
                            <input
                                onChange={ this.onFormChange }
                                className="input"
                                type="text"
                                name="city"
                                placeholder="City Name"
                                value={ this.state.city }
                            />
                        </div>
                    </div>
                    {/* <div className="field">
                        <label className="label" htmlFor="name">Contact Image:
                </label>
                        <div className="control">
                            <input
                                onChange={ this.onFormChange }
                                className="input"
                                type="text"
                                name="image"
                                placeholder="Building Image"
                                value={ this.state.image }
                            />
                        </div>
                    </div> */}
                    <div className="control">
                        <button className="button is-link">Update Contact</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UpdateContact;