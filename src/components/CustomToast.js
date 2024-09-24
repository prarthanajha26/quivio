// CustomToast.js
import React from 'react';
import { View, Text, Image, StyleSheet, Animated } from 'react-native';
import { Icons } from '../assets'; // Use an appropriate alert icon from your assets

const CustomToast = ({ visible, message }) => {
  if (!visible) return null; // Don't render if not visible

  return (
   
    <Animated.View style={styles.toastContainer}>
      <Image source={Icons.alertIcon} style={styles.toastIcon} />
      <Text style={styles.toastText}>{message}</Text>
    </Animated.View>

  );
};

const styles = StyleSheet.create({
  toastContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E74C3C', 
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
 
    position: 'absolute',
    
    left: 20,
    right: 20,
    top:60,
    
  },
  toastIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
    marginRight: 10,
  },
  toastText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default CustomToast;
