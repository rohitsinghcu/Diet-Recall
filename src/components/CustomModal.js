import {
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';

const CustomModal = ({isModalVisible, hideModal, headerText, mainText}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={isModalVisible}
      onRequestClose={hideModal}>
      <StatusBar
        backgroundColor="rgba(0, 0, 0, 0.4)"
        barStyle={'dark-content'}
      />

      <TouchableWithoutFeedback onPress={hideModal}>
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '700',
                color: '#333333',
                textAlign: 'center',
              }}>
              {headerText}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '500',
                color: '#333333',
                textAlign: 'center',
                marginBottom: 10,
              }}>
              {mainText}
            </Text>
            <TouchableOpacity onPress={hideModal} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modal: {
    marginHorizontal: 35,
    padding: 17,
    paddingTop: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    gap: 10,
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: '#03989F',
    paddingVertical: 7,
    paddingHorizontal: 45,
    alignItems: 'center',
    borderRadius: 50,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
});
