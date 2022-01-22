import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import changeFilter from 'redux/actions';
import { deleteContact } from 'redux/operations';

import s from './Contact.module.css';

export default function Contact({ contact }) {
  const { id, name, phone } = contact;
  const dispatch = useDispatch();

  const handleDelete = e => {
    e.preventDefault();
    dispatch(changeFilter(''));
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.contact}>
      <p>{name}</p>
      <p>{phone}</p>
      <button
        className={s.button}
        type="button"
        value={id}
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
