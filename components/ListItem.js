/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   StyleSheet,
   Text,
   TouchableOpacity,
   Image,
   View
 } from 'react-native';

import colors from '../utils/colors';

const placeholder = require('../assets/default.png');

const ListItem = ({ text, image }) => {
   const imageUrl = (
      image ? {uri: image} : placeholder
   );
   return (
      <TouchableOpacity
         underlayColor={ colors.grey }>

         <View style={ styles.mediaObject}>
            <Image source={ imageUrl } style={ styles.image }/>
            <Text style={ styles.text }> { text }</Text>
         </View>

      </TouchableOpacity>
   );
};

export default ListItem;

const styles = StyleSheet.create({
   mediaObject: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 10,
   },
   text: {flex: 1},
   image: {
      backgroundColor: colors.grey,
      width: 40,
      height: 40,
      marginRight: 16,
      marginLeft: 16,
   }
});
