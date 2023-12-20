import React , { useState, useEffect }from 'react'
import { Text, TextInput } from 'react-native-paper';
import { Avatar, Button, Card ,List} from 'react-native-paper';
import {FlatList,View,TouchableOpacity} from 'react-native'
import { createTable, addContact, getContacts, updateContact, deleteContact } from '../Database/db';


const UpdateContact = ({route,navigation}) => {
  const {item} =route.params;
  const [name, setName] = useState(item.name);
  const [phone, setPhone] = useState(item.phone);

  useEffect(() => {
    createTable();
  }, []);

  

  const handleUpdateContact = (id, name, phone) => {
    updateContact(id, name, phone);
    // Navigation to go back
    navigation.goBack();
  };

  




  return (
    <>
    
   
    <Card mode='elevated' elevation={6} style={{flex:1,justifyContent:'center'}}>
  <Card.Title title="UpdateContact" titleVariant='titleLarge'/>
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
        <Button mode='elevated' elevation={6} onPress={()=>handleUpdateContact(item.id,name,phone)} >Update</Button>
        <Button >Clear</Button>
      </Card.Actions>
    </Card>
    
    </>

  )
}

export default UpdateContact;