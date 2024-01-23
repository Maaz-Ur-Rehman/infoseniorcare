import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const CustomDrawerFooter = () => {
  return (
    <View style={styles.footer}>
      <Image source={require('../assets/images/image21.png')} style={styles.image1} />
      <Text style={styles.text1}>Copyrights @ All Rights Reserved</Text>
      <Text style={styles.text2}>American Health Care Info</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop:330,
    alignItems:"center"

  },
  image1: {
    color: 'black',
    marginBottom:5

  },
  text2: {
    fontSize: 10,
    fontWeight: '500',
    
    color: '#01AEAD',
  },
});

export default CustomDrawerFooter;
