import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import PropTypes from 'prop-types';
import { useDeleteItemMutation, useGetItemsQuery } from 'services/api';
import s from './Contact.module.css';

export default function Contact({ contact: { id, name, phone } }) {
  const dispatch = useDispatch();
  const [deleteContact, { isError, error }] = useDeleteItemMutation();
  useGetItemsQuery();

  const handleDelete = e => {
    e.preventDefault();
    dispatch(changeFilter(''));
    deleteContact(id);
  };

  return (
    <>
      {!isError && (
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
      )}
      {isError && <p>{error.status}</p>}
    </>
  );
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
