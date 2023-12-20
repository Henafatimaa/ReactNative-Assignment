import SQLite from 'react-native-sqlite-storage';

// open database
const db = SQLite.openDatabase({ name: 'contacts.db' });

// create table
const createTable = () => {
  db.transaction((tx) => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS contacts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, phone TEXT)',
      [],
      () => console.log('Table created successfully'),
      (error) => console.log('Error occurred while creating the table', error),
    );
  });
};

// insert contact
const addContact = (name, phone) => {
  db.transaction((tx) => {
    tx.executeSql(
      'INSERT INTO contacts (name, phone) VALUES (?, ?)',
      [name, phone],
      () => console.log('Contact added successfully'),
      (error) => console.log('Error occurred while adding the contact', error),
    );
  });
};

// retrieve all contacts
const getContacts = (callback) => {
  db.transaction((tx) => {
    tx.executeSql(
      'SELECT * FROM contacts',
      [],
      (_, { rows }) => callback(rows),
      (error) => console.log('Error occurred while retrieving the contacts', error),
    );
  });
};

// update contact
const updateContact = (id, name, phone) => {
  db.transaction((tx) => {
    tx.executeSql(
      'UPDATE contacts SET name = ?, phone = ? WHERE id = ?',
      [name, phone, id],
      () => console.log('Contact updated successfully'),
      (error) => console.log('Error occurred while updating the contact', error),
    );
  });
};

// delete contact
const deleteContact = (id) => {
  db.transaction((tx) => {
    tx.executeSql(
      'DELETE FROM contacts WHERE id = ?',
      [id],
      () => console.log('Contact deleted successfully'),
      (error) => console.log('Error occurred while deleting the contact', error),
    );
  });
};

export { createTable, addContact, getContacts, updateContact, deleteContact };
