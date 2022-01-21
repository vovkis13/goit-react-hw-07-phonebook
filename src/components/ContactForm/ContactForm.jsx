import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postItem } from 'redux/operations';
import changeFilter from 'redux/actions';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'number') setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(postItem({ name: name, phone: number }));
    dispatch(changeFilter(''));
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <label className={s.label}>
          <p className={s.labelName}>Name</p>
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          <p className={s.labelName}>Number</p>
          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </label>
      </div>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
