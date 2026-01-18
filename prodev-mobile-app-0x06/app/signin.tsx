import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  ScrollView,
  StatusBar,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from '../styles/_joinstyle';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '../constants/index';

export default function SignInScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSignIn = () => {
    // Handle sign in logic here
    console.log('Signing in with:', { email, password });
    // After successful sign in, navigate to dashboard or home
    // router.push('/dashboard');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        
        <View style={styles.iconsection}>
          <TouchableOpacity onPress={() => router.back()}>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          
          <Image 
            source={HEROLOGOGREEN} 
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
        </View>
        
        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>
            Welcome Back
          </Text>
          <Text style={styles.subText}>
            Sign in to continue your learning journey
          </Text>
        </View>
        
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              style={styles.formControl}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          
          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
                style={styles.passwordControl}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <MaterialIcons 
                  name={showPassword ? "visibility-off" : "visibility"} 
                  size={24} 
                  color="#7B7B7B" 
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity style={styles.primaryButton} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>
        
        <View style={styles.secondaryButtonGroup}>
          <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#4285F4' }]}>
            <Image 
              source={GOOGLELOGO} 
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
            <Text style={[styles.secondaryButtonText, { color: '#4285F4' }]}>
              Sign in with Google
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#1877F2' }]}>
            <Image 
              source={FACEBOOKLOGO} 
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
            <Text style={[styles.secondaryButtonText, { color: '#1877F2' }]}>
              Sign in with Facebook
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>
            Don't have an account?{' '}
          </Text>
          <Link href="/join" asChild>
            <TouchableOpacity>
              <Text style={styles.signupSubTitleText}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}