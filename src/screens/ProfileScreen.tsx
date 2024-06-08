import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchImageLibrary } from 'react-native-image-picker';
import { styles } from '../styles/ProfileScreenStyles';
import { useAuth } from '../contexts/AuthContext';
import { Chef } from '../types/types';

const ProfileScreen: React.FC<{ route: any }> = ({ route }) => {
  const { chef } = route.params;
  const { authenticated } = useAuth();
  const isCurrentUser = authenticated && chef.email === 'user@example.com'; // Replace with actual user check

  const [profile, setProfile] = useState<Chef>(chef);

  const handleImagePicker = () => {
    launchImageLibrary({
      mediaType: 'video'
    }, (response) => {
      if (response.assets) {
        setProfile({
          ...profile,
          gallery: [...profile.gallery, ...response.assets.map(asset => ({ uri: asset.uri || '' }))]
        });
      }
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image source={{ uri: profile.image }} style={styles.profileImage} />
          <Text style={styles.name}>
            {profile.firstName} {profile.lastName} {profile.verified && <Image source={require('../assets/verified.png')} style={styles.verifiedIcon} />}
          </Text>
          <Text style={styles.description}>{profile.description}</Text>
          <Text style={styles.contact}>{profile.email}</Text>
          <Text style={styles.contact}>{profile.phone}</Text>
          <Text style={styles.contact}>{profile.address}</Text>
        </View>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{profile.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{profile.reviews}</Text>
            <Text style={styles.statLabel}>Reviews</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{profile.rating}</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
        </View>

        <View style={styles.about}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.aboutText}>{profile.description}</Text>
        </View>

        <View style={styles.gallery}>
          <Text style={styles.sectionTitle}>Gallery</Text>
          <FlatList
            data={profile.gallery}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Image source={{ uri: item.uri }} style={styles.galleryImage} />
            )}
            horizontal
          />
          {isCurrentUser && (
            <TouchableOpacity style={styles.uploadButton} onPress={handleImagePicker}>
              <Text style={styles.uploadButtonText}>Upload Media</Text>
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.reviews}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          {profile.reviewsList.map(review => (
            <View key={review.id} style={styles.review}>
              <Text style={styles.reviewer}>{review.reviewer}</Text>
              <Text style={styles.comment}>{review.comment}</Text>
              <Text style={styles.rating}>Rating: {review.rating}</Text>
            </View>
          ))}
        </View>

        {isCurrentUser && (
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const localStyles = StyleSheet.create({
  verifiedIcon: {
    width: 20,
    height: 20,
  },
});
