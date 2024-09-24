import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, Image, Animated, TouchableOpacity } from 'react-native';
import { Icons } from '../assets';

export default class TextFiledComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
      error: '',
      isLengthValid: false,
      hasSpecialChar: false,
      hasNumber: false,
      hasUpperCase: false,
    };
    this.placeholderTop = new Animated.Value(props.value ? 5 : 19);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.placeholderTop.setValue(this.props.value ? 5 : 19);
      this.validateInput(this.props.value);
    }
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
    this.placeholderTop.setValue(5);
    if (this.props.Type === 'newpassword') {
      this.validateInput(this.props.value);
    }
  };

  handleBlur = () => {
    this.setState({ isFocused: false });
    if (!this.props.value) {
      this.placeholderTop.setValue(19);
    }
    this.validateInput(this.props.value);
  };

  validateInput = (value) => {
    const { Type } = this.props;
    let error = '';

    if (Type === 'Email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        error = 'Invalid email address';
      }
    } else if (Type === 'password') {
      if (value.length < 6) {
        error = 'Password must be at least 6 characters';
      }
    } else if (Type === 'Newpassword') {
      const isLengthValid = value.length >= 8;
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const hasNumber = /\d/.test(value);
      const hasLowerCase = /[a-z]/.test(value);
      const hasUpperCase = /[A-Z]/.test(value);
      const hasBothCases = hasLowerCase && hasUpperCase;

      if (isLengthValid && hasSpecialChar && hasNumber && hasBothCases) {
        error = '';
      }

      this.setState({
        isLengthValid,
        hasSpecialChar,
        hasNumber,
        hasBothCases,
        error: error
      });
    }

    if (Type !== 'Newpassword') {
      this.setState({ error });
    }
  };

  render() {

    const borderColor = this.state.error || this.props.errorMessage || this.props.isToastVisible ? 'red' : 'white';
    const { isLengthValid, hasSpecialChar, hasNumber, hasBothCases } = this.state;

    return (
      <View style={styles.inputContainer}>


        {/* <View style={[{borderWidth: 1, borderColor: 'red'}, this.props.containerStyle]}> */}


          <TextInput
            style={[
              styles.input,
              this.props.icon ? { paddingLeft: 45 } : null,
              { borderColor },

            ]}
            placeholder={this.props.Animation ? null : this.props.placeholder}
            keyboardAppearance={this.props.keyboardAppearance}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            value={this.props.value}
            onChangeText={(text) => {
              this.props.onChangeText(text);
              this.validateInput(text);
            }}
            secureTextEntry={this.props.secureTextEntry}
          />

        {/* </View> */}



        <Image style={[styles.inputIcons, (this.state.error || this.props.errorMessage || this.props.isToastVisible) && { tintColor: 'red' }]} source={this.props.icon} />
        <TouchableOpacity style={styles.eyeButton} onPress={() => this.props.toggleEye()}><Image style={styles.inputEyeIcons} source={this.props.eye} /></TouchableOpacity>

        {this.state.error || this.props.errorMessage ? (
          <View style={styles.errorContainer}>
            <Image source={Icons.alertIcon} />
            <Text style={styles.errorText}>{this.props.errorMessage ? this.props.errorMessage : this.state.error}</Text>
          </View>
        ) : (
          <Text style={styles.errorContainer}> </Text>
        )}

        {this.props.Animation ? (
          <Animated.Text
            style={[
              styles.placeholder,
              {
                top: this.placeholderTop,
                position: 'absolute',
              },
              this.state.error ? { color: 'red' } : { color: '#60707D' }
            ]}
            pointerEvents="none"
          >
            {this.props.placeholder}
          </Animated.Text>
        ) : null}

        {this.props.Type === 'Newpassword' && this.state.isFocused && (
          <View style={styles.validationContainer}>
            <View style={styles.ErrorText}>
              <Image source={isLengthValid ? Icons.tick : Icons.cross} />
              <Text style={[styles.validationText]}>
                8 characters or more
              </Text>
            </View>
            <View style={styles.ErrorText}>
              <Image source={hasSpecialChar ? Icons.tick : Icons.cross} />
              <Text style={[styles.validationText]}>
                1 or more special characters
              </Text>
            </View>
            <View style={styles.ErrorText}>
              <Image source={hasNumber ? Icons.tick : Icons.cross} />
              <Text style={[styles.validationText]}>
                1 or more numbers
              </Text>
            </View>
            <View style={styles.ErrorText}>
              <Image source={hasBothCases ? Icons.tick : Icons.cross} />
              <Text style={[
                styles.validationText,

              ]}>
                Upper and lower case letters
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
  inputIcons: {
    position: 'absolute',
    height: 22,
    width: 22,
    top: 15,
    left: 10,
  },
  inputEyeIcons: {
    height: 22,
    width: 22,
  },
  placeholder: {
    position: 'absolute',
    left: 45,
    fontSize: 12,
    backgroundColor: 'transparent',
  },
  errorText: {
    paddingLeft: 5,
    fontSize: 14,
  },
  errorContainer: {
    paddingLeft: 8,
    marginTop: 5,
    flexDirection: 'row',
  },
  eyeButton: {
    position: 'absolute',
    top: 19,
    right: 20,
  },
  ErrorText: {
    flexDirection: 'row'
  },
  validationContainer: {
    // marginTop: 10,
    paddingLeft: 20,
  },
  validationText: {
    fontSize: 14,
    marginBottom: 5,
  },
  valid: {
    color: 'green',
  },
  invalid: {
    color: 'red',
  },
});
