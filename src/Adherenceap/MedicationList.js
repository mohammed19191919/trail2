import React from 'react';
import { View, Text, Button } from 'react-native';
import PushNotification from 'react-native-push-notification';

const MedicationList = ({ route }) => {
  const { medicationName, time, photo, caution } = route.params;

  const setAlarm = () => {
    PushNotification.localNotificationSchedule({
      message: `Time to take your medication: ${medicationName}`,
      date: new Date(Date.now() + 60 * 1000), // Schedule for 1 minute later (for testing)
    });
  };

  return (
    <View>
      <Text>Medication Name: {medicationName}</Text>
      <Text>Time: {time}</Text>
      <Text>Caution: {caution}</Text>
      <Button title="Set Alarm" onPress={setAlarm} />
    </View>
  );
};

export default MedicationList;