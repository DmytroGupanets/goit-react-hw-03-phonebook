import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactsListItem.module.css";

const ContactsListItem = ({ name, number, id, onClickDeleteContact }) => {
  const removeItem = () => {
    onClickDeleteContact(id);
  };
  return (
    <li className={styles.contactsItem}>
      <p className={styles.contactName}>
        {name}:<span className={styles.contactsNumber}>{number}</span>
      </p>
      <button
        className={styles.contactsButton}
        type="button"
        onClick={removeItem}
      >
        Delete
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClickDeleteContact: PropTypes.func.isRequired,
};

export default ContactsListItem;
