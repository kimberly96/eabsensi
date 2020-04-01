import React from 'react';
import { View, Text, Image } from 'react-native';
import { AsyncStorage } from 'react-native'

class Home extends React.Component {
  
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      try {
        let nip = await AsyncStorage.getItem('nip');        
        let name = await AsyncStorage.getItem('name');        
        let nip_p = await AsyncStorage.getItem('nip_p');        
        let kd_kantor = await AsyncStorage.getItem('kd_kantor');  
        if(nip && name && nip_p && kd_kantor){
         this.props.navigation.navigate('Anatomy')
        }else{
          this.props.navigation.navigate('Login')
        }
      } catch (error) {
        console.log("Something went wrong", error);
      }
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Image source={require('../../../assets/Logo_DJP.png')}/>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  textStyles: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}

export default Home;