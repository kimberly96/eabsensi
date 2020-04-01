import React, { Component } from 'react';
import { StyleSheet, Text, AsyncStorage} from "react-native";

class Auth extends Component{
    async storeToken(nip) {
        try {
           //await AsyncStorage.setItem("nip", JSON.stringify(nip));
           alert('dsf');
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
      async getToken(user) {
        try {
          let userData = await AsyncStorage.getItem("userData");
          let data = JSON.parse(userData);
          console.log(data);
        } catch (error) {
          console.log("Something went wrong", error);
        }
      }
    
}
export default Auth;