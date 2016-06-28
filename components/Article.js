/**
 * Article Component
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
import colors from '../utils/colors';

const Article = ({ id, title, headline, body, url, imageUrl, date}) => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.section }>
      {'Image url: ' + imageUrl + '\n\n'}
      </Text>
      <Text>
      {'headline: ' + headline + '\n\n'}
      </Text>
      <Text>
      {'date: ' + date + '\n\n'}
      </Text>
      <Text>
      {'Body: ' + body+ '\n\n'}
      </Text>
    </View>
  );
};
Article.protoTypes = {
  url: React.PropTypes.string
};

export default Article;
const styles = StyleSheet.create({
   container: {
     backgroundColor: colors.white,
     flex: 1,
     flexDirection: 'column',
     marginTop: 64
   },
   section: {},
   headline: {},
   trailtext: {},
   image: {},
   body: {},

});
