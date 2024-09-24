import React, { Component } from 'react';
import { Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import BackbuttonComp from '../../components/Backbutton';
import ButtonComponent from '../../components/ButtonComponent';
import CustomModal from '../../components/modalComp';
import { Images } from '../../assets';
import styles from './style';
import CustomToast from '../../components/CustomToast';
import { ScreenNames } from '../../navigator/screenName';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class FA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countrycode: 'US',
      phoneNumber: '',
      isModalVisible: false,
      isToastVisible: false,
      toastMessage: '',
      isButtonDisabled: true, 
    };
  }


  onSelect = (country) => {
    this.setState({ countrycode: country.cca2 });
  };

  
  handlePrevPage = () => {
    this.props.navigation.navigate(ScreenNames.Home);
  };

  
  handlePhoneNumberChange = (text) => {
    this.setState({ phoneNumber: text }, this.validateInput);
  };

  
  validateInput = () => {
    const { phoneNumber } = this.state;
    const isValidNumber = /^\d+$/.test(phoneNumber);
    this.setState({ isButtonDisabled: phoneNumber.trim() === ''||phoneNumber.length<6 ||!isValidNumber});
  };

  
  handleClick = async () => {
    const existUser = await AsyncStorage.getItem('accNo');
    if (this.state.phoneNumber === existUser) {
      const ToastMessage = 'User exists. Try a different number.';
      this.showToast(ToastMessage);
    }  else {
      // await AsyncStorage.setItem('accNo', this.state.phoneNumber);
      this.props.navigation.navigate(ScreenNames.OTP,{Number: this.state.phoneNumber});
    }
  };

 
  showToast = (message) => {
    this.setState({ isToastVisible: true, toastMessage: message });

   
    setTimeout(() => {
      this.setState({ isToastVisible: false });
    }, 3000);
  };

  render() {
    const { isModalVisible, isButtonDisabled } = this.state;
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View>
          <View style={styles.backbutton}>
            <BackbuttonComp handlePrevPage={this.handlePrevPage} />
          </View>
          <View style={styles.TextContainer}>
            <Text style={styles.TextHeading}>Add Phone Number</Text>
            <Text style={styles.textDescription}>
              To initiate the two factor authentication, provide your phone number below
            </Text>
          </View>
          <View style={styles.phoneInput}>
            <PhoneInput
            
              defaultValue={this.state.phoneNumber}
              defaultCode={this.state.countrycode}
              layout="first"
              onChangeCountry={this.onSelect} 
              onChangeText={this.handlePhoneNumberChange} 
              containerStyle={styles.phoneInputContainer}
              textContainerStyle={styles.textInputContainer}
              codeTextStyle={styles.codeText}
              textInputStyle={styles.phoneText}
            />
          </View>
        </View>

        <View style={styles.buttonView}>
          <ButtonComponent
            background={isButtonDisabled ? '#bfd6e8' : '#2a7bbb'} 
            buttonName={'Send Code'}
            color={'white'}
            onclick={this.handleClick}
            disabled={isButtonDisabled} 
          />
        </View>

        <CustomModal
          image={Images.LinkSent}
          visible={isModalVisible}
          onClose={this.closeModal} // Close the modal
          title="Link Sent!"
          message="The link to reset your password has been sent to your email address."
          buttonText="Set Password"
        />
        <CustomToast visible={this.state.isToastVisible} message={this.state.toastMessage} />
      </KeyboardAvoidingView>
    );
  }
}
