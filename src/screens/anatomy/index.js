import React, { Component } from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, View, Card, CardItem, Toast} from "native-base";
import {TouchableOpacity, Image, Dimensions, AsyncStorage, BackHandler} from "react-native";
import styles from "./styles";
const finger = require('../../../assets/finger.png');
const finger2 = require('../../../assets/finger2.png');
const log = require('../../../assets/log.png');

class Anatomy extends Component {
  
  constructor(props){
    super(props)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  state = {
    hour: null,
    username: 'febri',
    greet: '',
    nip: '',
    name: '',
    showToast: false,

  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }
  handleBackButtonClick() {
      //this.props.navigation.goBack(null);
      BackHandler.exitApp()
      return true;
  }

  async componentDidMount() {
    this.getHour()
    let nips = await AsyncStorage.getItem('nip');
    let nm_pegs = await AsyncStorage.getItem('name');
    let nip_ps = await AsyncStorage.getItem('nip_p');
    nm_pegs = nm_pegs.slice(1, -1);
    nip_ps = nip_ps.slice(1, -1);
    this.setState({nip : nip_ps});
    this.setState({name : nm_pegs});
  }
  
  getHour = () => {
   const date = new Date();
   const hour = date.getHours()
   if(hour<10)
    this.setState({greet: 'Selamat Pagi'});
   if(hour>=10 && hour<15)
    this.setState({greet: 'Selamat Siang'});
   if(hour>=15 && hour<19)
    this.setState({greet: 'Selamat Sore'});  
   if(hour>=19 && hour<24)
    this.setState({greet: 'Selamat Malam'});   
  }

  checkTime = () =>{
    const hour = new Date().toLocaleString().substr(11,8)
    if(hour >= '06:00:00' && hour <= '20:00:00'){
      this.props.navigation.navigate('Absen')
    }else{
      Toast.show({
        text: "Batas absen pukul 06.00 - 20.00",
        buttonText: "Okay",
        type: "warning",
        duration: 3000
      })
    }
  }

  render() {
  const {hour, username, greet, nip, name} = this.state;
  const screenWidth = Dimensions.get('window').width - 100;

    return (
      <Container style={styles.container}>
        <Header androidStatusBarColor="#02275d" style={{height:screenWidth, backgroundColor: '#02275d'}}>
          <Left style={{marginTop:-200}}>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <View style={styles.greetings}>
            <Text style={styles.greet}>{greet},</Text>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.name}>{nip}</Text>
          </View>
          </Body>
          <Right />
        </Header>

        <View style={styles.btncontainer}>
          <View style={styles.btnview}>
            <TouchableOpacity style={styles.button} onPress={this.checkTime}>
              <Image source={finger}/>
              <Text style={styles.txtbtn}>Absen</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnview2} >
            <TouchableOpacity style={styles.button} onPress={()=> this.props.navigation.navigate('Loga')} >
              <Image source={log}/>
              <Text style={styles.txtbtn}>Log Absen</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem header bordered>
              <Text style={styles.mbtext}>Informasi</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={styles.txtinfo}>
                  Jam Kerja : 7.30 - 17.00
                </Text>
                <Text style={styles.txtinfo}>
                  Absen hanya tersedia pada pukul 06.00-20.00
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={styles.mb}>
            <CardItem header bordered>
              <Text style={styles.mbtext}>Riwayat Absensi Hari Ini</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={styles.txtinfo}>
                  Fingerprint : 07.23.30
                </Text>
                <Text style={styles.txtinfo}>
                  e-Absensi   : 17.21.12
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>

      </Container>
    );
  }
}

export default Anatomy;
