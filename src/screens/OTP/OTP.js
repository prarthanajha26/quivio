import React from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {Images, Icons} from '../../assets';
import BackbuttonComp from '../../components/Backbutton';
import ButtonComponent from '../../components/ButtonComponent';
import OtpInputs from 'react-native-otp-textinput';
import {ScreenNames} from '../../navigator/screenName';
import CustomModal from '../../components/modalComp';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

class VerifyAccountAccess extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      attemptsLeft: 3,
      otp: '',
      isModalVisible: false,
      isButtonDisabled: true,
      modalText:'',
      ModalLogo:'',
      modalSubText:''
    };
    this.inputs = [];
  }
  handleCodeChange = otp => {
    const isButtonDisabled = otp == '' || otp.length < 6;
    this.setState({isButtonDisabled: isButtonDisabled});
    this.setState({otp});
    
  };

  handleConfirmCode = async() => {
    if (this.state.otp == '123456') {
      const { Number} = this.props.route.params;
      this.setState({modalText:'Account Verified'})
      this.setState({ModalLogo:Images.verified})
      this.setState({modalSubText:'Your account has been locked, please try again in one hour.'})
      this.setState({isModalVisible: true});
      await AsyncStorage.setItem('accNo', Number);
      
    } else if (this.state.otp == '') {
      this.setState({error: `OTP should'nt be empty`});
    } else {
      this.setState({attemptsLeft: this.state.attemptsLeft - 1}, () => {
        if (this.state.attemptsLeft > 0) {
          this.setState({
            error: `The code you entered is incorrect, you have ${this.state.attemptsLeft} attempts remaining`,
          });
        } else {
          this.setState({modalText:'Too many failed attempt'})
          this.setState({ModalLogo:Images.authentication})
          this.setState({modalSubText:'Your account has been verified successfully.'})
          this.setState({isModalVisible: true});
        }
      });
    }
  };
  closeModal = () => {
    this.props.navigation.navigate(ScreenNames.Home);
    this.setState({isModalVisible: false});
  };
  handleResendCode = () => {
    Alert.alert('Code Resent', 'A new code has been sent to your phone.');
    // this.props.navigation.navigate('PhoneNumber');
  };
  render() {
    const {
      
      isModalVisible,
      error,
      isButtonDisabled,
      ModalLogo,
      modalSubText,
      modalText
    } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.leftIcon} onPress={this.goBack}>
          <BackbuttonComp />
        </TouchableOpacity>
        <Text style={styles.title}>Verify Account Access</Text>
        <Text style={styles.subtitle}>
          Enter the verification code sent to{' '}
        </Text>
        <Text style={styles.number}>+1-788-895-5435.</Text>

        {/* <View style={styles.Inputcontainer}> */}
        <OtpInputs
          handleTextChange={this.handleCodeChange}
          inputCount={6}
          textInputStyle={[styles.otpInput]}
          tintColor={'#ccc'}
          containerStyle={[
            error ? styles.errorInputContainer : styles.Inputcontainer,
          ]}
        />
        {this.state.error ? (
          <View style={styles.errorContainer}>
            <Image source={Icons.alertIcon} />
            <Text style={styles.errorText}>
              {this.props.errorMessage
                ? this.props.errorMessage
                : this.state.error}
            </Text>
          </View>
        ) : (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}> </Text>
          </View>
        )}
        {/* </View> */}

        <TouchableOpacity onPress={this.handleResendCode}>
          <Text style={styles.resendText}>Resend</Text>
        </TouchableOpacity>

        <View style={styles.buttonView}>
          <ButtonComponent
            background={isButtonDisabled ? '#bfd6e8' : '#2a7bbb'}
            buttonName={'Confirm Code'}
            color={'white'}
            onclick={this.handleConfirmCode}
            disabled={isButtonDisabled}
          />
        </View>
        <CustomModal
          image={ModalLogo}
          visible={isModalVisible}
          onClose={this.closeModal}
          title={modalText}
          message={modalSubText}
          buttonText={'Back to Login'}
        />
      </View>
    );
  }
}

export default VerifyAccountAccess;
