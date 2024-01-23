import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

const CustomDrawerHeader = ({ navigation }) => {
  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  return (
    <View style={styles.headerContainer}>
      <Image source={require('../assets/images/image16.png')} style={styles.logo} />
      <TouchableOpacity onPress={closeDrawer} style={styles.closeButton}>
        <Text style={styles.text}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 70,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: '#E5E5E5',
    paddingTop:10
  },
  text: {
    fontSize: 13,
    color: '#1E3C70',
    textDecorationLine: 'underline'
  },
  closeButton: {
    paddingBottom: 10,
    borderBottomWidth: 1, // Add a border bottom for the Cancel text
    borderBottomColor: '#E5E5E5' // Match the color of the header border
  },
  logo: {
    width: 140,
    height: 28,
  },
});

export default CustomDrawerHeader;
