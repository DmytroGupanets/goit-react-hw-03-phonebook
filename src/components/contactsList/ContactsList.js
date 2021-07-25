import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactsList.module.css";
import ContactsListItem from "./contactsListItem/ContactsListItem";

const ContactList = ({ contacts, filterValue, onClickDeleteContact }) => {
  return (
    <ul className={styles.contactsList}>
      {contacts
        .filter((contact) =>
          contact.name.toLowerCase().includes(filterValue.toLowerCase())
        )
        .map((contact) => (
          <ContactsListItem
            key={contact.id}
            {...contact}
            onClickDeleteContact={onClickDeleteContact}
          />
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  filterValue: PropTypes.string.isRequired,
  onClickDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
