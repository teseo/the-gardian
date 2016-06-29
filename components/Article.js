/**
 * Article Component
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import colors from '../utils/colors';
import Dimensions from 'Dimensions';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const Article = ({
  id,
  title,
  sectionName,
  headline,
  trailtext,
  imageUrl,
  date,
  body
}) => {
  
  return (
    <View style={ styles.container }>
      <Text style={ styles.section }>
        { sectionName + '\n\n'}
      </Text>
      <Text style={ styles.headline }>
        { headline + '\n\n'}
      </Text>
      <Text style={ styles.trailtext }>
        { trailtext + '\n\n'}
      </Text>
      <View style={ styles.mediaObject }>
        <Image source={ imageUrl } style={ styles.image }/>
      </View>
      <Text style={ styles.date }>
        {'date: ' + date + '\n\n'}
      </Text>
      <Text style={ styles.body }>
        {'Body: ' + body+ '\n\n'}
      </Text>
    </View>
  );
};

export default Article;

const styles = StyleSheet.create({
   container: {
     backgroundColor: colors.white,
     flex: 1,
     flexDirection: 'column',
     marginTop: 64,
     padding: 9
   },
   section: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.red,
    marginBottom: 9,
   },
   headline: {
     fontWeight: 'bold',
     fontSize: 30,
     marginTop: -30,
     marginBottom: -50,
   },
   trailtext: {
     fontSize: 15,
   },
   mediaObject: {
     marginLeft: -9,
   },
   image: {
     width: width,
     height: 200,
     marginTop: -17,
     padding: -9
   },
   body: {},

});
