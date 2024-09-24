import React, { Component } from 'react'
import { Text, View, Image, ImageBackground, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback } from 'react-native'
import { Images } from '../../assets'
import FlatListCom from '../../components/FlatListCom'
import { Icons } from '../../assets'
import TextFiledComp from '../../components/TextFiledComp'
import ButtonComponent from '../../components/ButtonComponent'
import styles from './style'
import CustomModal from '../../components/modalComp'
import CustomToast from '../../components/CustomToast'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ScreenNames } from '../../navigator/screenName'

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pswd: '',
            toggleIcon: true,
            isModalVisible: false,
            falseloginCount: 0,
            emailError: '',
            passwordError: '',
            isToastVisible: false,
            toastMessage: '',
            isButtonDisabled: true 
        }
    }

    data = [
        {
            id: 1,
            icon: Icons.chart_line_up,
            title: 'Asthetical Graphics'
        },
        {
            id: 2,
            icon: Icons.flask,
            title: 'Real time Statics'
        },
        {
            id: 3,
            icon: Icons.clock,
            title: 'Track Equipment Usage'
        }
    ]

    
    validateInputs = () => {
        const { email, pswd } = this.state;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isButtonDisabled = email === '' || pswd === ''|| pswd.length<6||!emailRegex.test(email);
        this.setState({ isButtonDisabled });
    }

    handleEmailChange = (email) => {
        this.setState({ email }, this.validateInputs);
    }

    handlePasswordChange = (pswd) => {
        this.setState({ pswd}, this.validateInputs);
    }

    handelClick = async () => {
        const { email, pswd, falseloginCount } = this.state;
        const password = await AsyncStorage.getItem('password');
        // let emailError = '';
        // let passwordError = '';

        // if (emailError || passwordError) {
        //     this.setState({ emailError: 'Email is required Field', passwordError: 'Password is Required Field' });
        //     return;
        // }

        if (email === 'a@gmail.com' && (password?pswd == password:pswd === '110061@mP')) {
            await AsyncStorage.setItem('isLogin', 'true');
            this.props.navigation.navigate(ScreenNames.Home);
            this.props.navigation.reset({
                index: 0,
                routes: [{ name: ScreenNames.Home }]
            });
        } else {
            if (falseloginCount >= 3) {
                this.setState({ isModalVisible: true });
            } else {
                
                const ToastMessage = "Invalid credentials. Please try again";
                this.showToast(ToastMessage);
                this.setState(prevState => ({
                    falseloginCount: prevState.falseloginCount + 1
                }));
            }
        }
    }

    showToast = (message) => {
        this.setState({ isToastVisible: true, toastMessage: message });

        setTimeout(() => {
            this.setState({ isToastVisible: false });
        }, 3000);
    }

    toggleEye = () => {
        this.setState({ toggleIcon: !this.state.toggleIcon });
    }

    handelNavigate = () => {
        this.props.navigation.navigate(ScreenNames.Forget, { prevPge: ScreenNames.Login });
    }

    closeModal = () => {
        this.setState({ isModalVisible: false });
    }

    renderItem = ({ item }) => (
        <View style={styles.listContainer}>
            <Image source={item.icon} />
            <Text style={styles.listText}>{item.title}</Text>
        </View>
    )

    render() {
        const { email, pswd, toggleIcon, isModalVisible, emailError, passwordError, isButtonDisabled } = this.state;

        return (
            <KeyboardAvoidingView
                style={styles.loginContainer}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ImageBackground style={{ flex: 1 }} source={Images.bgc}>
                    <View style={styles.Topcontainer}>
                        <Image source={Images.proj_logo} />
                        <Text style={styles.LogoText}>QUIVIO</Text>
                        <Text style={styles.subText}>Your Personal CarWash Assistant</Text>
                        <View style={styles.lineView} />
                        <FlatListCom data={this.data} renderItem={this.renderItem} horizontal={true} />
                    </View>

                    <View style={styles.BottomContainer}>
                        <Text style={styles.signinText}>Sign in</Text>
                        <Text style={styles.signSubText}>With Your Valid Credential</Text>

                        {/* Email Field */}
                        <View style={styles.textFieldcomp}>
                            <TextFiledComp
                                Type={'Email'}
                                placeholder={'Email Address'}
                                placeholderTextColor={'#60707d'}
                                icon={Icons.Email}
                                value={email}
                                onChangeText={this.handleEmailChange}
                                Animation={true}
                                keyboardAppearance={true}
                                errorMessage={emailError}
                                containerStyle={{ borderWidth: 1 }}
                            />
                        </View>

                        {/* Password Field */}
                        <View style={styles.textFieldcomp}>
                            <TextFiledComp
                                Type={'password'}
                                placeholder={'Password'}
                                placeholderTextColor={'#60707d'}
                                icon={Icons.pswd}
                                eye={toggleIcon ? Icons.hide : Icons.eye}
                                value={pswd}
                                onChangeText={this.handlePasswordChange}
                                Animation={true}
                                keyboardAppearance={true}
                                secureTextEntry={toggleIcon}
                                toggleEye={this.toggleEye}
                                errorMessage={passwordError}
                            />
                        </View>
                        <TouchableWithoutFeedback onPress={this.handelNavigate}>
                            <View>
                                <Text style={styles.frgtpswd}>Forget Password</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <View style={styles.buttonView}>
                            <ButtonComponent
                                background={isButtonDisabled ? '#bfd6e8' : '#2a7bbb'}
                                buttonName={'Sign In'}
                                color={'white'}
                                onclick={this.handelClick}
                                disabled={isButtonDisabled}
                            />
                        </View>
                    </View>
                </ImageBackground>

                <CustomModal
                    visible={isModalVisible}
                    onClose={this.closeModal}
                    title="Account Locked"
                    message="Your account has been locked due to too many failed attempts. Please try again after some time."
                    buttonText="Okay"
                    image={Images.Lock}
                />
                <CustomToast visible={this.state.isToastVisible} message={this.state.toastMessage} />
            </KeyboardAvoidingView>
        )
    }
}
