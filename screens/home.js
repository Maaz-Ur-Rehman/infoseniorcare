import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Header from '../components/Header';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>

            {/* <Header navigation={navigation} /> */}
            <Header />
            <ScrollView style={styles.scrollView}>
                <View style={styles.container2}>
                    <View style={styles.innerContainer2}>
                        <Text style={styles.text4}>Find & compare providers <Text style={styles.text5}>near you.</Text></Text>
                        <Text style={styles.text6}>You can use this tool to find and compare different types of Medicare providers (like physicians, hospitals, nursing homes, and others).</Text>
                        <View style={styles.input1}>
                            <TextInput style={styles.inputText1} placeholder='Search Anything'></TextInput>
                            <Fontisto name="search" size={18} color="#0470BA" />
                        </View>
                    </View>
                    <Image source={require('./../assets/images/image10.png')} style={styles.image1} />
                </View>

                <View style={styles.container3}>
                    <Image source={require('./../assets/images/image11.png')} style={styles.image2} />
                    <View style={styles.innerContainer3}>
                        <Text style={styles.text7}>Care Centers <Text style={styles.text8}> Categories</Text></Text>
                        <Text style={styles.text9}>You can use this tool to find and compare different types of Medicare providers (like physicians, hospitals, nursing homes, and others).</Text>
                    </View>
                </View>
                <View style={styles.container4}>
                    <View style={styles.box}>
                        <Text style={styles.text10}>Nursing <Text style={styles.text11}> Homes</Text></Text>
                        <Text style={styles.text12}>Compare hospitals, nursing homes, & more</Text>
                        <TouchableOpacity >
                            <FontAwesome5 name="arrow-circle-right" size={24} color="#0470BA" />
                        </TouchableOpacity>


                        <Image source={require('./../assets/images/image12.png')} style={styles.image3} />
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text10}>Memory <Text style={styles.text11}> Care</Text></Text>
                        <Text style={styles.text12}>Check out important things to consider when choosing
                            a provider.</Text>
                        <TouchableOpacity >
                            <FontAwesome5 name="arrow-circle-right" size={24} color="#0470BA" />
                        </TouchableOpacity>


                        <Image source={require('./../assets/images/image13.png')} style={styles.image3} />
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text10}>Impatient <Text style={styles.text11}> Rehabilitation</Text></Text>
                        <Text style={styles.text12}>Find Medicare-certified inpatient rehabilitation facilities</Text>
                        <TouchableOpacity >
                            <FontAwesome5 name="arrow-circle-right" size={24} color="#0470BA" />
                        </TouchableOpacity>


                        <Image source={require('./../assets/images/image14.png')} style={styles.image3} />
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text10}>In Home <Text style={styles.text11}> Care</Text></Text>
                        <Text style={styles.text12}>Compare hospitals, nursing homes, & more</Text>
                        <TouchableOpacity >
                            <FontAwesome5 name="arrow-circle-right" size={24} color="#0470BA" />
                        </TouchableOpacity>


                        <Image source={require('./../assets/images/image15.png')} style={styles.image3} />

                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text10}>Nursing <Text style={styles.text11}> Homes</Text></Text>
                        <Text style={styles.text12}>Compare hospitals, nursing homes, & more</Text>
                        <TouchableOpacity >
                            <FontAwesome5 name="arrow-circle-right" size={24} color="#0470BA" />
                        </TouchableOpacity>


                        <Image source={require('./../assets/images/image12.png')} style={styles.image3} />
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text10}>Memory <Text style={styles.text11}> Care</Text></Text>
                        <Text style={styles.text12}>Check out important things to consider when choosing
                            a provider.</Text>
                        <TouchableOpacity >
                            <FontAwesome5 name="arrow-circle-right" size={24} color="#0470BA" />
                        </TouchableOpacity>


                        <Image source={require('./../assets/images/image13.png')} style={styles.image3} />
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text10}>Impatient <Text style={styles.text11}> Rehabilitation</Text></Text>
                        <Text style={styles.text12}>Find Medicare-certified inpatient rehabilitation facilities</Text>
                        <TouchableOpacity >
                            <FontAwesome5 name="arrow-circle-right" size={24} color="#0470BA" />
                        </TouchableOpacity>


                        <Image source={require('./../assets/images/image14.png')} style={styles.image3} />
                    </View>
                    <View style={styles.box}>
                        <Text style={styles.text10}>In Home <Text style={styles.text11}> Care</Text></Text>
                        <Text style={styles.text12}>Compare hospitals, nursing homes, & more</Text>
                        <TouchableOpacity >
                            <FontAwesome5 name="arrow-circle-right" size={24} color="#0470BA" />
                        </TouchableOpacity>


                        <Image source={require('./../assets/images/image15.png')} style={styles.image3} />

                    </View>

                </View>
                <View style={styles.input}>
                    <FontAwesome name="barcode" size={20} color="black" />
                    <TextInput style={styles.inputText} placeholder='Enter Zip Code Here' ></TextInput>
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: 5,
        // paddingBottom: 490,
    },

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
    container2: {
        backgroundColor: '#E8ECF4',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: "100%",
        // paddingHorizontal: 15,
        // paddingLeft:5,
        paddingRight: 34,
        height: 180,
        // borderRadius: 10,
        zIndex: -1,
        borderBottomLeftRadius: 55,
        borderBottomRightRadius: 55,
    },

    container3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: "100%",
        paddingHorizontal: 15,
        // paddingLeft:5,
        // paddingRight: 34,
        height: 180,
        // borderRadius: 10,
    },
    container4: {
        marginTop: -70,
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        justifyContent: 'space-around',
    },
    box: {
        width: '46%',
        height: 180,
        // flexDirection:"column",
        // justifyContent:"flex-start",
        padding: 12,
        margin: 5, // Add margin for the gap
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: '#E8ECF4',
        borderRadius: 10,
        borderColor: 'gray'
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
    innerContainer2: {
        flexDirection: 'column',
        // width:"80%",
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        marginTop: 40,
        paddingRight: 35
        // paddingHorizontal: 20,
        // marginBottom:30
    },
    innerContainer3: {
        flexDirection: 'column',
        // width:"80%",
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        marginTop: 20,
        paddingLeft: 65,

        paddingRight: 25
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
        fontSize: 16,
        fontFamily: 'Gilroy-Bold',
    },
    text6: {
        width: 220,
        color: 'black',
        fontSize: 12.5,
        fontFamily: 'Gilroy',
        lineHeight: 15
    },
    text7: {
        // width: 220,
        color: 'black',
        fontSize: 20,

        fontFamily: 'Gilroy-Bold',
        // lineHeight: 15
    },
    text8: {
        // width: 220,
        color: '#0470BA',
        fontSize: 20,
        fontFamily: 'Gilroy-Bold',
        // lineHeight: 15
    },
    text9: {
        marginTop: 3,
        width: "45%",
        color: 'black',
        fontSize: 10,
        fontFamily: 'Gilroy',
        lineHeight: 15
    },
    text11: {
        color: '#0470BA',
        marginTop: 20,
        fontSize: 16,
        fontFamily: 'Gilroy-Bold',
        marginBottom: 2

    },
    text10: {

        fontSize: 16,
        fontFamily: 'Gilroy-Bold',
        marginBottom: 2

    },
    text12: {
        lineHeight: 13,
        fontSize: 12,
        fontFamily: 'Gilroy',
        marginBottom: 5
    },
    input: {
        borderColor: '#FFD401',
        backgroundColor: 'white',
        width: 170,
        paddingVertical: 7,
        borderRadius: 5,
        borderWidth: 2.5,
        position: 'relative',
        top: 128,
        left: 100,
        zIndex: 1,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    input1: {
        borderColor: '#E8ECF4',
        backgroundColor: 'white',
        width: 215,
        paddingVertical: 5,
        paddingLeft: 10,
        marginLeft: -4,
        // paddingHorizontal:2,
        borderRadius: 7,
        marginTop: 5,
        borderWidth: 2.5,
        paddingRight: 8,
        // position: 'absolute',
        // top: 128,
        // left: 100,
        // zIndex: 1,
        // paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    inputText: {
        paddingLeft: 15,
        fontSize: 12,
        color: 'black',
    },

    inputText1: {
        width: 160,
        height: 20,
        // paddingLeft:15,
        fontSize: 12,
        color: 'black',
        borderRightColor: "#A7A7A7",
        borderRightWidth: 1
    },
    image1: {

        position: 'absolute',
        top: 10,
        right: 0,
        borderBottomRightRadius: 50
    },
    image2: {
        width: 45,
        height: 55,
        position: 'absolute',
        top: 30,
        left: 22,
    },
    image3: {
        // height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    gap: {
        // width: 20,
        paddingLeft: 20
    },
});

export default Home;
