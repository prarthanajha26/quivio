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
    <TouchableOpacity style={[styles.backarrow,{backgroundColor:this.props.background}]} onPress={this.prevPageFun}>
        <Image style={styles.backarrowImage} source={this.props.source?this.props.source: Images.backArrow}/>
    </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    backarrow:{
      //  marginBottom:30,
        height:40,
        width:40,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    backarrowImage:{
        width:6,
        height:12,
       
    }
})
