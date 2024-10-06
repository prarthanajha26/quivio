import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Modals from 'react-native-modal';
import { Icons } from '../assets'; 
import { vw, vh } from '../utils/dimension';

const PhotoModal = ({ visible, onClose, onUploadFromGallery,handleGenderSelect, onTakePhoto, onSelectAvatar, options }) => {
  
  const handleOptionSelect = (option) => {
   
    
    switch (option.Title) {
      case 'Upload From Gallery':
        
        onUploadFromGallery();
        break;
      case 'Use Camera':
        onTakePhoto();
        break;
      case 'Select an Avatar':
        onSelectAvatar();
        break;
        case 'Male':
          console.log('---------');
          
          handleGenderSelect(option)
          case 'Female':
            handleGenderSelect(option)
      default:
        break;
    }
  };

  return (
    <Modals
      backdropOpacity={0.4}
      isVisible={visible}
      animationType="slide"
      onRequestClose={onClose}
      style={{ margin: 0 }}
      onBackdropPress={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Profile Photo</Text>
        </View>

        {options.map((option, index) => (
          <React.Fragment key={index}>
            <TouchableOpacity onPress={() => handleOptionSelect(option)}>
              <View style={styles.containerTop}>
                <View style={styles.containerTop1}>
                  <Image source={option.icon} style={styles.imgSize} />
                  <View style={styles.containerTop2}>
                    <Text style={styles.textName}>{option.Title}</Text>
                  </View>
                </View>
                <View style={styles.forwardContainer}>
                  <Image source={Icons.forward} style={styles.imgForward} />
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.marginSpace} />
          </React.Fragment>
        ))}
      </View>
    </Modals>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 'auto',
    backgroundColor: '#fff',
    paddingHorizontal: vw(20),
    paddingBottom: vh(20),
  },
  modalContent: {
    marginVertical: 10,
    paddingTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#e6e9ee',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: vh(20),
    marginLeft: vw(15),
  },
  containerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F6F9FA',
    borderRadius: 8,
  },
  marginSpace: {
    marginBottom: 12,
  },
  containerTop1: {
    flexDirection: 'row',
    paddingHorizontal: vw(20),
    paddingVertical: vh(15),
  },
  imgSize: {
    height: vh(50),
    width: vw(44),
  },
  forwardContainer: {
    justifyContent: 'center',
    marginRight: vw(20),
  },
  imgForward: {
    width: vw(6),
    height: vh(10),
  },
  containerTop2: {
    alignItems:'center',
    marginStart: vw(14),
    justifyContent: 'center',
   
  },
  textName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000CC',
    textAlign:'center',
  },
  lineView: {
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    marginVertical: 20,
  },
});

export default PhotoModal;






{/* <CustomInput
          placeholder={Strings.UserName}
          input={styles.input}
          inputContainer={styles.inputContainer}
          labelOffset={{ x1: 165, y1: -5, x0: 170, y0: -5 }}
          tintColor={'#ccc'}
          containerStyle={styles.containerStyle}
          onChangeText={value => handleInputChange('userName', value)}
          value={formData.userName}
        /> */}
