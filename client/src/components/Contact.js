import React, { Component } from 'react';
import { withRouter } from 'react-router';
import UpdateContact from './UpdateContact';

const url = 'http://localhost:3000/contacts';

class Contact extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
            contact: ''
        }
        this.getContact = this.getContact.bind( this );
    }

    getContact() {
        fetch( `${ url }${ this.props.match.params.id }` )
            .then( response => {
                return response.json();
            } )
            .then( data => {
                this.setState( { contact: data.contact } )
            } )
    }

    componentDidMount() {
        this.getContact();
    }

    render() {
        return (
            <div className="contact" key={ this.state.contact.id }>
                {/* <div className="image-wrapper">
                    <img alt="" src={ this.state.contact.image } />
                </div> */}
                <div className="contact-details">
                    <h3>Name: { this.state.contact.name }</h3>
                    <p>Phone Number: { this.state.contact.phone_number }</p>
                    <p>City: { this.state.contact.city }</p>
                </div>
                <button className="button" id={ this.state.contact.id } onClick={ event => {
                    this.props.handleDelete( event );
                    this.props.history.push( '/contacts' );
                } }>Delete</button>
                <UpdateContact id={ this.props.match.params.id } contact={ this.state.contact } getContact={ this.getContact } />
            </div>
        )
    }


}

export default withRouter( Contact );