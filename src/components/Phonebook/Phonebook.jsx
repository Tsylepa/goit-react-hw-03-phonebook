import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Wrapper } from './Phonebook.styled';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = (newContact, { resetForm }) => {
    const currentContacts = this.state.contacts;

    if (
      currentContacts.find(
        ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
      )
    )
      return alert(`${newContact.name} is already in contacts`);

    newContact.id = nanoid();

    this.setState({
      contacts: [...currentContacts, newContact],
    });

    resetForm();
  };

  removeContact = key => {
    const { contacts } = this.state;
    const toRemoveIdx = contacts.indexOf(contacts.find(({ id }) => id === key));

    contacts.splice(toRemoveIdx, 1);
    this.setState({ contacts });
  };

  onFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.addContact} />

        <h2>My contacts</h2>
        <ContactList
          contacts={contacts}
          removeContact={this.removeContact}
          onFilter={this.onFilter}
          filter={filter}
        />
      </Wrapper>
    );
  }
}

export default Phonebook;
