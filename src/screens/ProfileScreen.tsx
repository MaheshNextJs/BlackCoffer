import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import {COLORS} from '../constants';

const p1 = require('../assets/images/p1.jpg');

export default function ProfileScreen() {
  const handleSave = () => {
    Alert.alert('Success', 'Profile saved');
  };

  return (
    <View style={styles.flex1}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Profile</Text>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <Image source={p1} style={styles.profileImage} />
        <TouchableOpacity style={styles.cameraIcon}>
          <Text>📷</Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Text>Name</Text>
          <TextInput style={styles.input} value="Mahesh Bairi" />
          <Text>Email</Text>
          <TextInput style={styles.input} value="maheshbairi3@gmail.com" />

          <Text>Gender</Text>
          <TextInput style={styles.input} value="Male" editable={false} />

          <Text>Location</Text>
          <TextInput style={styles.input} value="Greater Hyderabad" />

          <Text>Profession</Text>
          <TextInput style={styles.input} value="React Native Developer" />

          <Text>Bio</Text>
          <TextInput
            style={[styles.input, styles.bioInput]}
            multiline
            numberOfLines={4}
            value={
              'I am a React Native developer with a passion for building mobile applications. I love coding and exploring new technologies.'
            }
          />
          <Text style={styles.wordCount}>(120 words)</Text>

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  header: {
    backgroundColor: COLORS.primary,
    padding: 20,
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    padding: 10,
    backgroundColor: COLORS.white,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 16,
  },
  cameraIcon: {
    position: 'absolute',
    right: 140,
    top: 80,
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 20,
  },
  inputContainer: {
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  bioInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  wordCount: {
    alignSelf: 'flex-end',
    color: COLORS.lightText,
  },
  saveButton: {
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  saveButtonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
