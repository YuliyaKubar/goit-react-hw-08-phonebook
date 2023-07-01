import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components//Loader/Loader';
import { ContactList } from 'components//ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Form } from 'components/Form/Form';
import { fetchAllContacts } from 'redux/contacts/operations';
import { getContacts, getIsLoading } from 'redux/contacts/selectors';
import css from 'components/App.module.css';

export default function ContactsPage() {
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
}
