import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e7edf3',
      padding: 20,
    },
    scrollViewContent: {
      flexGrow: 1, // Ensures content grows and scrolls if needed
      justifyContent: 'center', // Center content vertically
    },
    contentContainer: {
      flex: 1,  // Ensures the content (text fields) takes up the remaining space
      backgroundColor: 'transparent', // Remove red background
    },
    heading: {
      fontWeight: '700',
      fontSize: 24,
      marginBottom: 10,
    },
    subHead: {
      fontWeight: '400',
      fontSize: 15,
      color: 'rgba(156, 160, 171, 1)',
    },
    inputFld: {
      marginVertical: 5,
    },
    buttonView: {
      justifyContent: 'flex-end',
      paddingVertical: 30,
    },
    bottomInputContnr:{
        paddingTop:20
    },
    TopIcon:{
        paddingTop:40,
        paddingBottom:20
    }
  });

  
  export default styles