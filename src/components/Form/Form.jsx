import {useState } from "react";
import style from './form.module.css';
import PropTypes from "prop-types";

export function Form({ onSubmit }) {  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = (event) => {
    const {value } = event.currentTarget;
    setName(value);
  }
  const handleChangeNumber = (event) => {
    const {value } = event.currentTarget;
    setNumber(value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
  }
  return (
      <form onSubmit={handleSubmit} className={ style.form}>
        <label className={style.label}>Name
          <input
            type="text"
            name="name"
            className={style.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChangeName}
            required
          />
        </label>
        <label className={style.label}>Number
          <input
            type="tel"
            name="number"
            className={style.input}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={handleChangeNumber}
            required
          />
        </label>
        <button type='submit' className={ style.button}>Add contacts</button>
      </form>
    );
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired
  };