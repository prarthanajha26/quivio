import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F5F7FA',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    leftIcon: {
      paddingTop: '15%',
      paddingBottom: 30
    },
    subtitle: {
      fontSize: 16,
      color: '#606770',
      fontWeight: '200'
    },
    codeInputContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    codeInput: {
      width: 55,
      height: 50,
      textAlign: 'center',
      fontSize: 24,
    },
    confirmButton: {
      backgroundColor: '#007BFF',
      paddingVertical: 15,
      paddingHorizontal: 50,
      borderRadius: 5,
      marginBottom: 10,
    },
    confirmButtonText: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    resendText: {
      fontSize: 16,
      color: '#007BFF',
      marginTop: 20,
      textAlign: 'right'
    },
    errorText: {
      color: 'red',
      marginBottom: 10,
    },
    buttonView: {
      flex: .9,
      justifyContent: 'flex-end',
  
    },
    Inputcontainer: {
      backgroundColor: 'white',
      paddingVertical: 5,
      borderRadius: 8
    },
    errorInputContainer:{
      backgroundColor: 'white',
      paddingVertical: 5,
      borderRadius: 8,
      borderWidth:1,
      borderColor:'red'
    },
    otpInput: {
  
      borderRightWidth: 1,
      height: 40,
      
      borderBottomWidth: 0,
      textAlign: 'center',
      fontSize: 18,
      // margin: 5,
  
    },
    number: {
      fontWeight: '700',
      color: '#606770',
      marginBottom: 30,
      lineHeight: 20
    },
    errorContainer: {
      // paddingLeft: 8,
      paddingHorizontal: 20,
      marginTop: 5,
      flexDirection: 'row',
    },
    errorText: {
      paddingLeft: 5,
      fontSize: 14,
    },
  });

  export default styles