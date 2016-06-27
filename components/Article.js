/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import colors from '../utils/colors';

/*
id: article.id,
title: article.fields.headline,
body: article.fields.body,
url: article.apiUrl

*/
const Article = ({ id, title, body, url, imageUrl, date}) => {
  return (
    <View style={{
      backgroundColor: colors.white,
      borderLeftColor: colors.black,
      borderLeftWidth: 1,
      flex: 1,
      marginTop: 64
    }}>
      <Text >
       {'Image url: ' + imageUrl + '\n\n'}
       {'title: ' + title + '\n\n'}
       {'date: ' + date + '\n\n'}
       {'Body: ' + body+ '\n\n'}
      </Text>
    </View>
  );
};
Article.protoTypes = {
  url: React.PropTypes.string
};

export default Article;
