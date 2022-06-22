

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import params from './src/params';

//Importes das class

import Params from './src/params';

export default class App extends Component {
  
  render(){
    return(
      <View style = {styles.sectionContainer}>
        <Text style = {styles.sectionTitle}>
          Iniciando o Mines!
        </Text>
        <Text style = {styles.sectionDescription}>
          Tamanho da garde: 
          {params.getRowAmounts()}x{params.getColumnsAmount()}

        </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


