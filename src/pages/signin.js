import React, { createFactory } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';

import cfassets from "../config/assets";

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Signin</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: cfassets.primaryColor,
    position: 'absolute', 
    top: 0, left: 0, 
    right: 0, bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default SignInScreen;
