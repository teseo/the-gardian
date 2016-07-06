/**
 * Navigator Component
 */

//React components
import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

//utils
import colors from '../utils/colors';
//Navigation Bar route mapper. The one in charge of navigate from articles
//to search result page
const NavigationBarRouteMapper = {

  LeftButton: (route, navigator) => {
    if (route.id === 'MAIN')
    {
      return null;
    }

    return (
      <TouchableOpacity
        onPress={ () => navigator.pop() }
        style={ styles.navBarLeftButton }>
          <Text style={[ styles.navBarText, styles.navBarButtonText ]}>
            { '<Back' }
          </Text>
      </TouchableOpacity>
    );
  },

  RightButton: () => {
    return null;
  },

  Title: (route) => {
    return (
      <View style={ styles.titleContainer }>
        <Text style={[ styles.navBarText, styles.navBarTitleText ]}>
          { route.title }
        </Text>
      </View>

    );
  }

};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: colors.blue,
  },
  navBarText: {
    fontSize: 16,
    color: colors.white
  },
  navBarTitleText: {
    fontWeight: '500',
    marginVertical: 9
  },
  navBarLeftButton: {
    marginVertical: 9,
  }
});
// Navigation compoment
export default (
    <Navigator.NavigationBar
      style={ styles.navBar }
      routeMapper={ NavigationBarRouteMapper }/>
);
