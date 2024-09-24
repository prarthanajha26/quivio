import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    
    loginContainer: {
        flex: 1,
        // marginTop: 40
        // paddingTop: 20
    },
    
    Topcontainer: {
        // backgroundColor:'red',
        // borderWidth:1,
        paddingTop: '15%',
        paddingHorizontal: 20,
        // paddingBottom: 20,
        position:'relative',
       
        height:'40%',
        // flex:3,
        // position:'absolute'
    },
    LogoText: {
        fontSize: 28,
        fontWeight: '800',
        color: 'white',
        paddingTop: 20,
    },
    subText: {
        fontSize: 17,
        fontWeight: '400',
        color: 'white',
        paddingTop: 5
    },
    lineView: {
        width: 100,
        borderWidth: 1,
        borderColor: '#4794c7',
        // marginVertical: '0.45%'
        marginVertical:10
    },
    listContainer: {
        flexDirection: 'row',
        paddingRight: 13,
        // width: 130,
        // justifyContent: 'center',
        // alignItems: 'center',
        paddingTop: 10,
        marginTop:20,
        //    backgroundColor:'red',
        //    borderWidth:1
    },
    listImage:{marginTop:8},
    listText: {
        color: 'white',
        paddingHorizontal: 8,
        fontSize: 13,
        fontWeight: '400',
        width:90
        // backgroundColor:'red'
    },
    BottomContainer: {
    //    flex:2,
        // borderWidth:1,
        position:'absolute',
        paddingTop: 20,
        
        left:0,
        right:0,
        bottom:0,
    //    paddingBottom:100,
        height:'60%',
        paddingHorizontal: 20,
        // position:'absolute',
        backgroundColor:'#e7edf3'
    },
    signinText: {
        fontSize: 24,
        fontWeight: '700'
    },
    signSubText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#4f5f72',
        paddingTop: 5,
        paddingBottom: 25
    },
    textFieldcomp: {
        marginVertical: 5,
    },
    frgtpswd:{
        textAlign:'right',
        fontSize:14,
        fontWeight:'600'
    },
    buttonView:{
        // flex:1,
        //  backgroundColor:'red',
        justifyContent:'flex-end',
        // paddingBottom:55,
        // paddingHorizontal: 20,
        marginTop: 27,
        marginBottom:20
    }
})
export default styles