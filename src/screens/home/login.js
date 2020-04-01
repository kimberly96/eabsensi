import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  TextInput,
  BackHandler,
  TouchableHighlight,
  Image,
  AsyncStorage,
  Keyboard
} from 'react-native';
import {Toast} from 'native-base';
import styles from "./styles";
import Spinner from 'react-native-loading-spinner-overlay';

class Login extends Component {

  constructor(props) {
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.state = {
      nip: '',
      password: '',
      showToast: false,
      error: '',
      hidePassword: true,
      spinner: false
    }
  }

  setPasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick() {
      // this.props.navigation.goBack(null);
      BackHandler.exitApp()
      return true;
  }

  async checkLogin() {
    try{
      if(this.state.nip == '' || this.state.password == ''){
        Toast.show({
          text: "User dan Password harus Diisi",
          buttonText: "Okay",
          type: "danger",
          duration: 3000
        })
      }else{
        Keyboard.dismiss();
        this.setState({spinner: true});
        var details = {
          'nip': this.state.nip,
          'password': this.state.password
        };
        var formBody = [];
        for (var property in details) {
          var encodedKey = encodeURIComponent(property);
          var encodedValue = encodeURIComponent(details[property]);
          formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        
        fetch('https://logbook.pajak.go.id/rest/absensi/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          body: formBody
          }).then((response) => response.json())
          .then((responseData) => {
            if(JSON.stringify(responseData.status) == 1){
              nip = JSON.stringify(responseData.message.nip);
              nm_peg = JSON.stringify(responseData.message.nm_peg);
              nip_p = JSON.stringify(responseData.message.nip_baru);
              kd_kantor = JSON.stringify(responseData.message.kd_kantor);
              this.saveKey(nip, nm_peg, nip_p, kd_kantor)
              this.setState({spinner: false});              
            }else{
              this.setState({spinner: false});              
              Toast.show({
                text: JSON.stringify(responseData.message).substr(1,25),
                buttonText: "Okay",
                type: "danger",
                duration: 3000
              })
            }
        },(error) => {
          alert(JSON.stringify(error))
        })
      }
    }catch ({ message }) {
      this.setState({
          error: message
      })
      Toast.show({
        text: this.state.error,
        buttonText: "Okay",
        type: "danger",
        duration: 3000
      })
    }
  }
  
  async saveKey(nip, nm_peg, nip_p, kd_kantor){
    try{
      await AsyncStorage.setItem('nip', nip);
      await AsyncStorage.setItem('name', nm_peg);
      await AsyncStorage.setItem('nip_p', nip_p);
      await AsyncStorage.setItem('kd_kantor', kd_kantor);
      this.props.navigation.navigate('Anatomy')
    }catch (error) {
      console.log("Error saving data" + error);
    }
  }

  render() {
    const launchscreenBg = require("../../../assets/gedung_djp.jpg");
    const launchscreenLogo = require("../../../assets/Logo_DJP.png");
    const { navigate } = this.props.navigation
    return (
      
      <View style={styles.container}>
        <Spinner
    visible={this.state.spinner}
    textContent={'Loading...'}
    textStyle={styles.spinnerTextStyle}
    />
      <Image source={launchscreenBg} style={styles.backgroundImage} />
        <View style={styles.absoluteContainer}>
          <Image source={launchscreenLogo} resizeMode="stretch" style={styles.logo}/>
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/ios/50/000000/test-account.png'}}/>
            <TextInput style={styles.inputs}
                placeholder="User SIKKA"
                underlineColorAndroid='transparent'
                maxLength={9}
                keyboardType='numeric'
                onChangeText={(nip) => this.setState({nip})}/>
          </View>
          
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://img.icons8.com/ios/50/000000/private2.png'}}/>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={this.state.hidePassword}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({password})}/>
              <TouchableOpacity activeOpacity={0.8} style={styles.touachableButton} onPress={this.setPasswordVisibility}>
               <Image source={(this.state.hidePassword) ? require('../../../assets/hide.png') : require('../../../assets/view.png')} style={styles.buttonImage} />
              </TouchableOpacity>
          </View>

          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.checkLogin()}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
export default Login;

 