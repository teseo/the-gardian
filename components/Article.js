/**
 * Article Component
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
} from 'react-native';

import parseArticleBody from '../utils/articleParser';

import colors from '../utils/colors';
import Dimensions from 'Dimensions';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const Article = ({
  articleData
}) => {
  const parsedBody = parseArticleBody(articleData.body)
  return (
    <ScrollView style={ styles.container }>
      <Text style={ styles.section }>
        { articleData.sectionName + '\n\n'}
      </Text>
      <Text style={ styles.headline }>
        { articleData.headline + '\n\n'}
      </Text>
      <Text style={ styles.trailtext }>
        { articleData.trailText + '\n\n'}
      </Text>
      <View style={ styles.author }>
        <Text style={ styles.bylineStyled }>
          { articleData.byline + '\n\n'}
        </Text>
        <Text style={ styles.date }>
          { new Date(articleData.date).toLocaleString('en-GB',{year: 'numeric',month: '2-digit',day: '2-digit', hour: '2-digit', minute:'2-digit'}) + '\n\n'}
        </Text>
      </View>

      <View style={ styles.mediaObject }>
        <Image source={ articleData.imageUrl } style={ styles.image }/>
      </View>

      <Text style={ styles.body }>
        { parseArticleBody(articleData.body)}
      </Text>
    </ScrollView>
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
   author: {
     flex: 1,
     flexDirection: 'column',
     marginTop: -15
   },
   bylineStyled: {
     color: colors.blue
   },
   image: {
     width: width,
     height: 200,
     marginTop: -17,
     padding: -9
   },
   body: {
     marginTop: 9,
     textAlign: 'justify'
   },
   date: {
     marginTop: -32,
   },

});
