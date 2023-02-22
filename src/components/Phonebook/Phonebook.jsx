import { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Wrapper } from './Phonebook.styled';

class Phonebook extends Component {
  state = {
    contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    filter: '',
    name: '',
    number: '',
  };

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

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
    this.setState({ contacts: contacts.filter(contact => contact.id !== key) });
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
