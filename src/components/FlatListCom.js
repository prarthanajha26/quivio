import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

export default class FlatListCom extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
        <FlatList 
        data={this.props.data}
        renderItem={this.props.renderItem}
        horizontal={this.props.horizontal}
        showsHorizontalScrollIndicator={false}
        />
    )
  }
}

const styles = StyleSheet.create({})
