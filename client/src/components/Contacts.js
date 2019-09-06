import React from "react";

const Contacts = props => {
    return (
        props.contacts.map( contact => (
            <div className="contact" key={ contact.id }>
                {/* <div className="image-wrapper">
                <img alt="" src={contact.image}/>
            </div> */}
                <div className="contact-details">
                    <h3>Name: { contact.name }</h3>
                    <p>Phone Number: { contact.phone_number }</p>
                    <p>City: { contact.city }</p>
                </div>
                <button className="button" id={ contact.id } onClick={ props.handleDelete }>Delete</button>
            </div>
        ) )
    );
}


export default Contacts