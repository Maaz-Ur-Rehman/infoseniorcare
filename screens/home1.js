import React from 'react';
import { ScrollView, Image, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Home1 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <AntDesign name="arrowright" size={24} color="white" />
        </View>
        <View style={styles.innerContainer1}>
          <Image source={require('./../assets/images/zip.png')} />
          <Text style={styles.text1}>Discover Best Care Centers</Text>
          <Text style={styles.text2}>Search By <Text style={styles.text3}>Zip Code</Text></Text>
          <TextInput
            style={styles.input}
          />
        </View>
        <View>
          <AntDesign name="arrowright" size={24} color="white" />
        </View>
        <View>
          <AntDesign name="arrowright" size={24} color="white" />
        </View>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {/* Your scrollable content goes here */}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'black',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingTop: 20,
  },
  innerContainer1: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 55,
    paddingLeft: 50,
    paddingHorizontal: 20,
  },
  text1: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text2: {
    color: 'white',
    fontSize: 14,
  },
  text3: {
    color: 'blue', // You can change the color as needed
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
    width: 200,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: 'white', // Set the background color for the scrollable area
  },
});

export default Home1;
