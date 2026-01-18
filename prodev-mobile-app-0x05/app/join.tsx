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

export default function JoinScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSignUp = () => {
    // Handle sign up logic here
    console.log('Signing up with:', { name, email, password });
    // After successful sign up, navigate to dashboard or home
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
            Join Now
          </Text>
          <Text style={styles.subText}>
            Create your account to start your learning journey
          </Text>
        </View>
        
        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Full Name</Text>
            <TextInput
              style={styles.formControl}
              value={name}
              onChangeText={setName}
              placeholder="Enter your full name"
              autoCapitalize="words"
            />
          </View>
          
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
          </View>
          
          <TouchableOpacity style={styles.primaryButton} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
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
              Sign up with Google
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#1877F2' }]}>
            <Image 
              source={FACEBOOKLOGO} 
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
            />
            <Text style={[styles.secondaryButtonText, { color: '#1877F2' }]}>
              Sign up with Facebook
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>
            Already have an account?{' '}
          </Text>
          <Link href="/signin" asChild>
            <TouchableOpacity>
              <Text style={styles.signupSubTitleText}>
                Sign In
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}