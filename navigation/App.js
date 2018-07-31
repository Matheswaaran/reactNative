import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import HomeTab from './HomeTab';
import ProfileTab from './ProfileTab';

export default createStackNavigator({
  Home: { screen: HomeTab },
  Profile: { screen: ProfileTab }
});
