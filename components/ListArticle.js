/**
 * List Article Component
 */
//React components
import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   TouchableOpacity,
   Image,
   View
} from 'react-native';

//utis and assets
import colors from '../utils/colors';
const placeholder = require('../assets/default.png');

/**
* List Article component class
*/
export default  ListArticle = ({ text, image, navState, navigator }) => {

   return (
      <TouchableOpacity
         underlayColor={ colors.grey }
         onPress={ () => navigator.push(navState) }>

         <View style={ styles.mediaObject }>
            <Image source={ image } style={ styles.image }/>
            <Text style={ styles.text }>{ text }</Text>
         </View>
      </TouchableOpacity>
   );
};

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
