import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container:{flex:1, padding:20,backgroundColor: '#e7edf3',},
    TextContainer:{
        paddingVertical:20,
    },
    backbutton:{
        paddingTop:30
    },
    TextHeading:{
        fontSize:25,
        fontWeight:'bold',
        paddingBottom:10
    },
    textDescription:{
        fontSize:15,
        paddingRight:25
    },
    phoneInput:{
        
        padding:5,
        borderRadius:8,
        backgroundColor:'white'
    },
    phoneInputContainer:{
        backgroundColor:'transparent',
        
    },
    textInputContainer:{
        backgroundColor:'transparent',
        
    },
    sendCode:{
        paddingVertical:20
    },
    buttonView:{
        flex:1,
        justifyContent: 'flex-end',
      paddingVertical: 30,
    }
})

export default styles 