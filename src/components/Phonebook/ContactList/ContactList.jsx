import PropTypes from 'prop-types';
import Filter from '../Filter';
import {
  Container,
  List,
  ContactItem,
  Name,
  Number,
  Delete,
} from './ContactList.styled';

const ContactList = ({ contacts, removeContact, filter, onFilter }) => {
  if (contacts.length === 0) return <p>Your contact list is empty...</p>;
  const filteredContacts =
    filter.length > 0
      ? [...contacts].filter(contact =>
          contact.name.toLowerCase().includes(filter)
        )
      : [...contacts];
  const sortedContacts = filteredContacts.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <Container>
      <label>
        Find contact by name:
        <Filter onFilter={onFilter} />
      </label>
      {filteredContacts.length === 0 ? (
        <p>No matches found</p>
      ) : (
        <List>
          <tbody>
            {sortedContacts.map(({ id, name, number }) => (
              <ContactItem key={id}>
                <Name>{name}</Name>
                <Number>{number}</Number>
                <td>
                  <Delete type="button" onClick={() => removeContact(id)}>
                    Delete
                  </Delete>
                </td>
              </ContactItem>
            ))}
          </tbody>
        </List>
      )}
    </Container>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  removeContact: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default ContactList;
