import React from 'react';
import {NavigationContainer} from '@react-navigation/native'; //Navigation
import {createStackNavigator} from '@react-navigation/stack'; //Navigation

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; //Navigation BOTTOM_BAR

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'; //Icon
import Home from '../screens/Home';
import ContactDetail from '../screens/ContactDetail';
import Signin from '../screens/Signin';
import AddContact from '../screens/AddContact';

const Stack = createStackNavigator(); //stack
const BottomTab = createBottomTabNavigator(); //Navigation BOTTOM_BAR

const SignedBottomTab = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        keyboardHidesTabBar: true, // ẩn bottom tab khi mở key board
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="home"
              color={focused ? '#edb021' : 'gray'}
              size={25}
            />
          ), //thêm icon
          headerShown: false,
          tabBarLabelStyle: {color: '#edb021', fontSize: 10},
        }}
      />
      <BottomTab.Screen
        name="ContactDetail"
        component={ContactDetail}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="bell-badge"
              color={focused ? '#edb021' : 'gray'}
              size={25}
            />
          ), //thêm icon
          headerShown: false,
          tabBarLabelStyle: {color: '#edb021', fontSize: 10},
        }}
      />
    </BottomTab.Navigator>
  );
};

export const NavigationNotSign = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Signin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={SignedBottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen name="AddContact" component={AddContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const NavigationSigned = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Homes"
          component={SignedBottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContactDetails"
          component={ContactDetail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddContact"
          component={AddContact}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
