const React = require("react-native");
const { Dimensions, Platform } = React;
export default {
  container: {
    flex: 1,
    backgroundColor: '#fcfcfc',
  },
  header:{
    backgroundColor: '#02275d',
  },
  btncontainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: Dimensions.get('window').width / 1.5,
    marginLeft: (Dimensions.get('window').width - (Dimensions.get('window').width / 1.5)) / 2,
    marginTop: -(Dimensions.get('window').width - (Dimensions.get('window').width / 1.5)) / 2    
  },
  btnview:{
    width: Dimensions.get('window').width / 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  btnview2:{
    width: (Dimensions.get('window').width-20) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    shadowColor: '#fafafa',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  txtbtn:{
    textAlign: 'center',
    fontSize: 14,
    fontFamily: "Helvetica",
  },
  scrollView: {
    backgroundColor: '#000',
  },
  fbody: {
    backgroundColor: '#fcfcfc',
    justifyContent: 'center',
    height: Dimensions.get('screen').height / 2,
    width: Dimensions.get('screen').width,
    marginTop: 10
  },
  ImageSections: {
    display: 'flex',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5
  },
  images: {
    width: 210,
    height: 230,
    marginHorizontal: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnParentSection: {
    alignItems: 'center',
  },
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#edb02b',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 15,
  },
  mbtext:{
    color: '#edb407',
    fontSize: 14,
    fontFamily: 'Helvetica',
  },
  greetings:{
    width: Dimensions.get('window').width/1.6,
    backgroundColor: '#02275d',
    marginTop: 40,
  },
  greet:{
    fontFamily: 'Helvetica',
    fontWeight: "bold",
    fontSize: 28,
    color: '#fff',
    textAlign: 'center'
  },
  name:{
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
    fontSize: 11,
    lineHeight: 22.4,
    color: 'white',
    textAlign: 'center',
    marginBottom: -5,    
  },
  txtinfo:{
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Helvetica',
  },
  time:{
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Helvetica',
    color: '#02275d'
  },
  checkBtnAfter:{
    borderWidth:1,
    borderColor:'#edb02b',
    alignItems:'center',
    justifyContent:'center',
    width:150,
    height:150,
    backgroundColor:'#edb02b',
    borderRadius:100,
  },
  checkBtnBefore:{
    borderWidth:1,
    borderColor:'#b8b8b8',
    alignItems:'center',
    justifyContent:'center',
    width:150,
    height:150,
    backgroundColor:'#b8b8b8',
    borderRadius:100,
  }

};
