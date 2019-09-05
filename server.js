const express = require( 'express' )
const bodyParser = require( 'body-parser' )
const app = express()

app.use( bodyParser.json() )

// import models
const { Contact } = require( './models' );

const PORT = process.env.PORT || 3000

app.get( '/', ( req, res ) => res.send( 'Welcome to your contact list.' ) )

app.get( '/contacts', async ( req, res ) => {
    try {
        const contacts = await Contact.findAll( { raw: true } )
        res.json( {
            contacts
        } )
    } catch ( e ) {
        res.status( 500 ).json( {
            message: e.message
        } )
    }
} )


// GET contacts/1
app.get( '/contacts/:id', async ( req, res ) => {
    try {
        const id = req.params.id;

        const contact = await Contact.findByPk( id, { raw: true } )
        if ( !contact ) throw Error( 'contact not found!' )
        res.json( { contact } )
    } catch ( e ) {
        res.status( 500 ).json( {
            message: e.message
        } )
    }
} )

app.post( '/contacts', async ( req, res ) => {
    console.log( req.body )
    try {
        const contact = await Contact.create( req.body )
        res.json( contact )
    } catch ( e ) {
        console.error( e )
        res.status( 500 ).json( { message: e.message } )
    }
} )

// PUT /contacts/:id

app.put( '/contacts/:id', async ( req, res ) => {
    try {
        const id = req.params.id
        const updateContact = {
            name: req.body.name,
            phone_number: req.body.phone_number,
            city: req.body.city
        };
        const contact = await Contact.update( updateContact, { where: { id: id } } )
        res.json( contact )
    } catch ( e ) {
        console.error( e )
        res.status( 500 ).json( { message: e.message } )
    }
} )

app.delete( '/contacts/:id', async ( req, res ) => {
    try {
        const id = req.params.id;
        console.log( id );

        const contact = await Contact.destroy( { where: { id: id } } );
        res.json( contact );
    } catch ( e ) {
        console.error( e );
        res.status( 500 ).json( { message: e.message } );
    }
} );

app.listen( PORT, () => console.log( `Example app listening on port ${ PORT }!` ) )
