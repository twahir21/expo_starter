import React, { useState } from 'react';
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    // Your authentication logic here
    console.log('Logging in with:', username, password);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50 p-5">
      {/* Animated Header */}
      <Animated.View 
        entering={FadeInUp.duration(1000).springify()}
        className="items-center mb-10"
      >
        <Image
          source={require('../assets/images/icon.png')}
          className="w-24 h-24 mb-5"
        />
        <Text className="text-3xl font-bold text-gray-800">Welcome Back</Text>
      </Animated.View>

      {/* Login Form */}
      <Animated.View 
        entering={FadeInDown.duration(1000).springify()}
        className="w-full"
      >
        <TextInput
          className="bg-white p-4 rounded-lg mb-4 border border-gray-200 text-base"
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        
        <TextInput
          className="bg-white p-4 rounded-lg mb-4 border border-gray-200 text-base"
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity 
          className="bg-blue-500 p-4 rounded-lg items-center"
          onPress={handleLogin}
          disabled={loading}
        >
          <Text className="text-white font-bold text-base">
            {loading ? 'Logging in...' : 'Login'}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

export default LoginScreen;