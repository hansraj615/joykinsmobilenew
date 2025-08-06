import React, { useState } from 'react';
import { View } from 'native-base';
import { TextInput, Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as authAPI from '../api/auth';

interface Props extends NativeStackScreenProps<any> {}

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');

  const onSubmit = async () => {
    const form = new FormData();
    form.append('first_name', firstName);
    form.append('last_name', lastName);
    form.append('email', email);
    form.append('password', password);
    form.append('password_confirmation', confirm);

    try {
      await authAPI.register(form);
      navigation.goBack();
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <View p={4} flex={1} justifyContent="center">
      <TextInput label="First Name" value={firstName} onChangeText={setFirstName} style={{ marginVertical: 8 }} />
      <TextInput label="Last Name" value={lastName} onChangeText={setLastName} style={{ marginVertical: 8 }} />
      <TextInput label="Email" value={email} onChangeText={setEmail} style={{ marginVertical: 8 }} />
      <TextInput label="Password" secureTextEntry value={password} onChangeText={setPassword} style={{ marginVertical: 8 }} />
      <TextInput label="Confirm Password" secureTextEntry value={confirm} onChangeText={setConfirm} style={{ marginVertical: 8 }} />
      <Button mode="contained" onPress={onSubmit} style={{ marginVertical: 8 }}>
        Register
      </Button>
    </View>
  );
};

export default SignupScreen;
