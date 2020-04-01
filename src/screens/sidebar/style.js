const React = require("react-native");
const { Platform, Dimensions } = React;

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  drawerCover: {
    alignSelf: "stretch",
    height: deviceHeight / 3,
    width: null,
    position: "relative",
    marginBottom: 10,
    backgroundColor: "#fff"
  },
  drawerImage: {
    position: "absolute",
    left: Platform.OS === "android" ? deviceWidth / 4 : deviceWidth / 5,
    top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  },
  name:{
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    position: "absolute",
    left: 60,
    top: 130
  },
  namep:{
    textAlign: "center",

  }
};
