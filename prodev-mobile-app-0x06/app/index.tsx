import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '../styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '../constants/index';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground 
        source={BACKGROUNDIMAGE} 
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image 
            source={HEROLOGO} 
            style={{ width: 200, height: 200 }}
            resizeMode="contain"
          />
        </View>
        
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            Empower Your Journey,
          </Text>
          <Text style={styles.titleText}>
            Master Your Skills
          </Text>
          
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              Your Ultimate guide to continuous learning
            </Text>
            <Text style={styles.titleSubText}>
              and professional growth
            </Text>
          </View>
        </View>
        
        <View style={styles.buttonGroup}>
          <Link href="/join" asChild>
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.buttonPrimaryText}>
                Get Started
              </Text>
            </TouchableOpacity>
          </Link>
          
          <Link href="/signin" asChild>
            <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>
                Sign In
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
        
        <View style={styles.buttonGroupSubText}>
          <Text style={styles.titleSubText}>
            Already have an account?
          </Text>
          <Link href="/signin" asChild>
            <TouchableOpacity>
              <Text style={[styles.titleSubText, { fontWeight: 'bold' }]}>
                Sign In
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}