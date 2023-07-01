import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllContacts } from 'redux/contacts/operations';
import { getContacts, getIsLoading } from 'redux/contacts/selectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchAllContacts()).catch(error => toast.error(error.message));
  }, [dispatch]);
  return (
    <div>
      <h1 className={css.title}>Phonebook</h1>
      <Form />
      <h2 className={css.contacts}>Contacts</h2>
      <Filter />
      {contacts.length > 0 && <ContactList />}
      {isLoading && <Loader />}
      <ToastContainer />
    </div>
  );
};
