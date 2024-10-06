import { StyleSheet } from "react-native";
import { vh,vw } from "../../utils/dimension";

const styles = StyleSheet.create({
    topBar: {
      marginTop: vh(50),
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: vh(20),
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: vw(20),
    },
    tabName: {
      paddingRight: vw(50),
      fontSize: 20,
      fontWeight: '500',
    },
    profile: {
      height: vh(100),
      borderRadius: 100,
      aspectRatio: 1,
      backgroundColor: '#e1ebfe',
    },
    profileImg: {
      width: '100%',
      height: '100%',
      borderRadius:100
    },
    profileContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileText: {
      paddingLeft: vw(20),
    },
    profilePic: {
      fontSize: 14,
      fontWeight: '450',
      color: '#4B5879',
    },
    changePic: {
      fontSize: 16,
      fontWeight: '500',
      color: '#ee28a9',
      marginTop: vh(10),
    },
    input: {
      height: vh(50),
      // marginBottom: 20,
      
    },
    inputContainer: {
      position: 'relative',
    
    },
    containerStyle:{
      
    },
    body: {
      paddingTop: vh(30),
    },
    phoneInputContainer: {
      borderRadius: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      width: '100%',
      marginBottom: vh(10),
    },
    textInputContainer: {
      backgroundColor:'white',
      borderRadius: 10,
    },
    codeText: {
      fontSize: 16,
    },
    phoneText: {
      fontSize: 16,
    },
    calenders: {
      width: vw(20),
      height: vh(20),
    },
    calenderContainer: {
      position: 'relative',
    },
    calenderbtn: {
      position: 'absolute',
      right: vw(20),
      top: vh(13),
    },
    genderContainer: {
      position: 'relative',
      // backgroundColor:'red'
    },
    dropIcon: {
      width: vw(12),
      height: vh(7),
    },
    dropBtn: {
      position: 'absolute',
      right: vw(20),
      bottom: vh(30),
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginBottom: vh(15),
      marginTop:vh(-5)
    },
  });

  export default styles