import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

const WelcomeScreen3 = ({navigation}) => {
  const goToNextScreen = () => {
    // Implement your navigation logic to the next screen
    // For example, you can use React Navigation's navigation.navigate
    navigation.navigate('welcomeScreen4'); // Replace 'NextScreen' with your actual screen name
  };

  return (
    <ImageBackground source={require('./../assets/images/image7.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image style={styles.image1} source={require('./../assets/images/image1.png')} />

        <Text style={styles.text1}>Personalized &</Text>

        <Text style={styles.text3}>Advance Search</Text>
        <Text style={styles.text2}>Premium and prestige car daily rental. Experience the thrill at a lower price</Text>
        <View style={styles.arrowContainer}>
          <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Skip</Text></TouchableOpacity>
          <View style={styles.gap} />
          <Text style={styles.button}>Next</Text>
          <View style={styles.gap} />
          <TouchableOpacity onPress={goToNextScreen}>
          <FontAwesome5 name="arrow-circle-right" size={24} color="#FFD401" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen3;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  buttonText: {
    color: 'white', 
  },

  image1: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    marginTop: 'auto',
    padding: 30,
  },
  arrowContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft:"auto"
  },
  Text:{
    color:"white"
  },
  button: {
    marginRight: 2,
    marginLeft: 2,
    color:"white",
    fontWeight:"bold" // Add margin to create space between 'Skip', 'Next', and the arrow
  },
  gap: {
    width: 5, // Adjust the width to control the size of the gap
  },
  text1: {
    fontSize: 20,
    color: 'white',
    marginBottom: 0,
    fontFamily: 'Gilroy',
  },
  text2: {
    fontSize: 12,
    color: 'white',
    marginBottom: 40,
    fontFamily: 'Gilroy',
  },
  text3: {
    fontSize: 40,
    color: '#FFD401',
    fontFamily: 'Gilroy-Bold',
    marginBottom: 0,
  },
});
