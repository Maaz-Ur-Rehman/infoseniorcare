import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
const Home = () => {
    return (
        <View style={styles.container}>
            
                <View style={styles.container1}>
                 
                <Feather name="align-left" size={24} color="white" />
                   
                    <View style={styles.innerContainer1}>
                        <Image source={require('./../assets/images/zip.png')} />
                        <Text style={styles.text1}>Discover Best Care Centers</Text>
                        <Text style={styles.text2}>Search By <Text style={styles.text3}>Zip Code</Text></Text>
                        
                    </View>
                    <MaterialCommunityIcons name="login-variant" size={24} color="white" />
                    <View style={styles.gap} />     
                    <MaterialIcons name="notifications-none" size={24} color="white" /> 
                   
                </View>
                <View style={styles.container2}>
                    <View style={styles.innerContainer2}>
                        <Text style={styles.text4}>Find & compare providers <Text style={styles.text5}>near you.</Text></Text>
                        <Text style={styles.text6}>You can use this tool to find and compare different types of Medicare providers (like physicians, hospitals, nursing homes, and others).</Text>
                        <View style={styles.input1}>
                            <TextInput style={styles.inputText1} placeholder='Search Anything'></TextInput>
                            <Fontisto name="search" size={24} color="#E8ECF4" />
                        </View>
                    </View>
                        <Image source={require('./../assets/images/image10.png')} style={styles.image1} />
                </View>
          
            <View>
                <Text>This is my view 2</Text>
            </View>
            <View>
                <Text>This is my view 2</Text>
            </View>
            <View style={styles.input}>
            <FontAwesome name="barcode" size={20} color="black" />
            <TextInput style={styles.inputText} placeholder='Enter Zip Code Here' ></TextInput>
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingBottom: 490,
    },
   
    container1: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black',
        height:140,
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55,
        paddingHorizontal:30,
        paddingTop:50
    },
    container2: {
        backgroundColor: '#E8ECF4',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width:"100%",
        // paddingHorizontal: 15,
        // paddingLeft:5,
        paddingRight:34,
        height:180,
        // borderRadius: 10,
        zIndex: -1,
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55,
    },
    innerContainer1: {
        flexDirection: 'column',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        // marginTop: ,
        paddingLeft: 50,
        paddingHorizontal: 20,
        marginBottom:30
    },
    innerContainer2:{
        flexDirection: 'column',
        // width:"80%",
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        marginTop: 40,
        paddingRight:35
        // paddingHorizontal: 20,
        // marginBottom:30
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
    text4: {
        color: 'black',
        fontSize: 15,
        fontFamily: 'Gilroy-Bold',
    },
    text5: {
        color: '#0470BA',
        fontSize: 15,
        fontFamily: 'Gilroy-Bold',
    },
    text6: {
        width:200,      
        color: 'black',
        fontSize: 12,
        fontFamily: 'Gilroy',
    },
    input: {
        borderColor: '#FFD401',
        backgroundColor: 'white',
        width: 170,
        paddingVertical: 7,
        borderRadius: 5,
        borderWidth: 2.5,
        position: 'absolute',
        top: 128,
        left: 100,
        zIndex: 1,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems:"center"
      },
      input1: {
        borderColor: '#E8ECF4',
        backgroundColor: 'white',
        width: 210,
        paddingVertical: 1,
        paddingHorizontal:10,
        borderRadius: 5,

        borderWidth: 2.5,
        // position: 'absolute',
        // top: 128,
        // left: 100,
        // zIndex: 1,
        // paddingHorizontal: 10,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"space-between"
      },
      inputText: {
        paddingLeft:10,
        fontSize: 12, 
        color: 'black', 
      },
 
      inputText1: {
        paddingLeft:10,
        fontSize: 12, 
        color: 'black', 
      },
    image1:{
        
        position: 'absolute',
        top: 10,
        right:0,
        borderBottomRightRadius:50
    },
    gap: {
        // width: 20,
        paddingLeft:20
      },
});

export default Home;
