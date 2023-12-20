import React , { useState, useEffect }from 'react'
import { Text, TextInput } from 'react-native-paper';
import { Avatar, Button, Card ,List} from 'react-native-paper';
import {FlatList,View,TouchableOpacity} from 'react-native'
import { createTable, addContact, getContacts, updateContact, deleteContact } from '../Database/db';


const AddContact = () => {
  
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    createTable();
  }, []);

  

  const handleAddContact = () => {
    addContact(name, phone);
    setName('');
    setPhone('');
  };

  const handleUpdateContact = (id, name, phone) => {
    updateContact(id, name, phone);
  };

  




  return (
    <>
    
   

    <Card mode='elevated' elevation={6} style={{flex:1,justifyContent:'center'}}>
  <Card.Title title="AddContact" titleVariant='titleLarge'/>
  <Card.Content> 
    <TextInput
      label="Name"
      mode='outlined'
      value={name}
      onChangeText={(text)=>setName(text)}></TextInput>
      
      <TextInput label={'Number'}
      mode='outlined' 
      value={phone}
      onChangeText={(text)=>setPhone(text)}
      keyboardType='numeric' />

      </Card.Content>
      <Card.Actions>
        <Button mode='elevated' elevation={6}  onPress={handleAddContact}>Save</Button>
        <Button >Clear</Button>
      </Card.Actions>
    </Card>
    
    </>

  )
}

export default AddContact