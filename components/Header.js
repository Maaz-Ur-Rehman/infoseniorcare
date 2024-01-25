import { ActivityIndicator, FlatList, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { searchByZip } from '../redux/healthCareSlice';
const Header = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const healthCareData = useSelector((state) => state.healthCare.data);
    const loading = useSelector((state) => state.healthCare.loading);
    console.log(healthCareData,"daa")

    const [zipCode, setZipCode] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(2);
    const [searchResults, setSearchResults] = useState([]);
    const [isFetchingMore, setIsFetchingMore] = useState(false);


    
  const [modalVisible, setModalVisible] = useState(false);
  const handleScroll = ({ nativeEvent }) => {
    const { contentOffset, layoutMeasurement, contentSize } = nativeEvent;

    const isCloseToBottom =
      layoutMeasurement.height + contentOffset.y >= contentSize.height - 10;

    if (isCloseToBottom && !isFetchingMore) {
      setIsFetchingMore(true);
      dispatch(searchByZip({ zipCode, page: page + 1, limit }))
        .then(() => setIsFetchingMore(false))
        .catch(() => setIsFetchingMore(false));
    }
  };

  const renderDropdownItem = ({ item }) => (
    <TouchableOpacity style={styles.dropdownItem} onPress={() => handleDropdownItemPress(item)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    dispatch(searchByZip({ zipCode, page, limit }));
  }, [dispatch, zipCode, page, limit]);

  const handleSearch = () => {
    setPage(1);
    dispatch(searchByZip({ zipCode, page: 1, limit }));
  };

  const handleSearchInputChange = (text) => {
    setZipCode(text);
    setPage(1);
    dispatch(searchByZip({ zipCode: text, page: 1, limit }));
  };

//   const renderDropdownItem = ({ item }) => (
//     <TouchableOpacity style={styles.dropdownItem} onPress={() => handleDropdownItemPress(item)}>
//       <Text>{item}</Text>
//     </TouchableOpacity>
//   );

  useEffect(() => {
    dispatch(searchByZip({ zipCode, page, limit }));
  }, [dispatch, zipCode, page, limit]);

  const handleLoadMore = () => {
    dispatch(searchByZip({ zipCode, page: page + 1, limit }));
    setPage(page + 1);
  };

  const handleDropdownItemPress = (selectedItem) => {
    setZipCode(selectedItem);
    setModalVisible(false);
  };

    const openDrawer = () => {
        navigation.openDrawer();
    };

    const goToNotificationScreen = () => {
        navigation.navigate('NotificationScreen');
    };

    const goToStart = () => {
        navigation.navigate('start');
    };

    return (
        <View style={styles.container1}>
            <TouchableOpacity onPress={openDrawer}>
                <Feather name="align-left" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.innerContainer1}>
                <Image source={require('./../assets/images/zip.png')} />
                <Text style={styles.text1}>Discover Best Care Centers</Text>
                <Text style={styles.text2}>Search By <Text style={styles.text3}>Zip Code</Text></Text>
            </View>
            <TouchableOpacity onPress={goToStart}>
                <MaterialCommunityIcons name="login-variant" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.gap} />
            <TouchableOpacity onPress={goToNotificationScreen}>
                <MaterialIcons name="notifications-none" size={24} color="white" />
            </TouchableOpacity>
            <View style={styles.input}>
        <FontAwesome name="barcode" size={20} color="black" />
        <TextInput
          style={styles.inputText}
          placeholder="Enter Zip Code Here"
          value={zipCode}
          onChangeText={handleSearchInputChange}
          onFocus={() => setModalVisible(true)}
        />
      </View>
{/* 
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFD401" />
          ) : (
            <FlatList
              data={healthCareData}
              renderItem={renderDropdownItem}
              keyExtractor={(item) => (item ? item.toString() : null)}
              onEndReached={handleLoadMore}
              onEndReachedThreshold={0.1}
            />
          )}
        </View>
      </Modal> */}
            </View>
    );
};


export default Header;

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
        position: "absolute",
        zIndex: 1


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
    input: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: '#FFD401',
        borderWidth: 2.5,
        borderRadius: 5,
        width: 170,
        paddingVertical: 7,
        paddingHorizontal: 10,
        position: "absolute",
        top: 120,
        left: 94,
        zIndex: 2

    },

    inputText: {
        flex: 1,
        marginLeft: 10,
        fontSize: 12,
        color: 'black',
    },
    modalContainer: {
        backgroundColor: 'white',
        marginTop: 130, // Adjust the marginTop based on your UI
        borderRadius: 5,
        borderWidth: 2.5,
        borderColor: '#FFD401',
        width: 170,
        alignSelf: 'center',
        elevation: 5,
      },
    
      dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
      },
})