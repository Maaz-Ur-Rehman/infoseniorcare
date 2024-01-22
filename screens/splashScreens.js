import React, { useEffect } from 'react';
import { Image, Text, View, StyleSheet, ImageBackground } from 'react-native';

export default function SplashScreens({navigation}) {
  useEffect(() => {
    // Add a delay of 3 seconds before navigating to WelcomeScreen1
    const timer = setTimeout(() => {
      navigation.navigate('home');
    }, 3000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <ImageBackground
      source={require('./../assets/backgroundImage.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image style={styles.image1} source={require('./../assets/images/image1.png')} />
        <Image style={styles.image2} source={require('./../assets/images/image2.png')} />

        <Text style={styles.text1}>Supporting Graceful Aging</Text>

        <Image style={styles.line} />

        <Text style={styles.text2}>Trusted Senior</Text>
        <Text style={styles.text3}>Care Services</Text>

        <Image style={styles.image3} source={require('./../assets/images/image3.png')} />
        <Image style={styles.image4} source={require('./../assets/images/image4.png')} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50, // Adjust the overall top margin for the container
  },
  image1: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
    marginBottom: -30, // Adjust the margin to your preference
  },
  image2: {
    width: 200,
    height: 150,
    resizeMode: 'contain',
    marginBottom: -35, // Adjust the margin to your preference
  },
  line: {
    width: '30%',
    height: 1.5,
    backgroundColor: '#FFD401',
    marginBottom: 10,
    marginTop:-5 // Adjust the margin to your preference
  },
  text1: {
    fontSize: 15,
    color: 'white',
    marginBottom: 20,
    fontFamily: 'Gilroy',
  },
  text2: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'Gilroy-Bold',
    marginBottom: 0,
  },
  text3: {
    fontSize: 45,
    color: '#FFD401',
    fontFamily: 'Gilroy-Bold',
    marginBottom: -45,
  },
  image3: {
    width: 180,
    height: 200,
    resizeMode: 'contain',
    marginBottom: -90,
  },
  image4: {
    width: 340,
    height: 440,
    resizeMode: 'contain',
  },
});
