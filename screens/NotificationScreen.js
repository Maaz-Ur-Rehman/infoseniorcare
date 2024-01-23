import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const NotificationScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.text1}>Notifications</Text>
                <TouchableOpacity onPress={() => navigation.navigate("home")} style={styles.closeButton}>
                    <Text style={styles.text2}>Cancel</Text>
                </TouchableOpacity>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.notificationItem}>
                    <View style={styles.backgroundImg}>
                        <Image source={require('./../assets/images/image22.png')} style={styles.image} />
                    </View>
                    <View style={styles.notificationText}>
                        <Text style={styles.text3}>Changes in residents' health status.</Text>
                        <Text style={styles.text4}>Mon at 1:44 PM</Text>
                    </View>
                </View>
                <View style={styles.notificationItem}>
                    <View style={styles.backgroundImg}>
                        <Image source={require('./../assets/images/image22.png')} style={styles.image} />
                    </View>
                    <View style={styles.notificationText}>
                        <Text style={styles.text3}>Changes in residents' health status.</Text>
                        <Text style={styles.text4}>Mon at 1:44 PM</Text>
                    </View>
                </View><View style={styles.notificationItem}>
                    <View style={styles.backgroundImg}>
                        <Image source={require('./../assets/images/image22.png')} style={styles.image} />
                    </View>
                    <View style={styles.notificationText}>
                        <Text style={styles.text3}>Changes in residents' health status.</Text>
                        <Text style={styles.text4}>Mon at 1:44 PM</Text>
                    </View>
                </View><View style={styles.notificationItem}>
                    <View style={styles.backgroundImg}>
                        <Image source={require('./../assets/images/image22.png')} style={styles.image} />
                    </View>
                    <View style={styles.notificationText}>
                        <Text style={styles.text3}>Changes in residents' health status.</Text>
                        <Text style={styles.text4}>Mon at 1:44 PM</Text>
                    </View>
                </View>
                {/* Add more notification items as needed */}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height: 100,
        paddingHorizontal: 16,
        borderBottomWidth: 2,
        borderBottomColor: '#E5E5E5',
        paddingTop: 30,
    },
    text1: {
        fontSize: 23,
        color: '#1E3C70',
        fontWeight: '600',
    },
    text2: {
        fontSize: 18,
        color: '#1E3C70',
        textDecorationLine: 'underline',
    },
    scrollViewContent: {
        padding: 16,
    },
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    backgroundImg: {
        borderRadius: 25,
        backgroundColor: 'rgba(30, 60, 112, 0.19)',
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 25,
        height: 20,
        resizeMode: 'contain',
    },
    notificationText: {
        marginLeft: 16,
    },
    text3: {
        fontSize: 14,
        color: 'black',
    },
    text4: {
        fontSize: 10,
        color: '#1E3C70',
    },
    closeButton: {},
});

export default NotificationScreen;
