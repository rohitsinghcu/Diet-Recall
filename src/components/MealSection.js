import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MealSection = ({
  mealName,
  mealData,
  setMealData,
  required,
  onPress,
  isActive,
  menuPlaceholders,
}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [formattedTime, setFormattedTime] = useState('');

  const {mealTime, menuOptions} = mealData;

  const addMoreMenuOption = () => {
    if (menuOptions.length < 7) {
      setMealData({...mealData, menuOptions: [...menuOptions, '']});
    }
  };

  const handleMenuChange = (text, index) => {
    const updatedMenu = [...menuOptions];
    updatedMenu[index] = text;
    setMealData({...mealData, menuOptions: updatedMenu});
  };

  const onTimeChange = currentTime => {
    // Format the time as HH:MM AM/PM
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const formatted = formatAMPM(hours, minutes);
    setMealData({...mealData, mealTime: formatted});
    setFormattedTime(formatted);
  };

  const formatAMPM = (hours, minutes) => {
    let ampm = hours >= 12 ? 'PM' : 'AM';
    let formattedHours = hours % 12 || 12; // Convert 24-hour to 12-hour format
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Pad single digits with a leading zero
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

  const areAllMenuOptionsFilled = () => {
    return menuOptions.every(option => option.trim() !== '');
  };

  return (
    <View
      style={[
        styles.section,
        {
          shadowColor:
            (menuOptions.every(option => option.trim() !== '') && mealTime) ||
            isActive
              ? '#000'
              : 'gray',

          elevation:
            (menuOptions.every(option => option.trim() !== '') && mealTime) ||
            isActive
              ? 4
              : 2,
        },
      ]}>
      <TouchableOpacity
        style={styles.mealHeader}
        onPress={isActive ? null : onPress}
        disabled={isActive ? true : null}>
        <Text
          style={[
            styles.label,
            {
              color:
                (menuOptions.every(option => option.trim() !== '') &&
                  mealTime) ||
                isActive
                  ? '#2A2F5A'
                  : 'darkgray',
            },
          ]}>
          {mealName}
          {required && '*'}
        </Text>
        {!isActive && (
          <View
            style={{
              backgroundColor:
                (menuOptions.every(option => option.trim() !== '') &&
                  mealTime) ||
                isActive
                  ? '#03989F'
                  : 'darkgray',
              padding: 0,
              borderRadius: 50,
            }}>
            <Icon name="chevron-down" size={24} color="#fff" />
          </View>
        )}
      </TouchableOpacity>

      {isActive && (
        <>
          <View style={styles.timeContainer}>
            <Text style={styles.menuLabel}>Time:</Text>
            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={styles.inputWrapper}>
              <TextInput
                value={formattedTime}
                onPress={() => setOpen(true)}
                placeholder="Select time"
                style={styles.timeTextInput}
              />
              <Icon
                name="menu-down"
                size={22}
                color="#333333"
                style={styles.timeIcon}
              />
            </TouchableOpacity>

            <DatePicker
              modal
              open={open}
              date={date}
              mode="time"
              onConfirm={date => {
                setOpen(false);
                onTimeChange(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
          </View>

          <Text style={styles.menuLabel}>
            {`Menu option${required ? 's' : ''}:`}
          </Text>

          {menuOptions.map((option, index) => (
            <View key={index} style={styles.menuContainer}>
              {required && (
                <Text style={styles.menuIndexText}>{`${index + 1}.`}</Text>
              )}
              <TextInput
                style={[styles.textInput, {width: required ? '90%' : '100%'}]}
                placeholder={menuPlaceholders[index]}
                value={option}
                onChangeText={text => handleMenuChange(text, index)}
              />
            </View>
          ))}

          {required && menuOptions.length < 7 && (
            <TouchableOpacity
              style={styles.addButton}
              disabled={!areAllMenuOptionsFilled()}
              onPress={addMoreMenuOption}>
              <Text
                style={[
                  styles.addButtonText,
                  {color: areAllMenuOptionsFilled() ? '#03989F' : 'darkgray'},
                ]}>
                Add More
              </Text>
              <View
                style={{
                  backgroundColor: areAllMenuOptionsFilled()
                    ? '#03989F'
                    : 'darkgray',
                  padding: 2,
                  borderRadius: 50,
                }}>
                <Icon name="plus" size={16} color="#fff" />
              </View>
            </TouchableOpacity>
          )}
        </>
      )}
    </View>
  );
};

export default MealSection;

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    gap: 5,
    shadowOffset: {width: 0, height: 2}, // Horizontal and vertical offset
  },
  mealHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuLabel: {
    fontSize: 14,
    marginTop: 10,
    marginRight: 5,
    fontWeight: '500',
    color: '#2A2F5A',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  menuIndexText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
  },
  textInput: {
    borderBottomWidth: 0.8,
    borderColor: 'gray',
    paddingVertical: 2,
    paddingHorizontal: 3,
    fontSize: 14,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.8,
    borderColor: 'gray',
    borderRadius: 4,
    paddingLeft: 4,
  },
  timeTextInput: {
    fontSize: 14,
    padding: 0,
  },
  timeIcon: {
    marginLeft: 5,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'flex-end',
    marginTop: 10,
    gap: 5,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
});
