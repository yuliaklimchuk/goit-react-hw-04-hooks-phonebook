import style from './filter.module.css';
import PropTypes from "prop-types";

export const Filter = ({ value, onChange }) => { 
    return <label className={ style.label}>Find contacts by name
        <input className={style.input}
            type="text"
            name="filter"
            value={value}
            onChange={onChange}
            required
        />
    </label>
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};