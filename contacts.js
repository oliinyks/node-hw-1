const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.resolve("./db/contacts.json");
const { v4 } = require("uuid");

const listContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error(error);
  }
};

const getContactById = async (contactId) => {
  try {
    const contacts = await listContacts();
    const contact = contacts.find((contact) => contact.id === contactId);

    if (!contact) {
      return null;
    }

    return contact;
  } catch (error) {
    console.error(error);
  }
};

const removeContact = async (contactId) => {
  try {
    const contacts = await listContacts();
    const newContact = contacts.filter((item) => item.id !== contactId);
	  await updateContact(newContact);
    return newContact;
  } catch (error) {
    console.error(error);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const newContact = { id: v4(), name, email, phone};
    const contacts = await listContacts();

    contacts.push(newContact);
    await updateContact(contacts);
    return newContact;
  } catch (error) {
    console.error(error);
  }
}; 

const updateContact = async (contacts) => {
  try {
    await fs.writeFile(
      contactsPath,
      JSON.stringify(contacts, null, 2)
    );
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
