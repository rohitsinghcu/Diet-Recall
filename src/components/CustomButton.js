import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({onPress, disabled, text}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.submitButton,
        {backgroundColor: !disabled ? '#03989F' : 'darkgray'}, // Change button color
      ]}
      disabled={disabled}>
      <Text style={styles.submitButtonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  submitButton: {
    padding: 15,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});
