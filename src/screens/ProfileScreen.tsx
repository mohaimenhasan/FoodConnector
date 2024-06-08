import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchImageLibrary } from 'react-native-image-picker';
import { styles } from '../styles/ProfileScreenStyles';
import { RootStackParamList } from '../navigation/types'; // Adjust the import path as necessary
import { RouteProp } from '@react-navigation/native';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;
type Props = {
  route: ProfileScreenRouteProp;
};

interface GalleryItem {
  uri: string;
}

interface Review {
  id: string;
  reviewer: string;
  comment: string;
  rating: number;
}

interface Profile {
  name: string;
  description: string;
  contactInfo: string;
  followers: number;
  reviews: number;
  rating: number;
  gallery: GalleryItem[];
  reviewsList: Review[];
}

function ProfileScreen({ route }: Props) {
  const { chef } = route.params;

  const [profile, setProfile] = useState<Profile>({
    name: chef.name,
    description: chef.description,
    contactInfo: chef.email,
    followers: chef.followers,
    reviews: chef.reviews,
    rating: chef.rating,
    gallery: chef.gallery,
    reviewsList: chef.reviewsList
  });

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
          <Image source={{ uri: chef.image }} style={styles.profileImage} />
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.description}>{profile.description}</Text>
          <Text style={styles.contact}>{profile.contactInfo}</Text>
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
          <TouchableOpacity style={styles.uploadButton} onPress={handleImagePicker}>
            <Text style={styles.uploadButtonText}>Upload Media</Text>
          </TouchableOpacity>
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

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
