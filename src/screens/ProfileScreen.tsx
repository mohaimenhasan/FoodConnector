import * as React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

interface Profile {
  name: string;
  description: string;
  contactInfo: string;
}

const ProfileScreen: React.FC = () => {
  const [profile, setProfile] = React.useState<Profile>({
    name: '',
    description: '',
    contactInfo: '',
  });

  const handleCreateProfile = () => {
    // Placeholder function for creating a profile
    console.log('Profile created', profile);
  };

  return (
    <View>
      <Text>Profile Screen</Text>
      <TextInput
        placeholder="Name"
        value={profile.name}
        onChangeText={(text) => setProfile({ ...profile, name: text })}
      />
      <TextInput
        placeholder="Description"
        value={profile.description}
        onChangeText={(text) => setProfile({ ...profile, description: text })}
      />
      <TextInput
        placeholder="Contact Info"
        value={profile.contactInfo}
        onChangeText={(text) => setProfile({ ...profile, contactInfo: text })}
      />
      <Button title="Create Profile" onPress={handleCreateProfile} />
    </View>
  );
};

export default ProfileScreen;
