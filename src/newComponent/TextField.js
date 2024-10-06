import React from 'react'
import { View } from 'react-native'
import {
    OutlinedTextField,
} from 'rn-material-ui-textfield';

export default function CustomInput(props) {
  return (
    <OutlinedTextField
      label={props.placeholder}
      labelFontSize={15}
      tintColor={props.tintColor}
      inputContainerStyle={[
        props.input,
        
      ]}
      disabled={props.disabled}
      value={props.value}
      onSubmitEditing={props.onSubmitEditing}
      containerStyle={props.containerStyle}
      onChangeText={props.onChangeText}
      ref={props.forwardedRef}
      disabledLineWidth={1} 
      lineWidth={1}         
      activeLineWidth={1}    
      contentInset={props.contentInset}
      labelOffset={props.labelOffset}
      error={props.error}
      errorColor={props.errorColor}
    />
  )
}
