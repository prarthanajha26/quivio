import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style';
import PhoneInput from 'react-native-phone-number-input';
import BackbuttonComp from '../../components/Backbutton';
import {vh, vw} from '../../utils/dimension';
import {Icons, Images} from '../../assets';
import Strings from '../../utils/enum';
import CustomInput from '../../newComponent/TextField';
import ButtonComponent from '../../components/ButtonComponent';
import Calendercomp from '../../newComponent/calender';
import CustomModal from '../../components/CustomeModal';
import ImagePicker from 'react-native-image-crop-picker';
import PhotoModal from '../../newComponent/photoModal';

export default function Account() {
  const gender = [
    {Title: 'Male', icon: Images.profile},
    {Title: 'Female', icon: Images.profile},
  ];

  const Profile = [
    {
      Title: 'Upload From Gallery',
      icon: Images.fromGallery,
    },
    {
      Title: 'Use Camera',
      icon: Images.fromCamera,
    },
    {
      Title: 'Select an Avatar',
      icon: Images.selectAvatar,
    },
  ];

  const [formData, setFormData] = useState({
    phoneNumber: '',
    name: '',
    userName: '',
    gender: '',
    email: '',
    countryCode: 'US',
    birthday: '',
  });

  const [showCalender, setShowCalender] = useState(false);
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [showGenderModal, setShowGenderModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState({});
  // const [disabled, setDisabled] = useState(true);

  const loadImage = async () => {
    const savedImage = await AsyncStorage.getItem('profileImage');
    if (savedImage) {
      setSelectedImage(savedImage);
    }
  };
  useEffect(() => {
    loadImage();
  }, []);

  const validateName = name => {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
  };

  const validateUsername = username => {
    const usernameRegex = /^[A-Za-z0-9]+$/;
    return usernameRegex.test(username);
  };

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validNumber = number => {
    const numberRegex = /^\d+$/;
    return numberRegex.test(number);
  };

  const handleInputChange = (key, value) => {
    let errorMessage = '';
    if (value !== '') {
    if (key === 'name' && !validateName(value)) {
      errorMessage = 'Name must contain only alphabets.';
    } else if (key === 'userName' && !validateUsername(value)) {
      errorMessage = 'Username must contain only letters and numbers.';
    } else if (key === 'email' && !validateEmail(value)) {
      errorMessage = 'Email is not valid';
    } else if (key === 'phoneNumber' && !validNumber(value)) {
      errorMessage = 'Number is not valid';
    }
  }
    let Obj2 = {...error, [key]: errorMessage};
    setError(Obj2);

   
      // let Obj = {...formData, [key]: value};
      setFormData({...formData, [key]:value});
    

    // const {phoneNumber, name, userName, gender, email, countryCode, birthday} =
    // { ...formData, [key]: value };

    // if (
    //   phoneNumber &&
    //   name &&
    //   userName &&
    //   gender &&
    //   email &&
    //   countryCode &&
    //   birthday &&
    //   Object.values(Obj2).every(element => element === '')
    // ) {
    //   setDisabled(false);
    // } else {
    //   setDisabled(true);
    // }
  };

  const handleCalender = () => {
    setShowCalender(!showCalender);
  };

  const handleModal = () => {
    setShowPhotoModal(prev => !prev);
  };

  const handleGenderModal = () => {
    setShowGenderModal(prev => !prev);
  };

  const handleDateChange = day => {
    handleInputChange('birthday', day.dateString);
    setShowCalender(false);
  };

  const takePhotoFromCamera = async () => {
    try {
      const image = await ImagePicker.openCamera({
        width: vw(300),
        height: vh(400),
        cropping: true,
      });
      setSelectedImage(image.path);
      // await AsyncStorage.setItem('profileImage', image.path);
      setShowPhotoModal(false);
    } catch (error) {
      Alert.alert('Error', 'Failed to capture image');
      console.log(error);
    }
  };

  const uploadFromGallery = async () => {
    try {
      const image = await ImagePicker.openPicker({
        width: vw(300),
        height: vh(400),
        cropping: true,
      });
      setSelectedImage(image.path);
      // await AsyncStorage.setItem('profileImage', image.path);
      setShowPhotoModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGenderSelect = selectedGender => {
    handleInputChange('gender', selectedGender.Title);
    setShowGenderModal(false);
  };
  const handelClick = async() => {
    const {phoneNumber, name, userName, gender, email, countryCode, birthday} =formData ;
    if(phoneNumber||name||userName||gender||email||countryCode||birthday||selectedImage){
      // console.log('.......');
      await AsyncStorage.setItem('profileImage', selectedImage);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BackbuttonComp backgroundColor={'#f6f6f6'} source={Images.arrow} />
        <Text style={styles.tabName}>Edit Profile</Text>
        <View />
      </View>

      <View style={styles.profileContainer}>
        <View style={styles.profile}>
          <Image
            style={styles.profileImg}
            source={selectedImage ? {uri: selectedImage} : Images.profile}
            
          />
        </View>
        <View style={styles.profileText}>
          <Text style={styles.profilePic}>{Strings.profile_pic}</Text>
          <TouchableOpacity onPress={handleModal}>
            <Text style={styles.changePic}>{Strings.change_pic}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <CustomInput
          placeholder={Strings.name}
          input={styles.input}
          inputContainer={styles.inputContainer}
          labelOffset={{x1: 180, y1: -5, x0: 180, y0: -5}}
          tintColor={'#ccc'}
          containerStyle={styles.containerStyle}
          onChangeText={value => handleInputChange('name', value)}
          value={formData.name}
          errorColor={'red'}
          error={error.name?true:false}
        />
        <Text style={styles.errorText}>{error.name && error.name}</Text>

        <CustomInput
          placeholder={Strings.UserName}
          input={styles.input}
          inputContainer={styles.inputContainer}
          labelOffset={{x1: 180, y1: -5, x0: 180, y0: -5}}
          tintColor={error.userName?'red':'#ccc'}
          containerStyle={styles.containerStyle}
          onChangeText={value => handleInputChange('userName', value)}
          value={formData.userName}
          errorColor={'red'}
          error={error.userName?true:false}
        />

        <Text style={styles.errorText}>{error.userName && error.userName}</Text>

        <TouchableWithoutFeedback
          style={styles.calenderContainer}
          onPress={handleCalender}>
          <View>
            <CustomInput
              placeholder={Strings.BirthDay}
              input={styles.input}
              inputContainer={styles.inputContainer}
              labelOffset={{x1: 180, y1: -5, x0: 180, y0: -5}}
              tintColor={error.birthday?'red':'#ccc'}
              containerStyle={styles.containerStyle}
              value={formData.birthday}
              disabled={true}
              errorColor={'red'}
          error={error.birthday?true:false}
            />
            {/* <TouchableOpacity style={styles.calenderbtn} > */}
            <Image
              style={[styles.calenders, styles.calenderbtn]}
              source={Images.calendar}
            />
            {/* </TouchableOpacity> */}
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.errorText} />

        <TouchableWithoutFeedback
          style={styles.genderContainer}
          onPress={handleGenderModal}>
          <View>
            <CustomInput
              placeholder={Strings.Gender}
              input={styles.input}
              inputContainer={styles.inputContainer}
              labelOffset={{x1: 180, y1: -5, x0: 180, y0: -5}}
              tintColor={error.gender?'red':'#ccc'}
              value={formData.gender}
              onChangeText={value => handleInputChange('gender', value)}
              disabled={true}
              errorColor={'red'}
          error={error.gender?true:false}
            />

            <Image
              style={[styles.dropIcon, styles.dropBtn]}
              source={Icons.drop}
            />
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.errorText} />
        <PhoneInput
          defaultValue={formData.phoneNumber}
          defaultCode={formData.countryCode}
          layout="first"
          onChangeCountry={code => handleInputChange('countryCode', code)}
          onChangeText={value => handleInputChange('phoneNumber', value)}
          containerStyle={styles.phoneInputContainer}
          textContainerStyle={styles.textInputContainer}
          codeTextStyle={styles.codeText}
          textInputStyle={styles.phoneText}
        />
        <Text style={styles.errorText}>
          {error.phoneNumber && error.phoneNumber}
        </Text>
        <CustomInput
          placeholder={Strings.Email}
          input={styles.input}
          inputContainer={styles.inputContainer}
          labelOffset={{x1: 180, y1: -5, x0: 180, y0: -5}}
          tintColor={error.email?'red':'#ccc'}
          containerStyle={styles.containerStyle}
          value={formData.email}
          onChangeText={value => handleInputChange('email', value)}
          errorColor={'red'}
          error={error.email?true:false}
        />
        <Text style={styles.errorText}>{error.email && error.email}</Text>
        <ButtonComponent
          background={'#000080'}
          buttonName={'Update'}
          color={'white'}
          onclick={handelClick}
          // disabled={disabled}
        />
      </View>
      <CustomModal
        needChild={true}
        visible={showCalender}
        transparent={true}
        animationType={'slide'}
        onBackdropPress={handleCalender}
        onRequestClose={handleCalender}>
        <View style={{justifyContent: 'center', paddingHorizontal: vw(30)}}>
          <Calendercomp
            current={formData.birthday}
            onDayPress={handleDateChange}
            markedDates={{
              [formData.birthday]: {
                selected: true,
                marked: true,
                selectedColor: '#00B0FF',
              },
            }}
          />
        </View>
      </CustomModal>
      <PhotoModal
        visible={showPhotoModal}
        onClose={() => setShowPhotoModal(false)}
        onUploadFromGallery={uploadFromGallery}
        onTakePhoto={takePhotoFromCamera}
        onSelectAvatar={() => console.log('Select Avatar')}
        options={Profile}
      />

      {/* Gender Modal */}
      <PhotoModal
        visible={showGenderModal}
        onClose={handleGenderModal}
        handleGenderSelect={handleGenderSelect}
        options={gender}
      />
    </View>
  );
}
