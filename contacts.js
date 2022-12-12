const fs = require("fs").promises;
const contactsPath = "./db/contacts.json";

//eadFile() і writeFile()
// TODO: задокументувати кожну функцію
function listContacts() {
  return "sss";
  // fs.readFile(filename, [options]);
}

function getContactById(contactId) {
	// fs.readFile(filename, [options]);
}

function removeContact(contactId) {
  //fs.unlink(path, callback)
}

function addContact(name, email, phone) {
	// fs.appendFile(filename, data, [options]);
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};