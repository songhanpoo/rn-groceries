import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from "../assets/logo/index";

import {
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const retrieveData = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken');
        // userToken ? navigation.navigate("NotAuthenticated") : navigation.navigate("Authenticated")
        userToken ? navigation.navigate("Authenticated") : navigation.navigate("NotAuthenticated")
        // Other set states
      } catch (error) {
        console.log(error);
      }

    };
    setTimeout(() => {
      retrieveData();
    }, 1000);
  },[]);
  
  return (
    <SafeAreaView style={styles.container}>
      <Icon name="logo" fill="#fff" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#53B175",
    position: 'absolute', 
    top: 0, left: 0, 
    right: 0, bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});

export default SplashScreen;
