import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Contacts from './components/Contacts';
import Contact from './components/Contact';
import CreateContact from './components/CreateContact';
import './App.css';

const url = 'http://localhost:3000/contacts';

class App extends Component {
  constructor ( props ) {
    super( props );
    this.state = {
      Contacts: []
    }
    this.getContacts = this.getContacts.bind( this );
    this.handleDelete = this.handleDelete.bind( this );
  }

  getContacts() {
    let url = 'http://localhost:3000/contacts';
    fetch( url )
      .then( response => {
        return response.json();
      } )
      .then( data => {
        this.setState( { Contacts: data.contacts } )
      } )
  }

  async handleDelete( event ) {
    event.preventDefault();
    await fetch( `${ url }/${ event.target.id }`, {
      method: 'DELETE'
    } ).then( response => {
      return response.json();
    } )
    this.Contacts();
  }

  componentDidMount() {
    this.getContacts();
  }

  render() {
    return (

      <div>

        <div className="main">
          {
            this.state.Contacts &&
            < Contacts contacts={ this.state.Contacts } />
          }
        </div>

        <Switch>
          <Route exact path='/Contacts' render={ () => <Contacts /> } />
          <Route path='/Contacts/:id' render={ () => <Contact /> } />
          <Route path='/create-Contact' render={ () => <CreateContact /> } />
        </Switch>
      </div >
    );
  }
}
export default App;
