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

export default class SearchResult extends Component {
   constructor(props){
      super(props);

      const dataSource = new ListView.DataSource({
         rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.state = { articles: dataSource }
   }

   renderRow = (article, sId, rId) => {
      const imageUrl = article.fields.thumbnail ? article.fields.thumbnail : null;
      return (
         <ListArticle index={ rId }
            text={ article.webTitle }
            image={ imageUrl } />
      );
   };

   render() {
      const { articles } = this.state;
      return (
         <View style={styles.container}>

            <StatusBar barStyle="default" />

            <TextInput style={ styles.searchBox }
               onChangeText={ this.makeQuery }
            />

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
     borderWidth: 2,
     margin: 16,
     paddingLeft: 10,
     fontWeight: '800'
   },
   row: {
     color: '#333333',
   },
 });
