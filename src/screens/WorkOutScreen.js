import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MealSection from '../components/MealSection';
import {Dropdown} from 'react-native-element-dropdown';
import CustomButton from '../components/CustomButton';
import CustomContainer from '../components/CustomContainer';
import CustomModal from '../components/CustomModal';

const WorkOutMealDetails = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [preMealData, setPreMealData] = useState({
    mealTime: '',
    menuOptions: [''],
  });
  const [postMealData, setPostMealData] = useState({
    mealTime: '',
    menuOptions: [''],
  });

  const [selectedDropdown, setSelectedDropdown] = useState('');

  const preMealPlaceholders = ['eg. banana, black coffee, nuts'];
  const postMealPlaceholders = ['eg. protein bar, protein powder, panner'];

  const data = [
    {label: 'None', value: 'None'},
    {label: 'Pre-workout', value: 'Pre-workout'},
    {label: 'Post-workout', value: 'Post-workout'},
    {label: 'Both', value: 'Both'},
  ];

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const hideResponse = () => {
    hideModal();
    navigation.navigate('Home');
  };

  return (
    <CustomContainer>
      <ScrollView>
        <Text style={styles.description}>
          Please describe the meals you eat before or after your workouts, if
          any.
        </Text>

        <View style={styles.innerContainer}>
          <View style={styles.section}>
            <Text style={styles.label}>
              Besides the recall you shared, are there any additional
              pre-workout or post-workout meals you consume?
            </Text>
            <Dropdown
              style={styles.dropdown}
              data={data}
              placeholder="Please select"
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              itemContainerStyle={styles.itemTextStyle}
              maxHeight={300}
              labelField="label"
              valueField="value"
              value={selectedDropdown}
              onChange={item => {
                setSelectedDropdown(item.value);
              }}
            />
          </View>

          {/* Conditionally render meal sections based on the dropdown value */}
          {selectedDropdown === 'Pre-workout' || selectedDropdown === 'Both' ? (
            <MealSection
              mealName="What is your usual pre-workout meal?"
              mealData={preMealData}
              setMealData={setPreMealData}
              isActive={true}
              menuPlaceholders={preMealPlaceholders}
            />
          ) : null}

          {selectedDropdown === 'Post-workout' ||
          selectedDropdown === 'Both' ? (
            <MealSection
              mealName="What is your usual post-workout meal?"
              mealData={postMealData}
              setMealData={setPostMealData}
              isActive={true}
              menuPlaceholders={postMealPlaceholders}
            />
          ) : null}
        </View>
      </ScrollView>
      <CustomModal
        isModalVisible={isModalVisible}
        hideModal={hideResponse}
        headerText={'Success!!!'}
        mainText={'Thank you for your response'}
      />
      <CustomButton onPress={showModal} text={'Submit'} />
    </CustomContainer>
  );
};

export default WorkOutMealDetails;

const styles = StyleSheet.create({
  innerContainer: {
    padding: 20,
    gap: 20,
  },
  description: {
    fontSize: 14,
    paddingVertical: 15,
    paddingHorizontal: 20,
    fontWeight: '500',
    color: '#333333',
    backgroundColor: '#E7FEFF',
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    gap: 5,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2}, // Horizontal and vertical offset
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2A2F5A',
  },
  dropdown: {
    paddingVertical: 8,
    borderColor: 'gray',
    borderBottomWidth: 0.8,
  },
  placeholderStyle: {
    fontSize: 14,
    color: 'gray',
  },
  selectedTextStyle: {
    fontSize: 14,
    color: '#333',
  },
  itemTextStyle: {
    padding: 0,
  },
});
