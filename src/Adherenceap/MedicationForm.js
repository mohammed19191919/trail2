import React, { useState } from 'react';
import { View, TextInput, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const MedicationForm = ({ navigation }) => {
  const [medicationName, setMedicationName] = useState('');
  const [time, setTime] = useState('');
  const [photo, setPhoto] = useState(null);
  const [caution, setCaution] = useState('');

  const selectPhoto = () => {
    ImagePicker.showImagePicker({}, (response) => {
      if (response.uri) {
        setPhoto(response);
      }
    });
  };

  const handleSubmit = () => {
    // Save medication data and navigate to list
    // You might want to save this data to AsyncStorage or a backend
    navigation.navigate('MedicationList', { medicationName, time, photo, caution });
  };

  return (
    <View>
      <TextInput placeholder="Medication Name" onChangeText={setMedicationName} />
      <TextInput placeholder="Time of Administration" onChangeText={setTime} />
      <Button title="Select Photo" onPress={selectPhoto} />
      {photo && <Image source={{ uri: photo.uri }} style={{ width: 100, height: 100 }} />}
      <TextInput placeholder="Caution" onChangeText={setCaution} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default MedicationForm;