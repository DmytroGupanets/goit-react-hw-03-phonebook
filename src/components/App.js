import React, { Component } from "react";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactsList/ContactsList";
import Filter from "./filter/Filter";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) this.setState({ contacts: parsedContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  addNewContact = (contact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  onClickDeleteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm
          addNewContact={this.addNewContact}
          contacts={this.state.contacts}
        />
        <h2>Contacts</h2>
        <Filter
          onHandleChange={this.onHandleChange}
          filterValue={this.state.filter}
        />
        <ContactList
          onClickDeleteContact={this.onClickDeleteContact}
          contacts={this.state.contacts}
          filterValue={this.state.filter}
        />
      </>
    );
  }
}

export default App;
