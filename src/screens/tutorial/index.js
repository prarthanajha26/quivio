import React, { Component, createRef } from 'react';
import { View, Text, ScrollView, Dimensions, Image } from 'react-native';
import ButtonComponent from '../../components/ButtonComponent';
import { Images } from '../../assets';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScreenNames } from '../../navigator/screenName';

const { width } = Dimensions.get('window');

class TutorialScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      isVisited:true
    };
    this.scrollViewRef = createRef();
    this.autoScrollTimeout = null;
    
  }

  screens = [
    { icon: Images.TutorialImg1, description: 'This is the first page of the tutorial' },
    { icon: Images.TutorialImg2, description: 'Swipe to learn how to use the app' },
    { icon: Images.TutorialImg3, description: 'That’s it! You are ready to go!' },
  ];

  componentDidMount=async()=> {
    this.startAutoScroll();
    await AsyncStorage.setItem('isVisited',"true")
  }

  componentWillUnmount() {
    this.clearAutoScroll();
  }

  handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    this.setState({ currentIndex: index });
    this.clearAutoScroll();
    this.startAutoScroll(); 
  };

  goToNextPage = () => {
    const { currentIndex } = this.state;
    if (currentIndex < this.screens.length - 1) {
      this.scrollViewRef.current.scrollTo({ x: (currentIndex + 1) * width, animated: true });
      this.setState({ currentIndex: currentIndex + 1 });
    } else {
      
      this.scrollViewRef.current.scrollTo({ x: 0, animated: true });
      this.setState({ currentIndex: 0 });
    }
  };

  startAutoScroll = () => {
    this.autoScrollTimeout = setTimeout(() => {
      this.goToNextPage(); 
    }, 5000); 
  };

  clearAutoScroll = () => {
    if (this.autoScrollTimeout) {
      clearTimeout(this.autoScrollTimeout);
    }
  };

  handleNavigate=(nextPg)=>{
    this.props.navigation.navigate(nextPg)
    this.props.navigation.reset({
      index:0,
      routes:[{name:nextPg}]
    })
  }

  render() {
    const { currentIndex } = this.state;

    return (
      <>
  
        <View style={styles.container}>
          <ScrollView
            ref={this.scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={this.handleScroll}
            scrollEventThrottle={16}
            style={styles.scrollView}
          >
            {this.screens.map((screen, index) => (
              <View key={index} style={styles.screen}>
                <Image source={screen.icon} style={styles.imgStyle} />
                <Text style={styles.description}>{screen.description}</Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.dotContainer}>
            {this.screens.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, currentIndex === index ? styles.activeDot : styles.inactiveDot]}
              />
            ))}
          </View>
          <View style={styles.buttonContainer}>
            <ButtonComponent background={'#358cc3'} 
            buttonName={'Login'} 
            color={'white'} 
            onclick={()=>this.handleNavigate(ScreenNames.Login)} 
            buttonStyle={styles} />

            <ButtonComponent buttonName={'Skip'} 
            background={'white'} color={'#838487'}
            onclick={()=>this.handleNavigate(ScreenNames.Home)} />
        </View>
        </View>
       
        
      </>
    );
  }
}



export default TutorialScreen;
