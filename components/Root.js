/**
 * Root compnent
 */

//React components
import React, { Component } from 'react';

import { Navigator } from 'react-native';

//Application components
import Main from './Main';
import Article from './Article';
import NavigationBar from './NavigationBar';

/**
* Root class
*/
export default class Root extends Component {

   renderScene(route, navigator) {
     if (route.id === 'MAIN')
     {
       return <Main navigator={ navigator }/>;
     }

     return <Article articleData={ route }/>;
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
