import { Component } from "react";
import { Form } from "./Form";
import { Filter } from "./Filter";
import { ContactList } from './ContactList';
import style from './app.module.css';
import shortid from "shortid";

export class App extends Component {
    state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: ''
    }
  
  addContact = (name, number) => { 
    const contact = { 
      id: shortid.generate(),
      name: name,
      number: number
    }
    const availabСheck = this.state.contacts.find(
      ({ name }) =>
        contact.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );

    if (availabСheck) {
      alert(`${availabСheck.name} is alredy in contact`);
      return;
    }
    this.setState(prevState => ({ 
      contacts: [contact, ...prevState.contacts]
    }))
  }
  handleChangeFilter = (event) => { 
    const { value } = event.currentTarget;
    this.setState({
      filter: value,
    });
  }
  getFilterContacts = () => { 
      const { filter, contacts } = this.state;
      const normalizeFilter = filter.toLowerCase();
      return  contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter));
  }

  clickDelete = (contactId) => { 
    this.setState(prevState => ({
      contacts: prevState.contacts.filter( contact => contact.id !== contactId),
    }))
  }

  componentDidMount() { 
    const saveContacts = JSON.parse(localStorage.getItem('contacts'));
    if (saveContacts) { 
      this.setState({contacts : saveContacts});
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (contacts !== prevState.contacts) { 
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
}
  render() { 
    
    const filterContacts = this.getFilterContacts();
    return (
      <div>
        <h2 className={style.title}>Phonebook</h2>
        <Form onSubmit={this.addContact}></Form>
        <h2 className={style.title}>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleChangeFilter}/>
        <ContactList filterContacts={filterContacts} clickDelete={this.clickDelete}/>
      </div>
    );
  }
};
