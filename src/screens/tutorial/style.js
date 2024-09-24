import { StyleSheet,Dimensions } from "react-native";
const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
   
    screen: {
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    imgStyle: {
      height: 300,
      width: '100%',
    },
    description: {
      fontSize: 16,
      color: '#666',
      marginTop: 10,
      textAlign: 'center',
    },
    dotContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: '#aaabad',
    },
    inactiveDot: {
      backgroundColor: '#cbced4',
    },
    buttonContainer:{
        padding:20,
        
    }
  });

  export default styles