import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body } from "native-base";
import {Image} from "react-native";

export default class TabOne extends Component {
  render() {
    tab1 = new Date(new Date().setDate(new Date().getDate()-1))
    tab2 = new Date(new Date().setDate(new Date().getDate()-2))
    return (
      
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>{tab1.toString().substr(4, 12)}</Text>
              <Text>07.12.00</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
            <Image 
              source={require('../../../assets/dummyPhoto.png')}
            />
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
