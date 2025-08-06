import React, { useState } from 'react';
import { View } from 'native-base';
import { TextInput, Button, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAuth } from '../contexts/AuthContext';

interface Props extends NativeStackScreenProps<any> {}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async () => {
    try {
      await login(email, password);
      navigation.replace('Home');
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <View p={4} flex={1} justifyContent="center">
      <Text variant="headlineMedium">Welcome to Joykins</Text>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={{ marginVertical: 8 }}
      />
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ marginVertical: 8 }}
      />
      <Button mode="contained" onPress={onSubmit} style={{ marginVertical: 8 }}>
        Login
      </Button>
      <Button onPress={() => navigation.navigate('Signup')}>Create Account</Button>
      <Button onPress={() => navigation.navigate('ForgotPassword')}>Forgot Password</Button>
    </View>
  );
};

export default LoginScreen;
