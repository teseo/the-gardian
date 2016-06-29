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

const ListArticle = ({ text, image, navState, navigator }) => {

   return (
      <TouchableOpacity
         underlayColor={ colors.grey }
         onPress={ () => navigator.push(navState) }>

         <View style={ styles.mediaObject }>
            <Image source={ image } style={ styles.image }/>
            <Text style={ styles.text }> { text }</Text>
         </View>
      </TouchableOpacity>
   );
};

export default ListArticle;

const styles = StyleSheet.create({
   mediaObject: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 10,
   },
   text: { flex: 1 },
   image: {
      width: 40,
      height: 40,
      marginRight: 16,
      marginLeft: 16,
   }
});
