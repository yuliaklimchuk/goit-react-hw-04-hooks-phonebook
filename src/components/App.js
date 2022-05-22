import {  useState} from "react";
import { Form } from "./Form";
import { Filter } from "./Filter";
import { ContactList } from './ContactList';
import style from './app.module.css';
import shortid from "shortid";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function App() { 
  const [contacts, setContacts] = useLocalStorage('contacts',[
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ]);
  const [filter, setFilter] = useState('');
  const addContact = (name, number) => { 
    const contact = { 
      id: shortid.generate(),
      name: name,
      number: number
    }
    const availabСheck = contacts.find(
      ({ name }) =>
        contact.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
    );

    if (availabСheck) {
      alert(`${availabСheck.name} is alredy in contact`);
      return;
    }
    setContacts([contact, ...contacts]);
  }
  const handleChangeFilter = (event) => { 
    const { value } = event.currentTarget;
    setFilter(value);
  }
  const getFilterContacts = () => { 
      const normalizeFilter = filter.toLowerCase();
      return  contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter));
  }
  const clickDelete = (contactId) => { 
    setContacts(contacts.filter( contact => contact.id !== contactId))
  }
  const filterContacts = getFilterContacts();
  return ( <div>
              <h2 className={style.title}>Phonebook</h2>
              <Form onSubmit={addContact}></Form>
              <h2 className={style.title}>Contacts</h2>
              <Filter value={filter} onChange={handleChangeFilter}/>
              <ContactList filterContacts={filterContacts} clickDelete={clickDelete}/>
      </div>);
}
