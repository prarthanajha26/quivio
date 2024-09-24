import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Icons,Images } from '../../assets'
import Frequently from './component/frequently'
import AccountSetUp from './component/AccountSetUp'
import Activities from './component/Activities'
import styles from './style'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ScreenNames } from '../../navigator/screenName'
import CustomModal from '../../components/CustomeModal'
import ButtonComponent from '../../components/ButtonComponent'


export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false

    }
  }
  componentDidMount = async () => {
    const accNo = await AsyncStorage.getItem('accNo')
    // console.log(accNo)
    if (accNo) {
      this.setState({ isModalVisible: false })
    }
    else {
      this.setState({ isModalVisible: true })
    }
  }

  toggleModal = () => {
    
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  handleLogout = async () => {
    await AsyncStorage.setItem('isLogin', 'false')
    this.props.navigation.navigate(ScreenNames.Login)
    this.props.navigation.reset({
      index: 0,
      routes: [{ name: ScreenNames.Login }]
    })
  }
  navigate = () => {
    this.props.navigation.navigate('FAscreen')
    this.setState({ isModalVisible: false })
  }

  render() {
    const activityList = Array.from({ length: 10 });

    return (
      < View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.TopNav}>
            <View style={styles.leftNav}>
              <Text style={styles.welcText}>Welcome</Text>
              <Text style={styles.name}>Kelvin</Text>
            </View>
            <View style={styles.rightNav}>
              <View style={styles.iconContainer}>
                <Image style={styles.iconstyle} source={Icons.message} />
              </View>
              <TouchableOpacity style={styles.iconContainer} onPress={this.handleLogout}>
                <Image style={styles.iconstyle} source={Icons.notify} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.notification}>
              <AccountSetUp onPress={this.toggleModal} />
            </View>
            <Text style={styles.heading}>FREQUENTLY USED</Text>
            <View style={styles.frequentlyContner}>
              <Frequently title={'Calender'} />
              <Frequently title={'Customer'} />
              <Frequently title={'Messages'} />
            </View>
            <Text style={styles.heading}>ACTIVITIES</Text>
            <View style={styles.activitiesContainer}>
              {activityList.map((_, index) => (
                <Activities key={index} />
              ))}
            </View>
          </View>
          <CustomModal
            needChild={true}
            visible={this.state.isModalVisible}
            transparent={true}
            animationType={'slide'}
            onBackdropPress={() => this.toggleModal()}
            onRequestClose={() => this.toggleModal()}
            
          >
           <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalphonecontainer}>
                            
                            <Image source={Images.ModalImage} style={styles.image} />
                        </View>
                        <Text style={styles.secure} onPress={this.props.onBackdropPress} >Secure your Account ?</Text>
                        <Text style={styles.securetext}>Setup two-factor authentication to secure your account in just two steps.</Text>

                        <View style={styles.modalimage}>
                            <Image source={Images.ModalCall} style={styles.image1} />
                            <Text style={styles.textlink}>Link your account with your phone number</Text>
                        </View>

                        <View style={styles.modalimage}>

                            <Image source={Images.ModalOtp} style={styles.image1} />

                            <Text style={styles.textlink}>Enter the one-time passcode</Text>
                        </View>

                        <View style={styles.modalimage}>

                            <Image source={Images.ModalSecure} style={styles.image1} />

                            <Text style={styles.textlink}>Secure your account</Text>
                        </View>


                        <ButtonComponent color={'white'} background={'#2a7bbb'} buttonName={"Get Started"} onclick={this.navigate} />

                    </View>
                </View> 
            </CustomModal>
          
        </ScrollView>

      </View>
    )
  }
}