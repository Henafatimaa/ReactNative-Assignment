import React, { useEffect, useState } from 'react';
import { Text, FAB, Button, List } from 'react-native-paper';
import { ScrollView, FlatList, View, Image, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-paper';
import { getContacts,deleteContact } from '../Database/db';
import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';

const ContactList = (prop) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  // handle delete to delete the item
  const handleDeleteContact = (id) => {
    deleteContact(id);
    fetchContacts();
  };
  const renderItem = ({ item }) => (
    <SwipeRow  leftOpenValue={75} rightOpenValue={-75} style={styles.rowFront}>
      
      <List.Item
       style={styles.listItem}
        title={item.name}
        description={item.phone}
        left={(props) => <Avatar.Icon {...props} icon="folder" />}
      />
        <View style={styles.rowBack}>
      <Button onPress={()=>prop.navigation.navigate('UpdateContact',{item})} >Edit</Button>
      <Button onPress={()=>handleDeleteContact(item.id)} >Delete</Button>

     </View>
     
     </SwipeRow>
  );

  const renderHiddenItem = () => (
    <View style={{display:'none'}}>
      <Text style={{ color: 'black' }}>Left</Text>
      <Text style={{ color: 'black' }}>Right</Text>
    </View>
  );

  const fetchContacts = () => {
    getContacts((results) => {
      const contactsArray = [];
      for (let i = 0; i < results.length; i++) {
        contactsArray.push(results.item(i));
      }
      setContacts(contactsArray);
    });
  };

  return (
    <>
      <SwipeListView
      
        data={contacts}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={75}
        rightOpenValue={-155}
      
        disableRightSwipe={true}
      />

      <FAB label="Add Contact" onPress={() => prop.navigation.navigate('AddContact')} />
    </>
  );
};

const styles = StyleSheet.create({
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderBottomColor: '#CCC',
    height:90,
    justifyContent: 'center',
    width: '100%',
   
  },
  listItem: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%',
  },
  rowBack: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    marginLeft: 550,
    width: '100%',
   
  }
});

export default ContactList;
