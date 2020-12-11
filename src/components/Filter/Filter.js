import PropTypes from 'prop-types';
import s from './Filter.module.css';


const Filter = ({ value, onChange }) => (
  <label className={s.filter}>
    Find contacts by name
    <input className= {s.input} type='text' value={value} onChange={onChange}  placeholder="Go IT"/>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Filter;