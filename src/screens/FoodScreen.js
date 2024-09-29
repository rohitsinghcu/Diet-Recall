import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import MealSection from '../components/MealSection';
import CustomButton from '../components/CustomButton';
import CustomContainer from '../components/CustomContainer';
import CustomModal from '../components/CustomModal';

const FoodRecallDetails = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('Breakfast'); // Default to 'Breakfast' section
  const [breakfastData, setBreakfastData] = useState({
    mealTime: '',
    menuOptions: ['', ''],
  });
  const [midMorningData, setMidMorningData] = useState({
    mealTime: '',
    menuOptions: [''],
  });
  const [lunchData, setLunchData] = useState({
    mealTime: '',
    menuOptions: ['', ''],
  });
  const [lateEveningData, setLateEveningData] = useState({
    mealTime: '',
    menuOptions: [''],
  });
  const [dinnerData, setDinnerData] = useState({
    mealTime: '',
    menuOptions: ['', ''],
  });

  const breakfastPlaceholders = [
    'eg. Upma + Apple juice',
    'eg. Idli + Sambar',
    'eg. Pancakes + Syrup',
    'eg. Omlette + Bread',
    'eg. Smoothie + Toast',
    'eg. Omelette + Salad',
    'eg. Cereal + Milk',
  ];
  const midMorningPlaceholders = ['eg. Oatmeal + Banana'];
  const lunchPlaceholders = [
    'eg. Roti + Sabji',
    'eg. Rice + Fish',
    'eg. Chicken + Rice',
    'eg. Bhindi + Chapati',
    'eg. Dal + Rice',
    'eg. Biryani + Riata',
    'eg. Rice + Sabji',
  ];
  const lateEveningPlaceholders = ['eg. Strawberries + Chocolate'];
  const dinnerPlaceholders = [
    'eg. Roti + Panner Korma',
    'eg. Vegetable curry + Chapati',
    'eg. Chole + Kulche',
    'eg. Fish + Rice',
    'eg. Rajma + Rice',
    'eg. Chineese + Manchurian',
    'eg. Khichdi',
  ];

  const toggleSection = section => {
    setActiveSection(prevSection => (prevSection === section ? null : section)); // Open the clicked section, close others
  };

  const isMealDataFilled = mealData => {
    return (
      mealData.mealTime &&
      mealData.menuOptions.every(option => option.trim() !== '')
    );
  };

  const isAllDataFilled = () => {
    return (
      isMealDataFilled(breakfastData) &&
      isMealDataFilled(lunchData) &&
      isMealDataFilled(dinnerData)
    );
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    showModal();
  }, []);

  return (
    <CustomContainer>
      <ScrollView>
        <Text style={styles.description}>
          Please tell us about the meals that you eat on a day-to-day basis.
          Mention a variety of options & not just one.
        </Text>

        <View style={styles.innerContainer}>
          {/* Meal Sections with prop drilling */}
          <MealSection
            mealName="Breakfast"
            required
            mealData={breakfastData}
            setMealData={setBreakfastData}
            isActive={activeSection === 'Breakfast'}
            onPress={() => toggleSection('Breakfast')}
            menuPlaceholders={breakfastPlaceholders}
          />
          <MealSection
            mealName="Mid-morning"
            mealData={midMorningData}
            setMealData={setMidMorningData}
            isActive={activeSection === 'Mid-morning'}
            onPress={() => toggleSection('Mid-morning')}
            menuPlaceholders={midMorningPlaceholders}
          />
          <MealSection
            mealName="Lunch"
            required
            mealData={lunchData}
            setMealData={setLunchData}
            isActive={activeSection === 'Lunch'}
            onPress={() => toggleSection('Lunch')}
            menuPlaceholders={lunchPlaceholders}
          />
          <MealSection
            mealName="Late Evening"
            mealData={lateEveningData}
            setMealData={setLateEveningData}
            isActive={activeSection === 'Late Evening'}
            onPress={() => toggleSection('Late Evening')}
            menuPlaceholders={lateEveningPlaceholders}
          />
          <MealSection
            mealName="Dinner"
            required
            mealData={dinnerData}
            setMealData={setDinnerData}
            isActive={activeSection === 'Dinner'}
            onPress={() => toggleSection('Dinner')}
            menuPlaceholders={dinnerPlaceholders}
          />
        </View>
      </ScrollView>
      <CustomModal
        isModalVisible={isModalVisible}
        hideModal={hideModal}
        headerText={'Note!'}
        mainText={
          'In case you eat out or carry meals to office, do mention those in recall too'
        }
      />
      <CustomButton
        onPress={() => navigation.navigate('WorkOutDetails')}
        disabled={!isAllDataFilled()}
        text={'Next'}
      />
    </CustomContainer>
  );
};

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
});

export default FoodRecallDetails;
