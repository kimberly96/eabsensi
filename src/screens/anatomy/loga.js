import React, { Component } from "react";
import { Container, Header, Title, Button, Icon, Tabs, Tab, Right, Left, Body,ScrollableTab} from "native-base";
import TabOne from "../tab/tabOne";
import TabTwo from "../tab/tabTwo";
import TabThree from "../tab/tabThree";
import TabFour from "../tab/tabFour";
import styles from "./styles";

class Loga extends Component {
  render() {
    tab1 = new Date(new Date().setDate(new Date().getDate()-1))
    tab2 = new Date(new Date().setDate(new Date().getDate()-2))
  
    return (
      <Container style={styles.header}>
        <Header androidStatusBarColor="#02275d" hasTabs style={styles.header}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title> Log Absen </Title>
          </Body>
          <Right />
        </Header>

        <Tabs renderTabBar={() => <ScrollableTab />} >
          <Tab heading={tab1.toString().substr(8, 2)} >
            <TabOne />
          </Tab>
          <Tab heading={tab1.toString().substr(8, 2)}>
            <TabTwo />
          </Tab>
          <Tab heading={tab2.toString().substr(8, 2)}>
            <TabThree />
          </Tab>
          <Tab heading={tab2.toString().substr(8, 2)}>
            <TabFour />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default Loga;
