import React, { Component } from 'react'
import { Text, StyleSheet, View,Image, TouchableOpacity } from 'react-native'
import { Images } from '../assets' 

export default class BackbuttonComp extends Component {
  constructor(props){
    super(props)
  }
prevPageFun =()=>{
  this.props.handlePrevPage()
}

  render() {
    return (
    <TouchableOpacity style={styles.backarrow} onPress={this.prevPageFun}>
        <Image style={styles.backarrowImage} source={Images.backArrow}/>
    </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    backarrow:{
       marginBottom:30,
        height:40,
        width:40,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    backarrowImage:{
        width:25,
        height:25,
       
    }
})
