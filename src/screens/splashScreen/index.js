import React from 'react';
import { View, Image } from 'react-native';
import styles from './style.js';
import { Icons } from '../../assets';
// import GIF from '../../assets/splashScreen.gif';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScreenNames } from '../../navigator/screenName.js';
// import TutorialScreen from './tutorialScreen';

export default class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        const isVisited = await AsyncStorage.getItem('isVisited');
        const isLogin = await AsyncStorage.getItem('isLogin');
        // console.log(isVisited);
        // console.log(isLogin);

        setTimeout(() => {
            if(!isVisited)
            this.props.navigation.navigate(ScreenNames.Tutorial);
        else if(isLogin=='true'){
        this.props.navigation.navigate(ScreenNames.Home)
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: ScreenNames.Home }]
       })
        }
    else
   { this.props.navigation.navigate(ScreenNames.Login)

    this.props.navigation.reset({
        index: 0,
        routes: [{ name: ScreenNames.Login }]
   })
   }

        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={Icons.splash_img} style={styles.image} />
            </View>
        );
    }
}
