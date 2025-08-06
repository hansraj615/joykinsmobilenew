import React, { useState } from 'react';
import { View } from 'native-base';
import { TextInput, Button } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as authAPI from '../api/auth';

interface Props extends NativeStackScreenProps<any> {}

const ForgotPasswordScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const onSubmit = async () => {
    try {
      await authAPI.forgotPassword(email);
      navigation.goBack();
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <View p={4} flex={1} justifyContent="center">
      <TextInput label="Email" value={email} onChangeText={setEmail} style={{ marginVertical: 8 }} />
      <Button mode="contained" onPress={onSubmit} style={{ marginVertical: 8 }}>
        Reset Password
      </Button>
    </View>
  );
};

export default ForgotPasswordScreen;
