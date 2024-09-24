import React, { Component } from 'react'
import { Text, View, TouchableOpacity,StyleSheet } from 'react-native'


export default class ButtonComponent extends Component {
    constructor(props){
        super(props)
  
    }
    handelClick=()=>{
     this.props.onclick()
    }
    

  render() {
    // console.log(this.props.buttonStyle?.buttonComponent,"========>")
    // styles=this.props.buttonStyle
    return (
        <TouchableOpacity style={[styles.buttonComponent,{backgroundColor:this.props.background}]} onPress={()=>this.handelClick()} disabled={this.props.disabled} >
             <Text style={[styles.buttonComponentText, {color:this.props.color}]}>{this.props.buttonName}</Text>
        </TouchableOpacity>
     
    )
  }
}

const styles = StyleSheet.create({
  buttonComponent:{
    padding:15,
    borderRadius:10,
    alignItems:'center',
    // marginVertical:10
},
buttonComponentText:{
    color:'white',
    fontSize:18,
    fontWeight:'bold'
}
})
