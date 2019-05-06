/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, NativeModules} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  handleOnPress = () => {
    let url = "https://content.jwplatform.com/manifests/vM7nH0Kl.m3u8";
    NativeModules.VideoPlayerManager.play(url);
  };

  render() {
    console.log(NativeModules.VideoPlayerManager);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={this.handleOnPress}
        >
          <Text style={styles.button}>PRESS ME</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: 'red',
    borderColor: 'red',
    color: 'white',
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 2,
  },
});
