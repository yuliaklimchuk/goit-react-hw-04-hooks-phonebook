import style from './contactItem.module.css';
import PropTypes from "prop-types";

export const ContactItem = ({ id, name, number, clickDelete }) => { 
    return  <li  className={ style.item}>
                <div>{name}: {number}</div>
                <button type='button' className={style.button} onClick={()=>clickDelete(id)}>Delete</button>
            </li>
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    clickDelete: PropTypes.func.isRequired
};