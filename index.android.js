/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class accounting extends Component {


  constructor(props) {
    super(props);
    GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
      GoogleSignin.configure({}).then(() => {
        GoogleSignin.currentUserAsync().then((user)=>{
          console.log('User', user);
        }).done();
      });
    }).catch((error) => {
      console.log('Play services error', error.code, error.message);
    });
  }
  _signIn(param) {
    GoogleSignin.signIn().then((user)=>{
      console.log(user);
    }).catch((err)=>{
      console.log('WRONG SING IN', err);
    }).done();
  }


  render() {
    return (
      <GoogleSigninButton
        style={{ width: 48, height: 48 }}
        size={GoogleSigninButton.Size.Icon}
        color={GoogleSigninButton.Color.Dark}
        onPress={this._signIn.bind(this)} />
    );
  }
}

AppRegistry.registerComponent('accounting', () => firstapp);
