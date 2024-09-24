import React, { Component } from 'react';
import { Text, StyleSheet, View, KeyboardAvoidingView, ScrollView, Platform, Image, TouchableOpacity } from 'react-native';
import BackbuttonComp from '../../components/Backbutton';
import TextFiledComp from '../../components/TextFiledComp';
import ButtonComponent from '../../components/ButtonComponent';
import CustomToast from '../../components/CustomToast';
import CustomModal from '../../components/modalComp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icons, Images } from '../../assets';

import styles from './style';
import { ScreenNames } from '../../navigator/screenName';

export default class RestPswd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Newpswd: '',
      cnfrmPassowrd: '',
      isButtonDisabled: true, 
      isModalVisible: false,
      togglenewIcon: true,
      toggleCnfrmIcon: true,
      btnText: false
    };
  }

 
  toggleEye = (field) => {
    if (field === 'newPswd') {
      this.setState({ togglenewIcon: !this.state.togglenewIcon });
    } else {
      this.setState({ toggleCnfrmIcon: !this.state.toggleCnfrmIcon });
    }
  };

  
  closeModal = () => {
    this.props.navigation.navigate(ScreenNames.Login);
    this.setState({ isModalVisible: false });
  };

  
  validateFields = () => {
    const { Newpswd, cnfrmPassowrd } = this.state;
    const isButtonDisabled = !Newpswd || !cnfrmPassowrd || Newpswd !== cnfrmPassowrd;
    this.setState({ isButtonDisabled });
  };

  
  handleNewPswdChange = (Newpswd) => {
    this.setState({ Newpswd }, this.validateFields);
  };

  
  handleCnfrmPasswdChange = (cnfrmPassowrd) => {
    this.setState({ cnfrmPassowrd }, this.validateFields);
  };

  
  handleClick = async () => {
    const { Newpswd, cnfrmPassowrd } = this.state;

    if (Newpswd && cnfrmPassowrd) {
      this.setState({ btnText: true });

      if (Newpswd === cnfrmPassowrd) {
        await AsyncStorage.setItem('password', Newpswd);
        this.setState({ isModalVisible: true });
      } else {
        const ToastMessage = "Your Password doesn't match";
        this.showToast(ToastMessage);
      }
    } else {
      this.setState({ btnText: false });
    }
  };

  
  showToast = (message) => {
    this.setState({ isToastVisible: true, toastMessage: message });

   
    setTimeout(() => {
      this.setState({ isToastVisible: false });
    }, 3000);
  };

  render() {
    const { Newpswd, isModalVisible, toggleCnfrmIcon, cnfrmPassowrd, togglenewIcon, isButtonDisabled } = this.state; // Destructure state variables

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.contentContainer}>
            <TouchableOpacity style={styles.TopIcon}>
              <Image source={Images.ColorLogo} />
            </TouchableOpacity>
            <Text style={styles.heading}>Reset Password</Text>
            <Text style={styles.subHead}>Enter Your new Password</Text>
            <View style={styles.bottomInputContnr}>
              <View style={styles.inputFld}>
                <TextFiledComp
                  Type={'Newpassword'}
                  placeholder={'New Password'}
                  placeholderTextColor={'#60707d'}
                  icon={Icons.pswd}
                  eye={togglenewIcon ? Icons.hide : Icons.eye}
                  value={Newpswd}
                  onChangeText={this.handleNewPswdChange} 
                  secureTextEntry={togglenewIcon}
                  toggleEye={() => this.toggleEye('newPswd')}
                  Animation={true}
                  keyboardAppearance={true}
                  isToastVisible={this.state.isToastVisible}
                />
              </View>
              <View style={styles.inputFld}>
                <TextFiledComp
                  Type={'Confirm Password'}
                  placeholder={'Confirm Password'}
                  placeholderTextColor={'#60707d'}
                  icon={Icons.pswd}
                  eye={toggleCnfrmIcon ? Icons.hide : Icons.eye}
                  value={cnfrmPassowrd}
                  onChangeText={this.handleCnfrmPasswdChange}
                  secureTextEntry={toggleCnfrmIcon}
                  toggleEye={() => this.toggleEye('crnfPasswd')}
                  Animation={true}
                  keyboardAppearance={true}
                  isToastVisible={this.state.isToastVisible}
                />
              </View>
            </View>
          </View>
        </ScrollView>

       
        <View style={styles.buttonView}>
          <ButtonComponent
            background={isButtonDisabled ? '#bfd6e8' : '#2a7bbb'}
            buttonName={isButtonDisabled ?'Continue': 'Submit' }
            color={'white'}
            onclick={this.handleClick}
            disabled={isButtonDisabled} 
          />
        </View>

        <CustomModal
          image={Images.paswdChange}
          visible={isModalVisible}
          onClose={this.closeModal} 
          title="Password Updated"
          message="Your New Password has been updated successfully"
          buttonText={"Back to Login"}
        />
        <CustomToast visible={this.state.isToastVisible} message={this.state.toastMessage} />
      </KeyboardAvoidingView>
    );
  }
}
