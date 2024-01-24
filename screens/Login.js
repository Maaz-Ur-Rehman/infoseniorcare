import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Toast from "react-native-toast-message";
import { useTogglePasswordVisibility } from "../hooks/password-toggle";
import BackGround from "../components/Background";
import { width } from "react-native-dimension";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { passwordVisibility, rightIcon, handlePasswordVisibility } = useTogglePasswordVisibility();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = () => {
    if (email === "" || password === "") {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Please fill all the fields",
      });
      return;
    } else {
      alert("Login success");
    }
  };

  return (
    <BackGround>
        <SafeAreaView style={styles.mainContainer}>
        
            
        <KeyboardAvoidingView 
          behavior="padding"
          style={{ flex: 1 }}
        >
          <View style={styles.container}>
            <View style={{paddingHorizontal:8}}>
              <Image
                source={require("../assets/images/image16.png")}
                style={{ width:  224.308, height: 43, alignSelf: "center" }}
              />
            </View>

            <View style={{marginTop:40}}>
              <View>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <View style={{ marginVertical: 10 }}>
                <TextInput
                  secureTextEntry={passwordVisibility}
                  style={{ ...styles.input, paddingRight: 30 }} // Adjust paddingRight for the icon
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={setPassword}
                />
                <Pressable onPress={handlePasswordVisibility} style={{position:"absolute", right:11, top:15}}>
                  <MaterialCommunityIcons name={rightIcon} size={22} color="#232323" />
                </Pressable>
              </View>

              <Text style={{ color: "black",textAlign:"right",marginBottom:15 }}>Forgot Password?</Text>

              <View>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSubmit}
                  title="Login"
                  color={"#0470BA"}
                  padding={10}
                >
                  <Text style={{color:"white"}}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
       
        </SafeAreaView>
      </BackGround>
   
  );
};

const styles = StyleSheet.create({
    mainContainer:{
        marginTop:160,
        marginLeft:30,
        // flexDirection:'column',
        width:300,
        // justifyContent:"center"
    },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderRadius: 8,
    borderColor: "#E8ECF4",
    borderWidth: 2,
    padding: 10,
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#0470BA',
    borderRadius: 6,
    padding: 12,
  },
//   topImage:{
//     position:"absolute",
//     top:0,
//     right:0
//   },
//   bottomImage:{
//     position:"absolute",
//     bottom:0,
//     left:0
//   }
});

export default Login;
