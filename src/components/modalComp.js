import React, { Component } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Images } from '../assets';
import ButtonComponent from './ButtonComponent';

class CustomModal extends Component {
  render() {
    const { visible, onClose, title, message, buttonText } = this.props;
    
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.lockIconContainer}>
              
                <Image style={styles.ModalIcon} source={this.props.image} />
              
            </View>
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.modalText}>{message}</Text>


            <ButtonComponent background={'#2a7bbb'} buttonName={buttonText} color={'white'} onclick={onClose} />
           
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  lockIconContainer: {
    marginBottom: 20,
  },
  lockIcon: {
    fontSize: 40,
    color: '#FF6666',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight:'400',
    color:'#60707d'
  },
  ModalIcon:{
    height:60,
    width:60
  }
 
});

export default CustomModal;
