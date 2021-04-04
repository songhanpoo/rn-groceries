import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  View,
  Button
} from 'react-native';
import cfassets from "../config/assets";
import Icon from "../assets/logo";

const Onboarding = () => {
  return (
    <ImageBackground source={require('../assets/bg/onbording.png')} style={styles.image}>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapperContent}>
          <Icon name="carrot" />
          <Text style={styles.title} >Welcome {"\n"} to our Store</Text>
          <Text style={styles.p} >Get your groceries in as fast as one hour</Text>
          <Button title="Get Started" color="#53B175"/>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    top: 0, left: 0, 
    right: 0, bottom: 0, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperContent:{
    marginTop: Dimensions.get('window').height/4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  title:{
    fontSize: 48,
    fontWeight:"bold",
    color:'#FFFFFF',
    textAlign:'center'
  },
  p:{
    fontSize: 15,
    color:'#FFFFFF',
    textAlign:'center'
  }

});

export default Onboarding;
