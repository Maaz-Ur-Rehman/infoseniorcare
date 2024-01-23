import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import CustomDrawerFooter from '../components/CustomDrawerFooter';
import SvgUri from 'react-native-svg';
const Start = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
        <View style={styles.container}>
        <View>
        {/* <SvgUri
            style={styles.logo}
            width="100%"  // Set the width to 100%
            height="100%" // Set the height to 100%
            source={require('../assets/images/info.svg')}
          /> */}
      <Image source={require('../assets/images/image16.png')} style={styles.logo} />
        </View>
      <View style={styles.innercontainer}>
        <View style={styles.box}>
         <Text style={styles.text11}>Login As</Text>
          <Text style={styles.text12}>Admin</Text>
          <TouchableOpacity>
            <FontAwesome5 name="arrow-circle-right" size={24} color="#0470BA" />
          </TouchableOpacity>
          <Image source={require('./../assets/images/admin.png')} style={styles.image} />
        </View>
        <View style={styles.box}>
        <Text style={styles.text11}>Login As</Text>
          <Text style={styles.text12}>Patient</Text>
          <TouchableOpacity>
            <FontAwesome5 name="arrow-circle-right" size={24} color="#0470BA" />
          </TouchableOpacity>
          <Image source={require('./../assets/images/patient.png')} style={styles.image} />
        </View>
        <View style={styles.box}>
        <Text style={styles.text11}>Login As</Text>
          <Text style={styles.text12}>Facility</Text>
          <TouchableOpacity>
            <FontAwesome5 name="arrow-circle-right" size={24} color="#0470BA" />
          </TouchableOpacity>
          <Image source={require('./../assets/images/facility.png')} style={styles.image} />
        </View>
        <View style={styles.box}>
        <Text style={styles.text11}>Login As</Text>
          <Text style={styles.text12}>Facility</Text>
          <TouchableOpacity>
            <FontAwesome5 name="arrow-circle-right" size={24} color="#0470BA" />
          </TouchableOpacity>
          <Image source={require('./../assets/images/professional.png')} style={styles.image} />
        </View>
      </View>
      <CustomDrawerFooter />
    </View>
    </SafeAreaView>
  );
};

export default Start;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,

        backgroundColor:"rgba(255, 255, 255, 1)"
      },
      container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop:40,
      
      },
  innercontainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    marginTop:40,
    marginBottom:-160
  },
  box: {
    width: '46%',
    paddingHorizontal: 6,
    height:"70%",
    margin: 6,
    borderWidth:1,

    borderColor: '#A2A2A2',
    backgroundColor: '#F3F3F3',
    
    borderRadius: 10,
    borderBottom:-80
  },
  text11: {
    color: '#0470BA',
    marginTop: 20,
    fontSize: 16,
    fontFamily: 'Gilroy-Bold',
    marginBottom: 2,
  },
  logo:{
    width:220,
    height:42

  },

  text12: {
    lineHeight: 13,
    fontSize: 12,
    fontFamily: 'Gilroy',
    marginBottom: 5,
  },
  image:{
    width:85,
    height:120,
    position:"absolute",
    bottom:0,
    right:0
  }

});
