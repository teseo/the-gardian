/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   TextInput,
   ListView,
   StatusBar,
   View
 } from 'react-native';

import ListItem from './ListItem';
import colors from '../utils/colors';

export default class Main extends Component {
   constructor(props){
      super(props);

      const dataSource = new ListView.DataSource({
         rowHasChanged: (r1, r2) => r1 !== r2
      });

      const data = ['Spectacles', 'Giraffe', 'Turtle', 'Shark', 'Lamp',
      'Beef', 'Drawer', 'Brocoli', 'Raspberries', 'Plate', 'Zebra'];

      this.state = { artists: dataSource.cloneWithRows(data) }
   }

   renderRow = (text, sId, rId) => {
      return (
         <ListItem index={ rId }
            text={ text }
            image={ null } />
      );
   };
   render() {
      const { artists } = this.state;
      return (
         <View style={styles.container}>

            <StatusBar barStyle="default" />

            <TextInput style={ styles.searchBox } />

            <ListView dataSource={ artists }
               style={{flex:1, alignSelf: 'stretch'}}
               renderRow={ this.renderRow } />
         </View>
      );
   }
 }

 const styles = StyleSheet.create({
   container: {
      paddingTop: 64,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white
   },
   searchBox: {
     height: 40,
     borderColor: colors.black,
     borderWidth: 2,
     margin: 16,
     paddingLeft: 10,
     fontWeight: '800'
   },
   row: {
     color: '#333333',
   },
 });
