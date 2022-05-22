import style from './contactList.module.css';
import { ContactItem } from './ContactItem';
import PropTypes from "prop-types";

export const ContactList = ({ filterContacts, clickDelete}) => { 
    return <ul className={ style.list}>
        {filterContacts.map(({ id, name, number }) => (
            <ContactItem key={id} id={ id} name={name} number={number} clickDelete={ clickDelete}/>
        ))}
    </ul>
}

ContactList.propTypes = {
    filterContacts: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        })
    ),
    clickDelete: PropTypes.func.isRequired
};