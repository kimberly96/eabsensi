import React, { Component } from "react";
import { Image, AsyncStorage } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import styles from "./style";

const drawerImage = require("../../../assets/cat.jpg");
const drawerCover = {};
const datas = [
  {
    name: "Logout",
    route: "Login",
    icon: "log-out",
    bg: "#477EEA",
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }
  logout = () => {
    AsyncStorage.removeItem('nip');
    AsyncStorage.removeItem('name');
    AsyncStorage.removeItem('nip_p');
    AsyncStorage.removeItem('kd_kantor');
    this.props.navigation.navigate('Login')
  }
  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={this.logout}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default SideBar;
