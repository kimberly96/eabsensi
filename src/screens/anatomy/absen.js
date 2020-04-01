import React, { Fragment, Component } from 'react';
import { Container,Header,Title,Button,Body,Left,Right,Icon,Toast} from "native-base";
import styles from "./styles";
import ImagePicker from 'react-native-image-picker';
import { SafeAreaView,StyleSheet,ScrollView,View,Alert,Text,StatusBar,Image,Dimensions,TouchableOpacity,TouchableHighlight} from 'react-native';
import Geocoder from 'react-native-geocoding';
import { white } from 'ansi-colors';
Geocoder.init("AIzaSyA5w1rekG9Asp_zFAm7HZkNC7lmRNjUyFE");
class Absen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filepath: {
        data: '',
        uri: '',
        timestamp: '',
      },
      fileData: '',
      fileUri: '',
      showToast: false,
      curTime: null,
      latitude: '',
      longitude: '',
      address: '',
    }
  }
  async componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString().substr(11,8)
      })
    },1000)

    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({longitude: position.coords.longitude, latitude: position.coords.latitude});
      Geocoder.from(this.state.latitude, this.state.longitude)
        .then(json => {
        		var addressComponent = json.results[0].formatted_address;
            this.setState({address: addressComponent});
        })
        .catch(error => console.warn(error));
    }, (error) => {
        alert(JSON.stringify(error))
    }, {
        enableHighAccuracy: false,
        timeout: 20000,
        maximumAge: 1000
    });
  }
  uploadImage = () => {
    if(this.state.fileUri){
     //history.push("/index.js");
    }else{
      Toast.show({
        text: "Pilih Gambar!",
        buttonText: "Okay",
        type: "danger"
      })
    }
  }
  chooseImage = () => {
    let options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
        // alert(JSON.stringify(response));s
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });
  }

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });

  }

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      console.log('Response latitude = ', response.latitude);
      console.log('Response longitude = ', response.longitude);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri };
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
      }
    });
  }

  renderFileUri() {
    if (this.state.fileUri) {
      return [
        <Image
        source={{ uri: this.state.fileUri }}
        style={styles.images}
      />,
       <Text style={{textAlign:'center'}}>{this.state.filePath.timestamp}</Text>,
      ];
       
    } else {
      return <TouchableOpacity onPress={this.chooseImage} style={styles.btnSection}  >
      <Text style={styles.btnText}>Upload Photo</Text>
    </TouchableOpacity>
    }
  }

  renderAddress(){
    if (this.state.fileUri) {
      return  <Text style={{textAlign:'center'}}>{this.state.address}</Text>
    }
  }

  renderButton(){
    if (this.state.fileUri && this.state.address) {
         return <TouchableOpacity style={styles.checkBtnAfter}><Text style={{color:white,fontSize:26}}>IN</Text></TouchableOpacity>
    } else {
        // return <TouchableOpacity onPress={this.uploadImage} style={styles.checkBtnBefore}><Text style={{color:white,fontSize:26}}>IN</Text></TouchableOpacity>
    }
  }

  render() {
    today = new Date();
    return (
      <Container style={styles.container}>
        <Header androidStatusBarColor="#02275d" style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Absen</Title>
            {/* <Title>{today.toString().substr(4, 12)}</Title> */}
          </Body>
          <Right />
        </Header>
        <Fragment>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <View style={styles.fbody}>
              <Text style={styles.time}>{this.state.curTime}</Text>
              <View style={styles.btnParentSection}>
                {/* <TouchableOpacity onPress={this.launchCamera} style={styles.btnSection}  >
                  <Text style={styles.btnText}>Directly Launch Camera</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.launchImageLibrary} style={styles.btnSection}  >
                  <Text style={styles.btnText}>Directly Launch Image Library</Text>
                </TouchableOpacity> */}
              </View>
              <View style={styles.ImageSections}>
                <View>
                  {this.renderFileUri()}
                </View>
                <View>
                  {this.renderAddress()}
                </View>
              </View>
            </View>
            <View style={styles.btnParentSection}>
                {this.renderButton()}
            </View>
          </SafeAreaView>
        </Fragment>
      </Container>
      
    );
  }
}

export default Absen;
