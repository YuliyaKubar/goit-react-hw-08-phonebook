import React from 'react';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getError } from 'redux/contacts/selectors';
import { getFilter } from 'redux/filter/selectors';
import { fetchDeleteContact } from 'redux/contacts/operations';
import { toast } from 'react-toastify';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);

  const filterName = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  if (error) {
    toast.error(error);
  }
  const handleDelete = id =>
    dispatch(fetchDeleteContact(id)).then(data => {
      if (!data.error) toast.success('Contact was delete');
    });

  return (
    <ul>
      {filterName.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button
            className={css.delete}
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
