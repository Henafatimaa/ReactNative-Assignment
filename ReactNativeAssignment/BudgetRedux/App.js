/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/home';
import SettingsScreen from './pages/settings';
import tab1 from './pages/basetab/tab1';
import tab2 from './pages/basetab/tab2';
import globalStore from './store/store';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  useDrawerStatus,
} from '@react-navigation/drawer';
import {Provider} from 'react-redux';

const {width, height} = Dimensions.get('screen');
const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
// const globalStore = configureStore();

const basetabs = ({navigation}) => {
  // const isDrawerOpen = useDrawerStatus() === 'open';
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="tab1"
        component={tab1}
        // options={{
        //   headerLeft: () => (
        //     <Text
        //       style={{fontSize: 28, marginStart: 20, width: 40}}
        //       onPress={() => {
        //         navigation.toggleDrawer();
        //       }}>
        //       {'='}
        //     </Text>
        //   ),
        // }}
      />
      <Tab.Screen name="tab2" component={tab2} />
      <Tab.Screen name="tab3" component={tab2} />
    </Tab.Navigator>
  );
};

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="setting"
        onPress={() => props.navigation.navigate('Settings')}
      />
    </DrawerContentScrollView>
  );
};

const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerBackTitleVisible: false,
    }}>
    {/* <Stack.Screen
      name="Base"
      component={BaseTabs}
      options={{headerShown: false}}
    /> */}
    {/* <Stack.Screen
      name="base"
      component={BaseTabs}
      options={{headerShown: false}}
    /> */}
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      // options={{
      //   headerLeft: () => <Text style={{fontSize: 28}}>=</Text>,
      // }}
    />

    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Stack.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    // drawerContent={props => <CustomDrawerContent {...props} />}
    initialRouteName="Main">
    {/* <Drawer.Screen
      options={{headerShown: false}}
      name="Main"
      component={StackNavigator}
    />
    <Drawer.Screen name="Settings" component={SettingsScreen} /> */}

    <Drawer.Screen
      name="base"
      component={BaseTabs}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Drawer.Navigator>
);

const App = props => {
  return (
    <Provider store={globalStore}>
      <NavigationContainer>
        {/* <DrawerNavigator /> */}
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
