/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Navigator,
} from 'react-native';
import Main from './Main';
import Article from './Article';
import NavigationBar from './NavigationBar';

export default class Root extends Component {

   renderScene(route, navigator)
   {
     if (route.id === 'MAIN')
     {
       return <Main navigator={ navigator }/>;
     }
console.log(route);
     return <Article articleData  = {route}/>;
   };

   render() {
     return (
       <Navigator sceneStyle={{ flex: 1 }}
          initialRoute={{ id: 'MAIN', title: 'The GArdian'}}
          renderScene={ this.renderScene }
          navigationBar={ NavigationBar }
        />
     );
   }
 }
