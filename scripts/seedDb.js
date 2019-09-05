const { Contact } = require( '../models' )

const main = async () => {

    // delete database
    await Contact.destroy( {
        where: {}
    } )

    // Add seed data here -- buildings

    const felicity = await Contact.create( {
        name: 'Felicity',
        phone_number: 347 - 570 - 2606,
        city: 'New York City',
    } )

    const alane = await Contact.create( {
        name: 'Alane',
        phone_number: 347 - 545 - 4553,
        city: 'New York City',
    } )

    process.exit()

}

main()
