import { Component } from "react";
import style from './form.module.css';
import PropTypes from "prop-types";

export class Form extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }
  handleChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.number);
    this.setState({
      name: '',
      number: ''
    })
  }

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={ style.form}>
        <label className={style.label}>Name
          <input
            type="text"
            name="name"
            className={style.input}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={this.handleChange}
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
            onChange={this.handleChange}
            required
          />
        </label>
        <button type='submit' className={ style.button}>Add contacts</button>
      </form>
    );
  }
}
