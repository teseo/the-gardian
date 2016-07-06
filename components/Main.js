/**
 * Main Component
 */

//React components
import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   Image,
   TextInput,
   ScrollView,
   ListView,
   TouchableHighlight,
   StatusBar,
   View
} from 'react-native';

//debounce to controll api calls
import { debounce } from 'lodash';

//Application component
import ListArticle from './ListArticle';

//utils
import colors from '../utils/colors';
import searchFor from '../utils/core';
import parseArticleHTMLText from '../utils/articleParser';
import parseArticleDate from '../utils/articleDateParser';
import renderIf from '../utils/renderif';

/**
* Main component class
*/
export default class Main extends Component {
   constructor(props){
      super(props);

      const dataSource = new ListView.DataSource({
         rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.state = {
         articles: dataSource,
         loaderImage:false,
         dataSetEmpty: false,
         offset: 1
      }

   }

   componentDidMount() {
      //display latest news ordered by date by default once component mounted
      this.makeQuery('');
   }

   renderRow = (article, sId, rId) => {

      const { navigator } = this.props;
      const placeholder = require('../assets/default.png');

      const imageUrl = article.fields.thumbnail ?
      { uri: article.fields.thumbnail } : placeholder;

      const byline = article.fields.byline ?  article.fields.byline : '';
      const ARTICLE_STATE = {
         id: article.id,
         title: 'The GArdian',
         sectionName: article.sectionName,
         headline: article.fields.headline,
         trailText: parseArticleHTMLText(article.fields.trailText),
         byline: byline,
         imageUrl: imageUrl,
         date: parseArticleDate(article.fields.lastModified),
         body: parseArticleHTMLText(article.fields.body),
      };
      return (
         <ListArticle index={ rId }
            text={ article.webTitle }
            image={ imageUrl }
            navState={ ARTICLE_STATE }
            navigator={ navigator } />
      );
   };

   toggleImageLoader () {
      this.setState({ loaderImage:!this.state.loaderImage });
   }

   toggleEmptyResult ( value ) {
      this.setState({ dataSetEmpty: value });
   }

   render() {

      const { articles }   = this.state;

      const loaderImage    = require('../assets/loading.gif');
      const loadMore       = require('../assets/plus-button.gif');

      return (
         <View style={ styles.container }>

            <TextInput style={ styles.searchBox }
               onChangeText={ this.makeQuery } />

               {renderIf(this.state.loaderImage)(
                  <Image source={ loaderImage } style={ styles.loaderImage }/>
               )}

               {renderIf(this.state.dataSetEmpty)(
                  <Text style={ styles.emptyResult }> Empty Result </Text>
               )}

               <ListView dataSource={ articles }
                  style={ styles.listItem }
                  enableEmptySections={true}
                  renderRow={ this.renderRow } ref="listView"/>
         </View>
      );
   }

   makeQuery = debounce(query => {
      //display loader image
      this.toggleImageLoader();

      //scroll to top on searching
      var offset = this.state.offset;
      this.refs.listView.scrollTo({y:0});

      searchFor(query, offset)
         .then(articles => {
             this.setState({
                articles: this.state.articles.cloneWithRows(articles),
             });
         }).then(() => {
            // hide loader image
            this.toggleImageLoader();
            var emptyValue = this.state.articles._cachedRowCount == 0
            ? true : false;
            //if empty result, display empty result message
            this.toggleEmptyResult(emptyValue);
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
   loaderImage: {
     marginTop: -20,
   },
   button: {
     width:15,
     height:15
   },
   emptyResult: {
      marginTop: 10
   }
 });
