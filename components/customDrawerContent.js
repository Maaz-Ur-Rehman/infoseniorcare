// CustomDrawerContent.js
import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import CustomDrawerHeader from './customDrawerHeader';
import { Text, Image, View, StyleSheet } from 'react-native';
import CustomDrawerFooter from './CustomDrawerFooter';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <CustomDrawerHeader navigation={props.navigation} />
      {/* Example: Render screen name and other screens */}
      <CustomDrawerItem
        label="Change your city"
        imageSource={require('../assets/images/image17.png')} // Replace with your image source
        onPress={() => props.navigation.navigate('home')}
      />
      <CustomDrawerItem
        label="Privacy Policy"
        imageSource={require('../assets/images/image18.png')} // Replace with your image source
        onPress={() => props.navigation.navigate('home4')}
      />
      <CustomDrawerItem
        label="FAQ’S & Support"
        imageSource={require('../assets/images/image19.png')} // Replace with your image source
        onPress={() => props.navigation.navigate('home5')}
      />
      <CustomDrawerItem
        label="Pricing"
        imageSource={require('../assets/images/image20.png')} // Replace with your image source
        onPress={() => props.navigation.navigate('home5')}
      />
      {/* DrawerItemList renders the default drawer items for the rest of the screens */}
      <DrawerItemList {...props} />
      <CustomDrawerFooter />
    </DrawerContentScrollView>
  );
};

const CustomDrawerItem = ({ label, imageSource, onPress }) => {
  return (
    <DrawerItem
      label={() => (
        <View style={styles.drawerItem}>
          <Image source={imageSource} style={styles.drawerItemImage} />
          <Text style={styles.screenLabel}>{label}</Text>
        </View>
      )}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 2,
  },
  drawerItemImage: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  screenLabel: {
    fontSize: 16,
    color: '#1E3C70',
  },
});

export default CustomDrawerContent;
