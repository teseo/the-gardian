/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   View
 } from 'react-native';
 
import Main from './Main';

export default class Root extends Component {
   render() {
     return (
       <Main />
     );
   }
 }
