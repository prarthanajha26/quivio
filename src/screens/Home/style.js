import { StyleSheet } from "react-native";
import { vw,vh } from "../../utils/dimension";


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    TopNav: {
      backgroundColor: '#2a7bbb',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 60,
      paddingBottom: 20,
    },
    rightNav: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '30%',
    },
    welcText: {
      fontSize: 20,
      color: 'white',
      fontWeight: '300',
    },
    name: {
      fontSize: 20,
      fontWeight: '600',
      color: 'white',
    },
    iconContainer: {
      backgroundColor: '#3e88c2',
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    iconstyle: {
      height: 25,
      width: 25,
    },
    bodyContainer: {
      paddingHorizontal: 10,
      paddingTop: 20,
      backgroundColor: '#e7edf3',
      flex: 1,
    },
    frequentlyContner: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom:20,
    },
    notification: {
      paddingBottom: 20,
    },
    heading: {
      fontSize: 12,
      fontWeight: '600',
      paddingBottom: 10,
    },
    activitiesContainer: {
      backgroundColor: 'white',
      padding: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
    },


    // modal styling
    modalContainer: {
      // flex: 0.4,
      // justifyContent: 'flex-end',
      // backgroundColor: 'rgba(0,0,0,0.5)',
      // width:'10%'
      // padding:0
      marginTop: 'auto'
  },
  modalContent: {
      // height: '80%',
      backgroundColor: '#E6EDF3',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 40,
  },
  secure: {
      fontWeight: "600",
      fontSize: 23,
      marginTop: 20,
  },
  securetext: {
      fontSize: 14,
      fontWeight: '300',
      marginTop: 10,
      color: "grey",
  },
  securetext1: {
      fontSize: 17,
      color: "grey",
  },
  modalimage: {

      flexDirection: "row",

  },
  modalimagecontainer: {

      borderWidth: 1
  },
  textlink: {
      fontWeight: "600",
      fontSize: 14,
      paddingTop: 15,
      width: '80%'
  },
  modalphonecontainer: {
      justifyContent: "center",
      alignItems: "center",
      height: vh(150),
  },
  image: {
      height:vh(150),
      aspectRatio:.7
  },
  image1: {

      width: 80,
      height: 80,

  }
  })
  
export default styles  