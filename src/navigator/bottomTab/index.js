import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Account from '../../screens/Account';
import Favorite from '../../screens/Favorite';
import Menu from '../../screens/Menu';
import { Images } from '../../assets';
import { TabName } from '../screenName';

const Tab = createBottomTabNavigator();



export default class BottomNav extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { height: 80 },
          tabBarActiveTintColor: '#3498db', // Color when active
          tabBarInactiveTintColor: '#7f8c8d', // Color when inactive
        }}
      >
        <Tab.Screen 
          name={TabName.HomeScreen} 
          component={Home} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image 
                style={{ width: size, height: size, tintColor: color }} 
                source={Images.Home} 
              />
            ),
            
          }} 
        />
        <Tab.Screen 
          name={TabName.Account} 
          component={Account} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image 
                style={{ width: size, height: size, tintColor: color }} 
                source={Images.Account} 
              />
            ),
           
          }} 
        />
        <Tab.Screen 
          name={TabName.Favorite} 
          component={Favorite} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image 
                style={{ width: size, height: size, tintColor: color }} 
                source={Images.Favorite} 
              />
            ),
           
          }} 
        />
        <Tab.Screen 
          name={TabName.Menu} 
          component={Menu} 
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Image 
                style={{ width: size, height: size, tintColor: color }} 
                source={Images.Menu} 
              />
            ),
            
          }} 
        />
      </Tab.Navigator>
    );
  }
}
