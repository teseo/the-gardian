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

import { debounce } from 'lodash';
import ListArticle from './ListArticle';
import colors from '../utils/colors';
import searchFor from '../utils/core';

export default class Main extends Component {
   constructor(props){
      super(props);

      const dataSource = new ListView.DataSource({
         rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.state = { articles: dataSource }
   }

   renderRow = (article, sId, rId) => {
      const { navigator } = this.props;
      const placeholder = require('../assets/default.png');

      const imageUrl = article.fields.thumbnail ?  {uri: article.fields.thumbnail} : placeholder;
      const ARTICLE_STATE = {
         id: article.id,
         title: 'The GArdian',
         sectionName: article.sectionName,
         headline: article.fields.headline,
         trailText: article.fields.trailText,
         byline: article.fields.byline,
         imageUrl: imageUrl,
         date: article.fields.lastModified,
         body: article.fields.body,
      };
      return (
         <ListArticle index={ rId }
            text={ article.webTitle }
            image={ imageUrl }
            navState={ ARTICLE_STATE }
            navigator={ navigator } />
      );
   };

   render() {
      const { articles } = this.state;
      return (
         <View style={ styles.container }>

            <TextInput style={ styles.searchBox }
               onChangeText={ this.makeQuery } />

            <ListView dataSource={ articles }
               style={ styles.listItem }
               renderRow={ this.renderRow } />
         </View>
      );
   }

   makeQuery = debounce(query => {
      searchFor(query)
         .then(articles => {
             this.setState({
                articles: this.state.articles.cloneWithRows(articles),
             });
         })
         .catch((error) => {
            throw error;
         });
   }, 400);
 }

 const styles = StyleSheet.create({
   container: {
      paddingTop: 64,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.white
   },
   listItem: {
      flex:1,
      alignSelf: 'stretch'
   },
   searchBox: {
     height: 40,
     borderColor: colors.black,
     borderWidth: 1,
     margin: 20,
     paddingLeft: 10,
     fontWeight: '800'
   },
   row: {
     color: '#333333',
   },
 });
