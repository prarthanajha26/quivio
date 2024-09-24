import React, { Component } from 'react';
import { Text, StyleSheet, View, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import BackbuttonComp from '../../components/Backbutton';
import TextFiledComp from '../../components/TextFiledComp';
import ButtonComponent from '../../components/ButtonComponent';
import CustomToast from '../../components/CustomToast';
import CustomModal from '../../components/modalComp';
import { Icons, Images } from '../../assets';
import styles from './style';
import { ScreenNames } from '../../navigator/screenName';

export default class ForgetPswd extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      email: '',
     
      isModalVisible: false,
      isButtonDisabled: true 
    };
  }
  handlePrevPage=()=>{
    this.props.navigation.goBack()
  }
  closeModal = () => {
    this.props.navigation.navigate(ScreenNames.Reset)
    this.setState({ isModalVisible: false }) 
    // this.props.navigation.reset({index:0, routes:[{name:'Reset'}]})
}
validateInput=(email)=>{
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 this.setState({ email, isButtonDisabled:email=''||!emailRegex.test(email)})
}
  handleClick = () => {
    const { email } = this.state;
   
 
    if (email === 'a@gmail.com') {
      this.setState({ isModalVisible: true })
        // this.props.navigation.navigate('Home')
    } else {
            const ToastMessage = "Email not found. Contact admin.";
            this.showToast(ToastMessage);  
    }
}
  showToast = (message) => {
    this.setState({ isToastVisible: true, toastMessage: message });

   
    setTimeout(() => {
        this.setState({ isToastVisible: false });
    }, 3000);
};



  render() {
    const { email, emailError,isModalVisible, isButtonDisabled } = this.state;  

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        
      >
       
          <View style={styles.contentContainer}>
            <View style={{ paddingTop: 40 }}>
              <BackbuttonComp handlePrevPage={this.handlePrevPage} />
            </View>
            <Text style={styles.heading}>Forget Password</Text>
            <Text style={styles.subHead}>Reset Your Password with just a few clicks</Text>
            <View style={styles.inputFld}>
              <TextFiledComp
                Type={'Email'}
                placeholder={'Email Address'}
                placeholderTextColor={'#60707d'}
                icon={Icons.Email}
                value={email}  
                onChangeText={this.validateInput}  
                Animation={true}
                keyboardAppearance={true}
                errorMessage={emailError}  
              />
            </View>
          </View>
      
        <View style={styles.buttonView}>
          <ButtonComponent 
            disable={isButtonDisabled}
            background={isButtonDisabled ? '#bfd6e8' : '#2a7bbb'} 
            buttonName={'Sign In'} 
            color={'white'} 
            onclick={this.handleClick} 
          />
        </View>
        <CustomModal
            image={Images.LinkSent}
           visible={isModalVisible}
            onClose={this.closeModal}  
           title="Link Sent !"
            message="The link to reset your password has been sent on your email address."
             buttonText="Set Password"
                        />
        <CustomToast visible={this.state.isToastVisible} message={this.state.toastMessage} />
      </KeyboardAvoidingView>
    );
  }
}

