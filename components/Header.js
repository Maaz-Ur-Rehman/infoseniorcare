import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Header = ({navigation}) => {
    
   
  return (
    
    <View style={styles.container1}>
   <TouchableOpacity onPress={()=>navigation.toggleDrawer()}>
        <Feather name="align-left" size={24} color="white" />
      </TouchableOpacity>

    <View style={styles.innerContainer1}>
        <Image source={require('./../assets/images/zip.png')} />
        <Text style={styles.text1}>Discover Best Care Centers</Text>
        <Text style={styles.text2}>Search By <Text style={styles.text3}>Zip Code</Text></Text>

    </View>
    <MaterialCommunityIcons name="login-variant" size={24} color="white" />
    <View style={styles.gap} />
    <MaterialIcons name="notifications-none" size={24} color="white" />

</View>
  )
}

export default Header

const styles = StyleSheet.create({
    container1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black',
        height: 140,
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55,
        paddingHorizontal: 30,
        paddingTop: 50,
    },
    innerContainer1: {
        flexDirection: 'column',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        // marginTop: ,
        paddingLeft: 50,
        paddingHorizontal: 20,
        marginBottom: 30
    },
    text1: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Gilroy',
        marginTop: 9,
    },
    text2: {
        color: 'white',
        marginTop: 3,
        fontSize: 19,
        fontFamily: 'Gilroy-Bold',
    },
    text3: {
        color: '#FFD401',
        fontSize: 19,
        fontFamily: 'Gilroy-Bold',
    },
    gap: {
        // width: 20,
        paddingLeft: 20
    },
})